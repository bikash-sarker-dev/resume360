import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useState, useContext } from 'react';
import ResumeView from '../../resume-view/ResumeView';
import { AuthContext } from '../../../../contextApi/AuthenticationContext';


const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'jobTitle', label: 'Job Title', minWidth: 100 },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 100,
        align: 'right',
    },
];


const ResumeList = ({ searchTerm }) => {
    const { user } = useContext(AuthContext); // Get user from AuthContext
    const axiosPublic = useAxiosPublic();
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [anchorEls, setAnchorEls] = useState({});
    const [deletingId] = useState(null);
    const [viewingResume, setViewingResume] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    React.useEffect(() => {
        const fetchResumes = async () => {
            try {
                const res = await axiosPublic.get('/resume');
                if (res.data.status === 200) {
                    const fetchedRows = res.data.result.map((resume) => ({
                        id: resume._id,
                        name: resume.personalInfo?.fullName || 'N/A',
                        jobTitle: resume.personalInfo?.jobTitle || 'N/A',
                        email: resume.personalInfo?.email || 'N/A', // Add email here
                    }));
                    setRows(fetchedRows);
                }
            } catch (error) {
                console.error('Error fetching resumes:', error);
            } finally {
                setLoading(false);
            }
        };
        

        fetchResumes();
    }, [axiosPublic]);

    const handleClick = (event, index) => {
        setAnchorEls({ ...anchorEls, [index]: event.currentTarget });
    };

    const handleClose = (index) => {
        setAnchorEls({ ...anchorEls, [index]: null });
    };

    const handleAction = async (type, row) => {
        if (type === 'Delete') {
            Swal.fire({
                title: 'Are you sure?',
                text: `You are about to delete "${row.name}" resume.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'var(--color-r-primary)',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Deleting...',
                        text: 'Please wait while the resume is being deleted.',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        didOpen: () => {
                            Swal.showLoading();
                        },
                    });

                    try {
                        const res = await axiosPublic.delete(`/resume/${row.id}`);
                        Swal.close(); // Close loading modal

                        if (res.status === 200 || res.data.deletedCount > 0) {
                            setRows((prev) => prev.filter((r) => r.id !== row.id));
                            Swal.fire({
                                title: 'Deleted!',
                                text: `"${row.name}" has been deleted.`,
                                icon: 'success',
                                confirmButtonColor: 'var(--color-r-primary)',
                            });
                        } else {
                            Swal.fire({
                                title: 'Failed!',
                                text: 'Could not delete the resume.',
                                icon: 'error',
                                confirmButtonColor: 'var(--color-r-primary)',
                            });
                        }
                    } catch (err) {
                        console.error(err);
                        Swal.close();
                        Swal.fire({
                            title: 'Error!',
                            text: 'Something went wrong while deleting.',
                            icon: 'error',
                            confirmButtonColor: 'var(--color-r-primary)',
                        });
                    }
                }
            });
        }
        else if (type === 'View') {
            try {
                const res = await axiosPublic.get(`/resume/${row.id}`);
                if (res.status === 200) {
                    setViewingResume(res.data.result);
                    setModalOpen(true);
                }
            } catch (error) {
                console.error('Failed to fetch resume:', error);
            }
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if (loading) return (
        <div className="h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-xl"></span>
        </div>
    );

    // ✅ Filter logic based on user email
    const filteredRows = rows.filter((row) =>
        row.email === user?.email && (
            row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id || index}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            if (column.id === 'action') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <IconButton onClick={(event) => handleClick(event, index)}>
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                        <Menu
                                                            anchorEl={anchorEls[index]}
                                                            open={Boolean(anchorEls[index])}
                                                            onClose={() => handleClose(index)}
                                                        >
                                                            <MenuItem
                                                                onClick={() => {
                                                                    handleClose(index);
                                                                    handleAction('View', row);
                                                                }}
                                                            >
                                                                View
                                                            </MenuItem>
                                                            {/* <MenuItem
                                                                onClick={() => {
                                                                    handleClose(index);
                                                                    handleAction('Edit', row);
                                                                }}
                                                            >
                                                                Edit
                                                            </MenuItem> */}
                                                            <MenuItem
                                                                onClick={() => {
                                                                    handleClose(index);
                                                                    handleAction('Delete', row);
                                                                }}
                                                            >
                                                                {deletingId === row.id ? (
                                                                    <CircularProgress size={20} color="error" />
                                                                ) : (
                                                                    'Delete'
                                                                )}
                                                            </MenuItem>
                                                        </Menu>
                                                    </TableCell>
                                                );
                                            }
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && value !== 'N/A' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={filteredRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <ResumeView
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
                resume={viewingResume}
            />
        </>
    );
};

export default ResumeList;

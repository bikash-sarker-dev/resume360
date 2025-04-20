import React, { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, TablePagination, IconButton, Paper, Menu, MenuItem
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const columns = [
    { id: 'fullName', label: 'Name', minWidth: 150 },
    { id: 'email', label: 'Email', minWidth: 150 },
    { id: 'company', label: 'Company', minWidth: 150 },
    { id: 'date', label: 'Date', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100, align: 'right' }
];

const CoverLetterList = ({ searchTerm }) => {
    const axiosPublic = useAxiosPublic();
    const [coverLetters, setCoverLetters] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [anchorEls, setAnchorEls] = useState({});

    useEffect(() => {
        axiosPublic.get('/cover-letter')
            .then(res => {
                setCoverLetters(res.data.result);
            });
    }, [axiosPublic]);

    const handleClick = (event, index) => {
        setAnchorEls({ ...anchorEls, [index]: event.currentTarget });
    };

    const handleClose = (index) => {
        setAnchorEls({ ...anchorEls, [index]: null });
    };

    const handleDelete = async (row, index) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You are about to delete "${row.personalInfo.fullName}" cover letter.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--color-r-primary)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Deleting...',
                    text: 'Please wait while the cover letter is being deleted.',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });

                try {
                    const res = await axiosPublic.delete(`/cover-letter/${row._id}`);
                    Swal.close();

                    if (res.status === 200 || res.data.deletedCount > 0) {
                        setCoverLetters((prev) => prev.filter((cl) => cl._id !== row._id));
                        Swal.fire({
                            title: 'Deleted!',
                            text: `"${row.personalInfo.fullName}" has been deleted.`,
                            icon: 'success',
                            confirmButtonColor: 'var(--color-r-primary)',
                        });
                    } else {
                        Swal.fire({
                            title: 'Failed!',
                            text: 'Could not delete the cover letter.',
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

        handleClose(index);
    };

    const filtered = coverLetters.filter(cl =>
        cl.personalInfo.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell key={col.id} align={col.align || 'left'} style={{ minWidth: col.minWidth }}>
                                    {col.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow hover key={row._id}>
                                <TableCell>{row.personalInfo.fullName}</TableCell>
                                <TableCell>{row.personalInfo.email}</TableCell>
                                <TableCell>{row.hiringManager.company}</TableCell>
                                <TableCell>{row.personalInfo.date}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={(e) => handleClick(e, index)}>
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEls[index]}
                                        open={Boolean(anchorEls[index])}
                                        onClose={() => handleClose(index)}
                                    >
                                        <MenuItem onClick={() => handleClose(index)}>View</MenuItem>
                                        <MenuItem onClick={() => handleClose(index)}>Edit</MenuItem>
                                        <MenuItem onClick={() => handleDelete(row, index)}>Delete</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={filtered.length}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10, 25, 50]}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default CoverLetterList;

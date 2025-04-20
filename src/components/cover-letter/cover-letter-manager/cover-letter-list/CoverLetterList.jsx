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

  const handleDelete = (id, index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This cover letter will be permanently deleted.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--color-r-primary)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/cover-letter/${id}`)
          .then(() => {
            const updated = coverLetters.filter(cl => cl._id !== id);
            setCoverLetters(updated);
            Swal.fire('Deleted!', 'The cover letter has been deleted.', 'success');
          });
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
                    <MenuItem onClick={() => { console.log("View", row); handleClose(index); }}>View</MenuItem>
                    <MenuItem onClick={() => { console.log("Edit", row); handleClose(index); }}>Edit</MenuItem>
                    <MenuItem onClick={() => handleDelete(row._id, index)}>Delete</MenuItem>
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

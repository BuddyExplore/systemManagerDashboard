import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";

/* Table data */
function createMessageData(id, sender, recipient, subject, content, status, dateSent) {
  return { id, sender, recipient, subject, content, status, dateSent };
}

const rows = [
  createMessageData(1, "John Doe", "Inquiry about tour", "I have some questions about the upcoming tour.", "Unread", "2024-07-20"),
  createMessageData(2, "Jane Smith", "Booking confirmation", "I would like to confirm my booking.", "Read", "2024-07-18"),
  createMessageData(3, "Alice Johnson", "Technical issue", "I am facing an issue with the website.", "Unread", "2024-07-15"),
  createMessageData(4, "Bob Brown",  "Feedback", "Great service!", "Read", "2024-07-10"),
  createMessageData(5, "Charlie Davis", "Payment issue", "I have a problem with my payment.", "Unread", "2024-07-08"),
];

const CustomIconButton = styled(IconButton)({
  boxShadow: "none",
});

const Settings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [filterByStatus, setFilterByStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusFilterChange = (event) => {
    setFilterByStatus(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Read":
        return "green";
      case "Unread":
        return "red";
      default:
        return "black";
    }
  };

  const filteredRows = rows.filter((row) => {
    return !filterByStatus || row.status === filterByStatus;
  });

  const totalRows = filteredRows.length;
  const displayedRows = Math.min(currentPage * rowsPerPage, totalRows);

  const uniqueStatuses = [...new Set(rows.map((row) => row.status))];

  return (
    <>
      <Box sx={{ alignItems: "right", textAlign: "right" }}>
        <div className="d-flex justify-content-end align-items-center mt-24 mb-1 px-4">
          <FormControl
            variant="outlined"
            style={{ minWidth: 150, minHeight: 50, marginRight: "20px", borderRadius: "100px"}}
          >
            <InputLabel>Filter By Status</InputLabel>
            <Select
              value={filterByStatus}
              onChange={handleStatusFilterChange}
              label="Filter By Status"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {uniqueStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </div>
      </Box>

      <div
        className="card border-2 bg-white"
        style={{
          border:"1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "30px",
        }}
      >
        <div className="table-responsive py-3 px-5">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Message ID</TableCell>
                  <TableCell>Sender</TableCell>                
                  <TableCell>Subject</TableCell>
                  <TableCell>Content</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date Sent</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>{row.sender}</TableCell>
                      <TableCell>{row.subject}</TableCell>
                      <TableCell>{row.content}</TableCell>
                      <TableCell style={{ color: getStatusColor(row.status) }}>
                        {row.status}
                      </TableCell>
                      <TableCell>{row.dateSent}</TableCell>
                      <TableCell>
                        <CustomIconButton
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </CustomIconButton>
                        <Menu
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Delete Message</MenuItem>
                          <MenuItem onClick={handleClose}>Mark as Read</MenuItem>
                          <MenuItem onClick={handleClose}>Reply</MenuItem>
                          <MenuItem onClick={handleClose}>Forward</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'right',
          mt: 5,
          mb:5,
          px: 4,
        }}
      >
        <span>{displayedRows} of {totalRows} rows</span>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(totalRows / rowsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
        <span>Page {currentPage} of {Math.ceil(totalRows / rowsPerPage)}</span>
      </Box>

   
    </>
  );
};


export default Settings;

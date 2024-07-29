import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

/* Table data */
function createMessageData(
  id,
  sender,
  senderEmail,
  subject,
  content,
  status,
  dateSent
) {
  return {
    id,
    sender,
    senderEmail,
    subject,
    content,
    status,
    dateSent,
  };
}

const rows = [
  createMessageData(
    1,
    "Madhusha Hansini",
    "madhusha99@gmail.com",
    5,
    "",
    "Pending"
  ),
  createMessageData(
    2,
    "Nipun Bathiya",
    "nbperera123@gmail.com",
    6,
    "",
    "Approved"
  ),
  createMessageData(
    3,
    "Pathumi Ahinsa",
    "pathufernando@gmail.com",
    3,
    "",
    "Rejected"
  ),
  createMessageData(
    4,
    "Tharindra Fernando",
    "tharindra23@gmail.com",
    6,
    "",
    "Approved"
  ),
  createMessageData(
    5,
    "Ravindu Hasanka",
    "ravindu2000@gmail.com",
    6,
    "",
    "Pending"
  ),
];

const activityProvider = () => {
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
      case "Approved":
        return "green";
      case "Pending":
        return "orange";
      case "Rejected":
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
            style={{
              minWidth: 150,
              minHeight: 50,
              marginRight: "20px",
              borderRadius: "100px",
            }}
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
          border: "1px solid #ddd",
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
                  <TableCell>ID</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>No of documents</TableCell>
                  <TableCell>Documents Uploaded</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(
                    (currentPage - 1) * rowsPerPage,
                    currentPage * rowsPerPage
                  )
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Box>
                            <div style={{ color: "black" }}>{row.sender}</div>
                            <div style={{ color: "grey" }}>
                              {row.senderEmail}
                            </div>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>{row.subject}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="inherit"
                          size="small"
                          style={{ borderRadius: "10px",marginRight: "10px" }}
                        >
                          View
                        </Button>
                        <Button variant="contained" color="inherit" size="small" style={{ borderRadius: "10px" }}>
                          Download
                        </Button>
                      </TableCell>
                      <TableCell style={{ color: getStatusColor(row.status) }}>
                        {row.status}
                      </TableCell>
                      <TableCell>
                      {/*<Button
                          variant="contained"
                          color="success"
                          size="small"
                          style={{ marginTop: "5px", marginRight: "20px" }}
                        >
                          View
                        </Button>*/}

                        {row.status !== "Approved" && (
                          <Button
                            variant="contained"
                            color="success"
                            size="small"
                            style={{ marginTop: "5px" }}
                          >
                            Approve
                          </Button>
                        )}

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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "right",
          mt: 5,
          mb: 5,
          px: 4,
        }}
      >
        <span>
          {displayedRows} of {totalRows} rows
        </span>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(totalRows / rowsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
        <span>
          Page {currentPage} of {Math.ceil(totalRows / rowsPerPage)}
        </span>
      </Box>
    </>
  );
};

export default activityProvider;

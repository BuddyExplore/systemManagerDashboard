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

/* Example user images */
import user1 from "../assets/uploadImages/user1.png";
import user2 from "../assets/uploadImages/user2.png";
import user3 from "../assets/uploadImages/user3.png";
import user4 from "../assets/uploadImages/user4.png";
import user5 from "../assets/uploadImages/user5.jpeg";

/* Table data */
function createData(
  tripId,
  vehicle,
  firstName,
  lastName,
  email,
  numberOfPeople,
  numberOfDays,
  from,
  to,
  status,
  image
) {
  return {
    tripId,
    vehicle,
    firstName,
    lastName,
    email,
    numberOfPeople,
    numberOfDays,
    from,
    to,
    status,
    image,
  };
}

const rows = [
  createData(
    1,
    "Car",
    "John",
    "Doe",
    "john.doe@example.com",
    2,
    5,
    "2024-07-01",
    "2024-07-06",
    "Approved",
    user1
  ),
  createData(
    2,
    "Bus",
    "Jane",
    "Smith",
    "jane.smith@example.com",
    45,
    1,
    "2024-07-10",
    "2024-07-11",
    "Rejected",
    user2
  ),
  createData(
    3,
    "Bike",
    "Alice",
    "Johnson",
    "alice.johnson@example.com",
    1,
    3,
    "2024-07-15",
    "2024-07-18",
    "Pending",
    user3
  ),
  createData(
    4,
    "Van",
    "Bob",
    "Brown",
    "bob.brown@example.com",
    8,
    7,
    "2024-07-20",
    "2024-07-27",
    "Approved",
    user4
  ),
  createData(
    5,
    "Car",
    "Charlie",
    "Davis",
    "charlie.davis@example.com",
    4,
    2,
    "2024-07-22",
    "2024-07-24",
    "Pending",
    user5
  ),
  createData(
    6,
    "Car",
    "Charlie",
    "Davis",
    "charlie.davis@example.com",
    4,
    2,
    "2024-07-22",
    "2024-07-24",
    "Pending",
    user5
  ),
  createData(
    7,
    "Car",
    "Charlie",
    "Davis",
    "charlie.davis@example.com",
    4,
    2,
    "2024-07-22",
    "2024-07-24",
    "Pending",
    user5
  ),
  createData(
    8,
    "Car",
    "Charlie",
    "Davis",
    "charlie.davis@example.com",
    4,
    2,
    "2024-07-22",
    "2024-07-24",
    "Pending",
    user5
  ),
  createData(
    9,
    "Car",
    "Charlie",
    "Davis",
    "charlie.davis@example.com",
    4,
    2,
    "2024-07-22",
    "2024-07-24",
    "Pending",
    user5
  ),
  createData(
    10,
    "Car",
    "Charlie",
    "Davis",
    "charlie.davis@example.com",
    4,
    2,
    "2024-07-22",
    "2024-07-24",
    "Pending",
    user5
  ),
  createData(
    11,
    "Car",
    "Charlie",
    "Davis",
    "charlie.davis@example.com",
    4,
    2,
    "2024-07-22",
    "2024-07-24",
    "Pending",
    user5
  ),
  createData(
    12,
    "Car",
    "Charlie",
    "Davis",
    "charlie.davis@example.com",
    4,
    2,
    "2024-07-22",
    "2024-07-24",
    "Pending",
    user5
  ),
];

const CustomIconButton = styled(IconButton)({
  boxShadow: "none",
});

const Trips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [filterByVehicle, setFilterByVehicle] = useState("");
  const [filterByStatus, setFilterByStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleVehicleFilterChange = (event) => {
    setFilterByVehicle(event.target.value);
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
      case "Rejected":
        return "red";
      case "Pending":
        return "orange";
      default:
        return "black";
    }
  };

  const filteredRows = rows.filter((row) => {
    return (
      (!filterByVehicle || row.vehicle === filterByVehicle) &&
      (!filterByStatus || row.status === filterByStatus)
    );
  });

  const totalRows = filteredRows.length;

  // Calculate the correct start and end indices for slicing
  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginatedRows = filteredRows.slice(startIdx, endIdx);

  const uniqueVehicles = [...new Set(rows.map((row) => row.vehicle))];
  const uniqueStatuses = [...new Set(rows.map((row) => row.status))];

  return (
    <>
      <Box sx={{ alignItems: "right", textAlign: "right" }}>
        <div className="d-flex justify-content-end align-items-center mt-24 mb-1 px-4">
          <FormControl
            style={{
              minWidth: 150,
              minHeight: 50,
              marginRight: "20px",
              borderRadius: "10px",
            }}
          >
            <InputLabel>Filter By Vehicle</InputLabel>
            <Select
              value={filterByVehicle}
              onChange={handleVehicleFilterChange}
              label="Filter By Vehicle"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {uniqueVehicles.map((vehicle) => (
                <MenuItem key={vehicle} value={vehicle}>
                  {vehicle}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
                  <TableCell>Trip ID</TableCell>
                  <TableCell>Vehicle</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Number of people</TableCell>
                  <TableCell>Number of days</TableCell>
                  <TableCell>From</TableCell>
                  <TableCell>To</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows.map((row) => (
                    <TableRow
                      key={row.tripId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.tripId}
                      </TableCell>
                      <TableCell>{row.vehicle}</TableCell>
                      <TableCell>
                        <div style={styles.userCell}>
                          <img
                            src={row.image}
                            alt="user"
                            style={styles.userImage}
                          />
                          <div>
                            <div style={styles.userName}>
                              {row.firstName} {row.lastName}
                            </div>
                            <div style={styles.userEmail}>{row.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{row.numberOfPeople}</TableCell>
                      <TableCell>{row.numberOfDays}</TableCell>
                      <TableCell>{row.from}</TableCell>
                      <TableCell>{row.to}</TableCell>
                      <TableCell
                        style={{ color: getStatusColor(row.status) }}
                      >
                        {row.status}
                      </TableCell>
                      <TableCell>
                        <CustomIconButton onClick={handleClick}>
                          <MoreVertIcon />
                        </CustomIconButton>
                        <Menu
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>
                            More Details
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            Update Trip
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            Delete Trip
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            Make Trip Disable
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            Complain Trip
                          </MenuItem>
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
        <span>{paginatedRows.length} of {totalRows} rows</span>
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

const styles = {
  userCell: {
    display: "flex",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 12,
    color: "gray",
  },
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  },
};

export default Trips;

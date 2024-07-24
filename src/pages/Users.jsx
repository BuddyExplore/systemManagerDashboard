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
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

/* Example user images */
import user1 from "../assets/uploadImages/user1.png";
import user2 from "../assets/uploadImages/user2.png";
import user3 from "../assets/uploadImages/user3.png";
import user4 from "../assets/uploadImages/user4.png";
import user5 from "../assets/uploadImages/user5.jpeg";

/* Table data */
function createData(
  id,
  firstName,
  lastName,
  email,
  mobile,
  role,
  status,
  image
) {
  return { id, firstName, lastName, email, mobile, role, status, image };
}

const rows = [
  createData(
    1,
    "John",
    "Doe",
    "john.doe@example.com",
    "123-456-7890",
    "Tourist",
    "Approved",
    user1
  ),
  createData(
    2,
    "Jane",
    "Smith",
    "jane.smith@example.com",
    "098-765-4321",
    "Admin",
    "Rejected",
    user2
  ),
  createData(
    3,
    "Alice",
    "Johnson",
    "alice.johnson@example.com",
    "555-123-4567",
    "System Provider",
    "Pending",
    user3
  ),
  createData(
    4,
    "Bob",
    "Brown",
    "bob.brown@example.com",
    "777-888-9999",
    "Tourist",
    "Approved",
    user4
  ),
  createData(
    5,
    "Charlie",
    "Davis",
    "charlie.davis@example.com",
    "111-222-3333",
    "Admin",
    "Pending",
    user5
  ),
];

const CustomIconButton = styled(IconButton)({
  boxShadow: "none",
});

const Users = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [filterByRole, setFilterByRole] = useState("");
  const [filterByStatus, setFilterByStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    role: "",
    status: "",
  });
  const rowsPerPage = 10;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRoleFilterChange = (event) => {
    setFilterByRole(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setFilterByStatus(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    console.log(newUser);
    handleCloseModal();
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
      (!filterByRole || row.role === filterByRole) &&
      (!filterByStatus || row.status === filterByStatus)
    );
  });

  const totalRows = filteredRows.length;
  const displayedRows = Math.min(currentPage * rowsPerPage, totalRows);

  const uniqueRoles = [...new Set(rows.map((row) => row.role))];
  const uniqueStatuses = [...new Set(rows.map((row) => row.status))];

  return (
    <>
      <Box sx={{ alignItems: "right", textAlign: "right" }}>
        <div className="d-flex justify-content-end align-items-center mt-24 mb-1 ">
          <FormControl
            style={{ minWidth: 150, minHeight: 50, marginRight: "20px"}}
          >
            <InputLabel>Filter By Role</InputLabel>
            <Select
              value={filterByRole}
              onChange={handleRoleFilterChange}
              label="Filter By Role"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {uniqueRoles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
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

          <Button
            variant="contained"
            style={{ backgroundColor: "#0078A1", color: "white", borderShadow:"none" }} 
            onClick={handleAddUser}
          >
            Add User
          </Button>
        </div>
      </Box>

      <div
        className="card border-2 bg-white"
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          marginTop: "30px",
        }}
      >
        <div className="table-responsive py-3 px-5">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold'}}>User ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>User</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>Mobile No</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>Role</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>Action</TableCell>
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
                        <div style={styles.userContainer}>
                          <img
                            src={row.image}
                            alt={`${row.firstName} ${row.lastName}`}
                            style={styles.userImage}
                          />
                          <div style={styles.userInfo}>
                            <div>
                              {row.firstName} {row.lastName}
                            </div>
                            <div style={styles.userEmail}>{row.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{row.mobile}</TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell style={{ color: getStatusColor(row.status) }}>
                        {row.status}
                      </TableCell>
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
                          <MenuItem onClick={handleClose}>Delete User</MenuItem>
                          <MenuItem onClick={handleClose}>
                            Disable User
                          </MenuItem>
                          <MenuItem onClick={handleClose}>Update User</MenuItem>
                          <MenuItem onClick={handleClose}>
                            View Profile
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

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={styles.modal}>
          <h2>Add New User</h2>
          <TextField
            label="First Name"
            name="firstName"
            value={newUser.firstName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={newUser.lastName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Mobile"
            name="mobile"
            value={newUser.mobile}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={newUser.role}
              onChange={handleInputChange}
              label="Role"
            >
              {uniqueRoles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={newUser.status}
              onChange={handleInputChange}
              label="Status"
            >
              {uniqueStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddUser}
            fullWidth
          >
            Add User
          </Button>
        </Box>
      </Modal>
    </>
  );
};

const styles = {
  userContainer: {
    display: "flex",
    alignItems: "center",
  },
  userImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
  },
  userEmail: {
    color: "gray",
    fontSize: 12,
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};

export default Users;

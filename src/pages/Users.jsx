import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const Users = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [users, setUsers] = useState([]);
  const [filterByRole, setFilterByRole] = useState("");
  const [filterByStatus, setFilterByStatus] = useState("");
  const [filterByCountry, setFilterByCountry] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    password: "",
    role: "TOURIST",
  });
  const rowsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/getUsersByRole/TOURIST"
      );
      setUsers(response.data.content);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
    setNewUser({
      first_name: "",
      last_name: "",
      email: "",
      mobile_no: "",
      password: "",
      role: "TOURIST",
    });
    setIsModalOpen(true);
  };

  const handleSaveUser = async () => {
    console.log(newUser);
    try {
      const response = await axios.post(
        "http://localhost:5001/addUser",
        newUser // Pass newUser as the request body
      );
      console.log("User added successfully:", response.data);
      fetchData(); // Fetch data again to update the user list
    } catch (error) {
      console.error("Error adding user:", error);
    }
    handleCloseModal();
  };

  const filteredRows = users
    .filter((row) => {
      return (
        (!filterByRole || row.role === filterByRole) &&
        (!filterByStatus || row.status === filterByStatus) &&
        (!filterByCountry || row.country === filterByCountry) &&
        (row.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.email.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.created_at) - new Date(a.created_at);
      } else {
        return new Date(a.created_at) - new Date(b.created_at);
      }
    });

  const totalRows = filteredRows.length;
  const displayedRows = Math.min(currentPage * rowsPerPage, totalRows);

  const handleStatusFilterChange = (event) => {
    setFilterByStatus(event.target.value);
  };

  const handleCountryFilterChange = (event) => {
    setFilterByCountry(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const uniqueStatuses = [...new Set(users.map((row) => row.status))];
  const uniqueCountries = [...new Set(users.map((row) => row.country))];

  return (
    <>
      <Box sx={{ alignItems: "right", textAlign: "right" }}>
        <div className="d-flex justify-content-end align-items-center mt-24 mb-1 ">
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ marginRight: "20px" }}
          />

        {/*  <FormControl
            variant="outlined"
            style={{
              minWidth: 150,
              minHeight: 50,
              marginRight: "20px",
              borderRadius: "100px",
            }}
          >
            <InputLabel>Filter By Country</InputLabel>
            <Select
              variant="outlined"
              value={filterByCountry}
              onChange={handleCountryFilterChange}
              label="Filter By Country"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {uniqueCountries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
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
            <InputLabel>Sort Order</InputLabel>
            <Select
              variant="outlined"
              value={sortOrder}
              onChange={handleSortOrderChange}
              label="Sort Order"
            >
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
            </Select>
          </FormControl>*/}

          <Button
            style={{
              color: "white",
              backgroundColor: "#0078A1",
              borderRadius: "4px",
              padding: "4px 8px",
            }}
            onClick={handleAddUser}
          >
            Add Tourist
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
                  <TableCell sx={{ fontWeight: "bold" }}>Tourist ID</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Tourist</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Mobile No</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}></TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}></TableCell>
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
                          <div style={styles.userInfo}>
                            <div>
                              {row.first_name} {row.last_name}
                            </div>
                            <div style={styles.userEmail}>{row.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{row.mobile_no}</TableCell>
                      <TableCell>{row.country}</TableCell>
                      <TableCell>
                        <Button
                          style={{
                            color: "#0078A1",
                            backgroundColor: "rgb(0, 120, 161,0.2)",
                            borderRadius: "4px",
                            padding: "2px 8px",
                            marginRight: "20px",
                          }}
                        >
                          View
                        </Button>
                        <Button
                          style={{
                            color: "#0078A1",
                            backgroundColor: "rgb(0, 120, 161,0.2)",
                            borderRadius: "4px",
                            padding: "2px 8px",
                            marginRight: "20px",
                          }}
                        >
                          Update
                        </Button>
                        <Button
                          style={{
                            color: "#0078A1",
                            backgroundColor: "rgb(0, 120, 161,0.2)",
                            borderRadius: "4px",
                            padding: "2px 8px",
                            marginRight: "20px",
                          }}
                        >
                          Disable
                        </Button>
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
            name="first_name"
            value={newUser.first_name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="last_name"
            value={newUser.last_name}
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
            label="Mobile No"
            name="mobile_no"
            value={newUser.mobile_no}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={newUser.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveUser}
            fullWidth
          >
            Save User
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

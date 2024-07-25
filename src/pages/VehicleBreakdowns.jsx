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
import { styled } from "@mui/system";

/* Example user images */
import user1 from "../assets/uploadImages/user1.png";
import user2 from "../assets/uploadImages/user2.png";
import user3 from "../assets/uploadImages/user3.png";
import user4 from "../assets/uploadImages/user4.png";
import user5 from "../assets/uploadImages/user5.jpeg";

/* Table data */
function createData(driverId, driverName, email, message, location, image) {
  return { driverId, driverName, email, message, location, image };
}

const rows = [
  createData("D001", "John Doe", "john@example.com", "Engine failure", "New York", user1),
  createData("D002", "Jane Smith", "jane@example.com", "Flat tire", "Los Angeles", user2),
  createData("D003", "Mike Johnson", "mike@example.com", "Brake issue", "Chicago", user3),
  createData("D004", "Emily Davis", "emily@example.com", "Transmission problem", "Houston", user4),
  createData("D005", "James Brown", "james@example.com", "Battery dead", "Phoenix", user5),
];

const CustomIconButton = styled(IconButton)({
  boxShadow: "none",
});

const VehicleBreakdowns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDriverId, setSelectedDriverId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (event, driverId) => {
    setAnchorEl(event.currentTarget);
    setSelectedDriverId(driverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedDriverId(null);
  };

  const handleAction = (action) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(`${action} for driver ID: ${selectedDriverId}`);
      setIsLoading(false);
      handleClose();
    }, 2000);
  };

  return (
    <>
      <div
        className="card mt-24 border-1 bg-white"
        style={{
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="mb-4 font-bold text-sm pt-4 px-4">
          Vehicle Breakdowns
        </h2>

        <div className="table-responsive py-3 px-5 ">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold'}}>Driver ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>Driver</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>Breakdown Message</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>Location</TableCell>
                  <TableCell sx={{ fontWeight: 'bold'}}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.driverId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.driverId}
                    </TableCell>
                    <TableCell>
                      <div style={styles.userContainer}>
                        <img
                          src={row.image}
                          alt={`${row.driverName}`}
                          style={styles.userImage}
                        />
                        <div style={styles.userInfo}>
                          <div>{row.driverName}</div>
                          <div style={styles.userEmail}>{row.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.message}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>
                      <CustomIconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={(event) => handleClick(event, row.driverId)}
                      >
                        <MoreVertIcon />
                      </CustomIconButton>
                      <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => handleAction("Handle Breakdown")}>
                          Handle Breakdown
                        </MenuItem>
                        <MenuItem onClick={() => handleAction("Mark as Handled")}>
                          Mark as Handled
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Other Option</MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
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
};

export default VehicleBreakdowns;

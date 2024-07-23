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

/* Table data */
function createData(id, type, subject, date, description, status) {
  return { id, type, subject, date, description, status };
}

const rows = [
  createData(1, "User", "John Doe", "2024-07-01", "Spam content", "Pending"),
  createData(2, "Blog", "Alice Smith", "2024-07-02", "Inappropriate content", "Reviewed"),
  createData(3, "User", "Jane Smith", "2024-07-03", "Harassment", "Pending"),
  createData(4, "Blog", "Doe Fernando", "2024-07-04", "Copyright issue", "Resolved"),
  createData(5, "User", "Alice Johnson", "2024-07-05", "Fake profile", "Reviewed"),
];

const Complains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const handleClick = (event, complaint) => {
    setAnchorEl(event.currentTarget);
    setSelectedComplaint(complaint);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedComplaint(null);
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
        <h2 className="mb-4 font-bold text-sm pt-4 px-4">Pending Complaints</h2>

        <div className="table-responsive py-3 px-5">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="complaint table">
              <TableHead>
                <TableRow>
                  <TableCell>Complaint ID</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.subject}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      <IconButton onClick={(event) => handleClick(event, row)}>
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && selectedComplaint === row}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>View Details</MenuItem>
                        <MenuItem onClick={handleClose}>Resolve Complaint</MenuItem>
                        <MenuItem onClick={handleClose}>Dismiss Complaint</MenuItem>
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

export default Complains;

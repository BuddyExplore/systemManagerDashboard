import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

/* Table data */
function createData(
  id,
  type,
  complainer,
  complainee,
  date,
  description,
  status
) {
  return { id, type, complainer, complainee, date, description, status };
}

const rows = [
  createData(
    1,
    "Tourist",
    "John Doe",
    "Alice Smith",
    "2024-07-01",
    "Spam content",
    "Pending"
  ),
  createData(
    2,
    "Blog",
    "Alice Smith",
    "Jane Smith",
    "2024-07-02",
    "Inappropriate content",
    "Resolved"
  ),
  createData(
    3,
    "Hotel Manager",
    "Jane Smith",
    "Doe Fernando",
    "2024-07-03",
    "Harassment",
    "Pending"
  ),
  createData(
    4,
    "Blog",
    "Doe Fernando",
    "Alice Johnson",
    "2024-07-04",
    "Copyright issue",
    "Resolved"
  ),
  createData(
    5,
    "Vehicle Owner",
    "Alice Johnson",
    "John Doe",
    "2024-07-05",
    "Fake profile",
    "Resolved"
  ),
];

const getTypeColor = (type) => {
  switch (type) {
    case "User":
      return "green";
    case "Blog":
      return "orange";
    default:
      return "green";
  }
};

const getStatusColor = (status) => {
  if (status === "Resolved") {
    return {
      color: "green",
      backgroundColor: "#d4edda",
      borderRadius: "4px",
      padding: "2px 8px",
    };
  } else if (status === "Pending") {
    return {
      color: "red",
      backgroundColor: "#f8d7da",
      borderRadius: "4px",
      padding: "2px 8px",
    };
  }
  return {};
};

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
        <h2 className="mb-4 font-bold text-sm pt-4 px-4">Complaints</h2>

        <div className="table-responsive py-3 px-5">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="complaint table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Complaint ID
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Complainer</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Complainee</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Complain Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell style={{ color: getTypeColor(row.type) }}>
                      {row.type}
                    </TableCell>
                    <TableCell>{row.complainer}</TableCell>
                    <TableCell>{row.complainee}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell style={{ color: getStatusColor(row.status) }}>
                      {row.status}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => console.log("Edit", row.id)}>
                        <EditIcon />
                      </IconButton>
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

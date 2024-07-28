import React from "react";
import { Card, CardActions, CardContent, Typography, Button, Menu, MenuItem } from "@mui/material";

const VehicleBreakdownBox = ({
  breakdownReason,
  vehicleOwnerId,
  vehicleOwnerName,
  vehicleNumber,
  vehicleType,
  location,
  numOfTravelers,
  numOfDays,
  tripFee,
  otherMembers,
  handleActionClick,
}) => {
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  return (
    <Card style={styles.card}>
      <CardContent style={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          Breakdown Reason: {breakdownReason}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Vehicle Owner ID:</strong> {vehicleOwnerId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Vehicle Owner Name:</strong> {vehicleOwnerName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Vehicle Number:</strong> {vehicleNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Vehicle Type:</strong> {vehicleType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Location:</strong> {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Number of Travelers:</strong> {numOfTravelers}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Number of Days:</strong> {numOfDays}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Trip Fee:</strong> ${tripFee}
        </Typography>
        {otherMembers && (
          <Typography variant="body2" color="text.secondary">
            <strong>Other Members:</strong> {otherMembers}
          </Typography>
        )}
      </CardContent>
      <CardActions style={styles.buttonContainer}>
        <Button style={styles.button} onClick={() => handleActionClick("Assign a New Vehicle")}>
          Assign a New Vehicle
        </Button>
        <Button style={styles.button} onClick={() => handleActionClick("Contact Driver")}>
          Contact Driver
        </Button>
        <Button style={styles.button} onClick={() => handleActionClick("Refund for Tourist")}>
          Refund for Tourist
        </Button>
        <Button style={styles.button} onClick={handleProfileClick}>
          View Profiles
        </Button>
        <Menu anchorEl={profileAnchorEl} keepMounted open={Boolean(profileAnchorEl)} onClose={handleProfileClose}>
          <MenuItem onClick={() => handleActionClick("View Tourist Profile")}>
            View Tourist Profile
          </MenuItem>
          <MenuItem onClick={() => handleActionClick("View Vehicle Owner Profile")}>
            View Vehicle Owner Profile
          </MenuItem>
        </Menu>
        <Button style={styles.button} onClick={() => handleActionClick("Mark as Resolved")}>
          Mark as Resolved
        </Button>
      </CardActions>
    </Card>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  cardContent: {
    flexGrow: 1,
    overflowY: "auto",
    maxHeight: 300,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    margin: 5,
    width: "90%",
    backgroundColor: "#4B6D4F",
    color: "white",
    borderRadius: "20px",
  },
};

export default VehicleBreakdownBox;

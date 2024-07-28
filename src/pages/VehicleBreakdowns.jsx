import React, { useState, useEffect } from "react";
import { Grid, Container, Box } from "@mui/material";
import VehicleBreakdownBox from "./components/vehicleBreakdownBox";

const rows = [
  {
    breakdownReason: "Engine failure",
    vehicleOwnerId: "VO001",
    vehicleOwnerName: "John Doe",
    vehicleNumber: "XYZ123",
    vehicleType: "SUV",
    location: "New York",
    numOfTravelers: 4,
    numOfDays: 3,
    tripFee: 500,
    otherMembers: "Tour Guide: Mike Johnson",
  },
  {
    breakdownReason: "Flat tire",
    vehicleOwnerId: "VO002",
    vehicleOwnerName: "Jane Smith",
    vehicleNumber: "ABC456",
    vehicleType: "Sedan",
    location: "Los Angeles",
    numOfTravelers: 2,
    numOfDays: 2,
    tripFee: 300,
    otherMembers: null,
  },
  // Add more rows as needed
];

const VehicleBreakdowns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleActionClick = (action) => {
    console.log(`${action}`);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginTop: 10 }}>
        <h2 className="mb-4 font-bold text-sm pt-4 px-4">Vehicle Breakdowns</h2>
        <Grid container spacing={4}>
          {rows.map((row, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <VehicleBreakdownBox
                breakdownReason={row.breakdownReason}
                vehicleOwnerId={row.vehicleOwnerId}
                vehicleOwnerName={row.vehicleOwnerName}
                vehicleNumber={row.vehicleNumber}
                vehicleType={row.vehicleType}
                location={row.location}
                numOfTravelers={row.numOfTravelers}
                numOfDays={row.numOfDays}
                tripFee={row.tripFee}
                otherMembers={row.otherMembers}
                handleActionClick={handleActionClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default VehicleBreakdowns;

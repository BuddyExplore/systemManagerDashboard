import React from "react";
import { Box, Typography } from "@mui/material";

const DashboardBox = ({ icon, title, amount, iconColor, borderColor }) => {
  // Combine borderColor with borderOpacity

  return (
    <Box
      className="dashboardBox"
      style={{
        width: "20%",
        marginTop: "5%",
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <Box className="flex items-center justify-center">
        <Box
          className="flex-shrink-0"
          style={{
            marginRight: "20px",
            borderRadius: "50%",
            border: `3px solid ${borderColor} `,
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {React.cloneElement(icon, {
            style: {
              fontSize: 30,
              color: iconColor,
            },
          })}
        </Box>
        <Box style={{ flex: 1 }}>
  <Typography style={{ fontWeight: '500', color: '#4A4A4A', fontSize:'1.5rem' }}>
    {amount}
  </Typography>
  <Typography style={{ color: '#6B6B6B', fontSize: '0.8rem' }}>
    {title}
  </Typography>
</Box>

      </Box>
    </Box>
  );
};

export default DashboardBox;

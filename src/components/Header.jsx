import { useState } from "react";
import {
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Tooltip,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { IoSearch } from "react-icons/io5";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Get current route from useLocation
  const location = useLocation();
  const path = location.pathname;

  // Map paths to page names
  const getPageName = (path) => {
    switch (path) {
      case "/":
        return "Dashboard";
      case "/dashboard":
        return "Dashboard";
      case "/users":
        return "Users";
      case "/trips":
        return "Trips";
      case "/approvals":
        return "Approvals";
      case "/vehicleBreakdowns":
        return "VehicleBreakdowns";
      case "/transactions":
        return "Transactions";
      case "/cards":
        return "Cooperate Cards";
      case "/travelInfo":
        return "TravelInfo";
      case "/messages":
        return "Messages";
      case "/notifications":
        return "Notifications";
      case "/complains":
        return "Complains";
      case "/analytics":
        return "Analytics";
      case "/settings":
        return "Settings";
      default:
        return "Admin Dashboard";
    }
  };

  const handleDropdownToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="fixed left-[15%] bg-transparent w-[85%]  shadow-md z-50 flex items-center justify-between ">
    
      <h2 className="text-black-800 font-bold text-xl">{getPageName(path)}</h2>

      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <div
          className="searchBox flex items-center bg-gray-100 rounded-full p-2 shadow-sm w-[300px]"
          style={{ backgroundColor: "white", marginRight: "20px" }}
        >
          <IoSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            className="w-full h-full pl-10 pr-4 py-2 outline-none rounded-full bg-gray-200 focus:bg-gray transition duration-200 font-sans"
            placeholder="Search here..."
          />
        </div>

        <Badge color="primary" variant="dot" style={{ marginRight: "20px" }}>
          <NotificationsIcon />
        </Badge>

        <Badge color="primary" variant="dot">
          <MailIcon />
        </Badge>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleDropdownToggle}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Header;

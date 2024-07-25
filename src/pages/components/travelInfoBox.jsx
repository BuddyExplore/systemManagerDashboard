import React from 'react';
import { Card, CardContent, Typography, CardMedia, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TravelInfoBox = ({ id, title, content, image, handleActionClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2, position: 'relative' }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
        sx={{
          borderRadius: '10px',
          objectFit: 'cover',
          boxShadow: 3,
          maxHeight: 150,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
      <CardContent
        sx={{
          maxHeight: 200, 
          overflowY: 'auto',  
          paddingBottom: '2rem',
          position: 'relative', 
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <IconButton
        aria-label="settings"
        aria-controls={`menu-${id}`}
        aria-haspopup="true"
        onClick={handleMenuClick}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 1,
          color:"black",
          backgroundColor:"white"
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id={`menu-${id}`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleActionClick(id, 'viewLocation')}>View Location</MenuItem>
        <MenuItem onClick={() => handleActionClick(id, 'updateLocation')}>Update Location</MenuItem>
        <MenuItem onClick={() => handleActionClick(id, 'deleteLocation')}>Delete Location</MenuItem>
      </Menu>
    </Card>
  );
};

export default TravelInfoBox;

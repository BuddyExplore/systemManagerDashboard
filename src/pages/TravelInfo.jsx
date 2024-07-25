import React, { useState } from 'react';
import { Grid, Container, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Input } from '@mui/material';
import TravelInfoBox from './components/travelInfoBox';
import Kataragama from '../assets/images/places/kataragama.jpg';
import Colombo from '../assets/images/places/colombo.jpg';
import Galle from '../assets/images/places/galle.jpeg';
import Anuradhapura from '../assets/images/places/anuradapura.jpg';
import Polonnaruwa from '../assets/images/places/polonnaruwa.jpg';
import NuwaraEliya from '../assets/images/places/nuwaraeliya.jpg';

const initialTravelData = [
  {
    id: 1,
    title: 'Colombo',
    content: 'Colombo, the bustling capital of Sri Lanka, offers a vibrant blend of modern and colonial charm. Known for its busy markets, stunning temples, and historic sites, Colombo is a hub of culture and commerce. Don’t miss the Galle Face Green, the National Museum, and the eclectic Pettah market.',
    image: Colombo,
  },
  {
    id: 2,
    title: 'Galle',
    content: 'Galle, a fortified city on Sri Lanka’s southwest coast, is renowned for its well-preserved colonial architecture and beautiful beaches. The Galle Fort, a UNESCO World Heritage site, is a highlight with its narrow streets, quaint cafes, and stunning ocean views. The nearby beaches are perfect for relaxation and water sports.',
    image: Galle,
  },
  {
    id: 3,
    title: 'Polonnaruwa',
    content: 'Polonnaruwa, an ancient city in central Sri Lanka, is known for its well-preserved ruins and rich history. The city served as the second capital of Sri Lanka after the destruction of Anuradhapura. Key attractions include the Royal Palace, the Gal Vihara rock sculptures, and the vast Parakrama Samudra lake.',
    image: Polonnaruwa,
  },
  {
    id: 4,
    title: 'Anuradhapura',
    content: 'Anuradhapura, one of the ancient capitals of Sri Lanka, is famous for its well-preserved ruins of an ancient Sinhala civilization. The city’s extensive ruins comprise various stupas, monasteries, and temples, including the sacred Sri Maha Bodhi tree, which is said to be the world’s oldest living human-planted tree.',
    image: Anuradhapura,
  },
  {
    id: 5,
    title: 'Nuwara Eliya',
    content: 'Nuwara Eliya, often referred to as "Little England," is a picturesque town in the central highlands of Sri Lanka. Known for its temperate climate, rolling tea plantations, and colonial-era bungalows, it’s a perfect retreat for nature lovers. Key attractions include Horton Plains National Park, the Victoria Park, and the serene Gregory Lake.',
    image: NuwaraEliya,
  },
  {
    id: 6,
    title: 'Kataragama',
    content: 'Kataragama is a sacred multi-religious pilgrimage town in Sri Lanka. It’s famous for the Kataragama Temple, which is worshipped by Buddhists, Hindus, and Muslims alike. The annual Esala Perahera festival attracts thousands of devotees. The town is also a gateway to the Yala National Park, known for its wildlife.',
    image: Kataragama,
  },
];

const TravelInfo = () => {
  const [travelData, setTravelData] = useState(initialTravelData);
  const [open, setOpen] = useState(false);
  const [newTravelLocation, setNewTravelLocation] = useState({
    title: '',
    content: '',
    image: ''
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTravelLocation((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewTravelLocation((prevState) => ({
        ...prevState,
        image: reader.result
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddLocation = () => {
    const newLocation = {
      ...newTravelLocation,
      id: travelData.length + 1
    };
    setTravelData((prevState) => [...prevState, newLocation]);
    handleClose();
  };

  const handleActionClick = (id, action) => {
    console.log(`Action ${action} clicked for item ${id}`);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginTop: 10 }}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Travel Location
        </Button>
        <Grid container spacing={4} sx={{ marginTop: 2 }}>
          {travelData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <TravelInfoBox
                id={item.id}
                title={item.title}
                content={item.content}
                image={item.image}
                handleActionClick={handleActionClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Travel Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the details of the new travel location.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            value={newTravelLocation.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="content"
            label="Content"
            type="text"
            fullWidth
            value={newTravelLocation.content}
            onChange={handleChange}
          />
          <Input
            margin="dense"
            name="image"
            label="Image"
            type="file"
            fullWidth
            onChange={handleFileChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddLocation} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TravelInfo;

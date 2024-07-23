import { useState } from 'react';
import { Typography, TextField, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import image1 from '../assets/images/image1.png';
import { styled } from '@mui/system';
import { Colors } from '../constants/Colors';
import CustomButton from './Custom/CustomButton';

const CustomInput = styled(TextField)({
  margin: '10px 0',
});

const NewPassword = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const onSubmitPressed = () => {
    console.warn("onSubmitPressed");
  };

 /* const onSignInPress = () => {
    console.warn("onSignInPress");
  };*/

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 relative">
        <IconButton onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-white rounded-full">
          <ArrowBack style={{ color: Colors.PRIMARY }} />
        </IconButton>

        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-1/2 max-w-xs" />
        </div>

        <Typography variant="h6" className="text-center mb-4" color={Colors.PRIMARY}>Reset your password</Typography>

        <CustomInput
          variant="filled"
          label="Code"
          placeholder="Code"
          fullWidth
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <CustomInput
          variant="filled"
          label="New Password"
          placeholder="Enter your new password"
          fullWidth
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <div className="flex justify-center mt-4">
          <CustomButton onClick={onSubmitPressed}>Submit</CustomButton>
        </div>

        <Typography
          align="center"
          sx={{ marginTop: 5, cursor: 'pointer', color: Colors.PRIMARY }}
          onClick={() => navigate('/login')}
        >
          Back to Login
        </Typography>


      </div>
    </div>
  );
};

export default NewPassword;

import React, { useState, useEffect } from 'react';
import {
  Box,
  Stack
} from '@mui/material';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import ParticlesCanvas from "./components/ParticlesCanvas";
import { color } from './theme.js';
import { Front, Back } from "./components/BusinessCard";

const BusinessCard = ({ profile }) => {

  return (
    <Flippy
      flipOnHover={true}
      flipOnClick={true}
      flipDirection="vertical"
      style={{ zIndex: '1' }}
    >
      <FrontSide style={{ boxShadow: '0 0' }}>
        <Back />
      </FrontSide>
      <BackSide style={{ boxShadow: '0 0' }}>
        <Front profile={profile} />
      </BackSide>
    </Flippy>
  );
}

const getProfile = async () => {
 const response = await fetch("/data/profile.json");
 return response.json();
};

export default function PortfolioPage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then((response) => {
      setProfile(response);
    });
  }, [])

  return (
    <Box
      display="flex"
      minHeight="100vh"
      bgcolor={ color.tangaroa[900] }
    >
      <Stack spacing={2} margin="0 auto" justifyContent="center">
        { profile && <BusinessCard profile={ profile }/> }
      </Stack>
      <ParticlesCanvas />
    </Box>
  )
}
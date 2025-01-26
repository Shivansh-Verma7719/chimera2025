import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <Box
      sx={{
        color: 'white',
        textAlign: 'center',
        py: 4,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'transparent', // Ensure background is transparent
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          Contact
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          Register
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          Team
        </Link>
      </Box>
      <Typography variant="body2" sx={{ mb: 1 }}>
        COPYRIGHT © CHIMÈRA 2024. ALL RIGHTS RESERVED.
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        IEEE Ashoka Student Branch
      </Typography>
      <Box>
        <Link href="https://www.instagram.com" color="inherit" sx={{ mx: 1 }}>
          <InstagramIcon />
        </Link>
        <Link href="https://www.twitter.com" color="inherit" sx={{ mx: 1 }}>
          <TwitterIcon />
        </Link>
      </Box>
    </Box>
  );
};

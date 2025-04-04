import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Container component="main">
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout; 
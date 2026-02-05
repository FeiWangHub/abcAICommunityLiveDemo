import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Cpu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0', backgroundColor: 'white', color: 'text.primary' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Cpu style={{ marginRight: '12px', color: '#1976D2' }} size={24} />
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 700,
                letterSpacing: '.1rem',
              }}
            >
              ABC AI Community
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={RouterLink}
                to="/internal-resources"
                color={location.pathname === '/internal-resources' ? 'primary' : 'inherit'}
              >
                Internal Resources
              </Button>
              <Button
                component={RouterLink}
                to="/external-resources"
                color={location.pathname === '/external-resources' ? 'primary' : 'inherit'}
              >
                External Resources
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Box>
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'white', borderTop: '1px solid #e0e0e0' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} ABC AI Community. Empowering through knowledge and tools.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import InternalResourcesPage from './pages/InternalResourcesPage';
import ExternalResourcesPage from './pages/ExternalResourcesPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/internal-resources" element={<InternalResourcesPage />} />
            <Route path="/external-resources" element={<ExternalResourcesPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

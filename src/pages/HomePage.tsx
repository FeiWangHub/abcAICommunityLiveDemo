import React from 'react';
import { Typography, Container, Box, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Sparkles, Shield, Zap, BookOpen } from 'lucide-react';

const HomePage: React.FC = () => {
  const aiTechs = [
    {
      title: 'Generative AI',
      description: 'Leverage the power of LLMs for content creation, coding, and analysis.',
      icon: <Sparkles size={40} color="#1976D2" />,
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=futuristic%20generative%20ai%20neural%20network%20visualization%20blue%20theme&image_size=landscape_16_9'
    },
    {
      title: 'Document Intelligence',
      description: 'Extract structured data from unstructured documents automatically.',
      icon: <Shield size={40} color="#1976D2" />,
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=document%20scanning%20and%20analysis%20ai%20concept&image_size=landscape_16_9'
    },
    {
      title: 'Agentic Workflows',
      description: 'Build autonomous agents that can plan and execute complex tasks.',
      icon: <Zap size={40} color="#1976D2" />,
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=autonomous%20ai%20agent%20working%20on%20tasks%20robotic%20arm%20digital&image_size=landscape_16_9'
    },
    {
      title: 'Knowledge Base',
      description: 'Access internal wiki pages and external benchmarking resources.',
      icon: <BookOpen size={40} color="#1976D2" />,
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=digital%20library%20ai%20knowledge%20base%20glowing%20books&image_size=landscape_16_9'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          mb: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
            Empowering Our Colleagues with AI Tooling Resources and Knowledge
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
            Your centralized hub for internal AI platforms and external industry insights.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/internal-resources"
              sx={{
                backgroundColor: 'white',
                color: '#1976D2',
                px: 4,
                py: 1.5,
                '&:hover': { backgroundColor: '#f5f5f5' },
              }}
            >
              Explore Internal Resources
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to="/external-resources"
              sx={{
                color: 'white',
                borderColor: 'white',
                px: 4,
                py: 1.5,
                '&:hover': { borderColor: '#f5f5f5', backgroundColor: 'rgba(255,255,255,0.1)' },
              }}
            >
              View External Trends
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Tech Showcase Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Leading AI Technologies
        </Typography>
        <Grid container spacing={4}>
          {aiTechs.map((tech, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={tech.image}
                  alt={tech.title}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    {tech.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {tech.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tech.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;

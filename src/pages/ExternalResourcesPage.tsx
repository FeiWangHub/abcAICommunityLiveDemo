import React from 'react';
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar,
  Paper
} from '@mui/material';
import { Bot, Code, Server, Wrench, Trophy } from 'lucide-react';
import externalData from '../data/external-charts.json';

const ExternalResourcesPage: React.FC = () => {
  const { aiModels, aiIdes, modelProviders, aiTools } = externalData;

  const ChartSection = ({ title, icon: Icon, data, color }: { title: string, icon: any, data: any[], color: string }) => (
    <Card sx={{ height: '100%', borderTop: `4px solid ${color}` }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Icon size={24} color={color} style={{ marginRight: '12px' }} />
          <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <List sx={{ pt: 0 }}>
          {data.map((item) => (
            <ListItem
              key={item.rank}
              sx={{
                px: 1,
                py: 1.5,
                '&:hover': { backgroundColor: '#f8f9fa' },
                borderRadius: 1,
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Avatar
                  sx={{
                    width: 28,
                    height: 28,
                    fontSize: '0.875rem',
                    backgroundColor: item.rank <= 3 ? color : '#e0e0e0',
                    color: item.rank <= 3 ? 'white' : 'text.primary',
                  }}
                >
                  {item.rank}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {item.name}
                    </Typography>
                    {item.rank === 1 && <Trophy size={14} color="#FFD700" />}
                  </Box>
                }
                secondary={item.description}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          External AI Industry Trends
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="800px" sx={{ mx: 'auto' }}>
          Stay updated with the latest advancements in the global AI ecosystem. These rankings are curated from industry benchmarks like LMSYS Chatbot Arena and developer consensus.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ChartSection
            title="Top 10 AI Models"
            icon={Bot}
            data={aiModels}
            color="#1976D2"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartSection
            title="Top 10 AI IDEs"
            icon={Code}
            data={aiIdes}
            color="#2E7D32"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartSection
            title="Top 10 Model Providers"
            icon={Server}
            data={modelProviders}
            color="#ED6C02"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartSection
            title="Top 10 AI Tools"
            icon={Wrench}
            data={aiTools}
            color="#9C27B0"
          />
        </Grid>
      </Grid>

      <Paper sx={{ mt: 8, p: 4, backgroundColor: '#fafafa', border: '1px dashed #ccc' }}>
        <Typography variant="h6" gutterBottom align="center">
          About These Rankings
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Ranking data is periodically updated to reflect the fast-moving AI landscape. AI models are ranked based on the LMSYS Chatbot Arena Elo ratings, while IDEs and tools are ranked based on developer adoption, agentic capabilities, and industry reviews as of February 2026.
        </Typography>
      </Paper>
    </Container>
  );
};

export default ExternalResourcesPage;

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
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Link
} from '@mui/material';
import { LayoutGrid, Database, FileText, ExternalLink, Book, User, Info } from 'lucide-react';
import internalData from '../data/internal-resources.json';

const InternalResourcesPage: React.FC = () => {
  const { aiPlatform, wikiTools } = internalData;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'beta': return 'warning';
      case 'maintenance': return 'error';
      default: return 'default';
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Internal AI Resources
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discover and access AI platforms and tools developed within our organization.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* AI Platform Card */}
        <Grid item xs={12} md={7}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LayoutGrid size={28} color="#1976D2" style={{ marginRight: '12px' }} />
                <Typography variant="h4" component="h2">
                  AI Platform
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />

              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Database size={20} style={{ marginRight: '8px' }} /> Model Garden
              </Typography>
              <List sx={{ mb: 3 }}>
                {aiPlatform.modelGarden.map((model, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemText
                      primary={model.name}
                      secondary={model.description}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      {aiPlatform.vertexAIStudio.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<ExternalLink size={16} />}
                        href={aiPlatform.vertexAIStudio.url}
                        target="_blank"
                      >
                        Studio
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Book size={16} />}
                        href={aiPlatform.vertexAIStudio.wikiUrl}
                        target="_blank"
                      >
                        Wiki
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                      {aiPlatform.documentIntelligence.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<ExternalLink size={16} />}
                        href={aiPlatform.documentIntelligence.url}
                        target="_blank"
                      >
                        Portal
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Book size={16} />}
                        href={aiPlatform.documentIntelligence.wikiUrl}
                        target="_blank"
                      >
                        Wiki
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Info Box */}
        <Grid item xs={12} md={5}>
          <Card sx={{ backgroundColor: '#e3f2fd', border: '1px solid #90caf9' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#1565C0' }}>
                <Info size={24} style={{ marginRight: '12px' }} /> Resource Guidelines
              </Typography>
              <Typography variant="body2" paragraph>
                All internal AI tools require authorization through your corporate SSO account. Please ensure you have completed the "AI Ethics and Security" training before requesting access.
              </Typography>
              <Typography variant="body2">
                Need help? Contact the AI Core Team at <Link href="mailto:ai-support@abc-corp.com">ai-support@abc-corp.com</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Wiki Tools List */}
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 3 }}>
            Internal AI Tools & Wikis
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
            <Table sx={{ minWidth: 650 }} aria-label="internal tools table">
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Tool Name</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Owner</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {wikiTools.map((tool) => (
                  <TableRow key={tool.id} hover>
                    <TableCell component="th" scope="row">
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {tool.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <User size={16} style={{ marginRight: '8px', color: '#666' }} />
                        {tool.owner}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={tool.status.toUpperCase()}
                        size="small"
                        color={getStatusColor(tool.status) as any}
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>{tool.description}</TableCell>
                    <TableCell align="right">
                      <Button
                        size="small"
                        startIcon={<ExternalLink size={14} />}
                        href={tool.url}
                        target="_blank"
                      >
                        Open
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InternalResourcesPage;

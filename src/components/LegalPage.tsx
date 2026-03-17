import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

interface LegalPageProps {
  title: string;
  paragraphs: string[];
  onBack: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, paragraphs, onBack }) => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Button onClick={onBack} sx={{ mb: 4 }}>&larr; Back to Home</Button>
      <Typography variant="h2" gutterBottom>{title}</Typography>
      {paragraphs.map((p, index) => (
        <Typography key={index} variant="body1" paragraph>
          {p}
        </Typography>
      ))}
    </Container>
  );
};

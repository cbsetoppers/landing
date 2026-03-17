import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

interface LegalPoliciesProps {
  open: boolean;
  onClose: () => void;
  policy: 'privacy' | 'terms' | 'refund';
}

export const LegalPolicies: React.FC<LegalPoliciesProps> = ({ open, onClose, policy }) => {
  const getPolicyContent = () => {
    switch (policy) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          paragraphs: [
            'At CBSE T0PPERS, we value your privacy. This policy outlines how we collect, use, and protect your information.',
            'We collect information you provide directly, such as your name and email when you contact us or subscribe to our updates.',
            'We use this information to improve our educational services, personalize your experience, and communicate important updates to you.',
            'We do not share your personal data with third parties without your explicit consent, except as required by law or to provide services you have requested.',
            'We implement industry-standard security measures to protect your data from unauthorized access, alteration, or destruction, though no method of transmission over the internet is 100% secure.'
          ]
        };
      case 'terms':
        return {
          title: 'Terms & Conditions',
          paragraphs: [
            'By accessing and using CBSE T0PPERS, you agree to comply with these terms and conditions.',
            'All content, including text, graphics, and logos, is the property of CBSE T0PPERS and is protected by copyright and intellectual property laws.',
            'You may use our resources for personal, educational purposes only. Redistribution, reproduction, or commercial use of our content is strictly prohibited without prior written permission.',
            'We strive to provide accurate information, but we do not guarantee the completeness or accuracy of all content. Use our resources at your own risk.',
            'We reserve the right to modify these terms at any time. Your continued use of the site constitutes acceptance of the updated terms.'
          ]
        };
      case 'refund':
        return {
          title: 'Cancellation & Refund Policy',
          paragraphs: [
            'Most of our educational resources are provided free of charge, and thus no refund policy applies to these services.',
            'For any paid courses or premium services, cancellations must be requested within 7 days of purchase.',
            'Refund requests will be reviewed on a case-by-case basis. Approved refunds will be processed within 10 business days to the original payment method.',
            'We reserve the right to deny refund requests if the service has been substantially consumed or if our terms of use have been violated.',
            'Please contact our support team at cbsetoppers@zohomail.in for any cancellation or refund inquiries.'
          ]
        };
    }
  };

  const { title, paragraphs } = getPolicyContent();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {paragraphs.map((p, index) => (
          <Typography key={index} variant="body1" paragraph>
            {p}
          </Typography>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

// pages/ThankYou.tsx
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ThankYou: React.FC = () => {
    const router = useRouter();

    const handleReturnHome = () => {
        router.push('/'); // Redirect to the home page
    };

    return (
        <Box sx={{ minWidth: 275, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card sx={{ padding: 4 }}>
                <CardContent>
                    <Typography variant="h4" component="div" gutterBottom>
                        Thank You!
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Your message has been successfully sent. We will get back to you as soon as possible.
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleReturnHome}>
                        Return to Home Page
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ThankYou;

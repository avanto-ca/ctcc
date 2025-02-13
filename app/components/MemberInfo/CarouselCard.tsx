'use client'
import React from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface MemberCardProps {
    firstName: string;
    lastName: string;
    logo: string;
    type: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ firstName, lastName, logo, type }) => {
    const href = `/${type}/${firstName}-${lastName}`;

    return (
        <Link href={href} passHref>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                width: { xs: 180, sm: 220, md: 220, lg: 300 }, // Adjusted width
                height: { xs: 180, sm: 220, md: 220, lg: 300 }, // Adjusted height
                cursor: 'pointer',
                border: '2px solid #b3b3b3',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                overflow: 'hidden', // Ensures logo is contained within the card
                '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                },
            }}>
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                        component="img"
                        image={logo}
                        alt={`${firstName} ${lastName}`}
                        sx={{
                            height: '100%', // Ensures the image takes the full height of the card
                            width: '100%', // Ensures the image takes the full width of the card
                            objectFit: 'contain', // Keeps the logo's aspect ratio and prevents squishing
                        }}
                    />
                    <CardContent sx={{
                        flexGrow: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'absolute', // Position names off-screen
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '0', // Hide the name area
                        overflow: 'hidden',
                    }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                            visibility: 'hidden', // Hide name text
                        }}>
                            {firstName} {lastName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default MemberCard;

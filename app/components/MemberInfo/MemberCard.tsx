'use client'
import React from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share'; // Import the share icon

interface MemberCardProps {
    firstName: string;
    lastName: string;
    logo: string;
    address: string;
    type: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ firstName, lastName, logo, address, type }) => {
    const href = `/${type}/${firstName}-${lastName}`;
    const isShareSupported = 'share' in navigator;

    const handleShare = async (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevents the click event from propagating to the Link component

        const fullUrl = `${window.location.origin}${href}`; // Full URL including the base URL
        const shareData = {
            title: `${firstName} ${lastName}`,
            url: fullUrl,
        };

        if (isShareSupported) {
            try {
                await navigator.share(shareData);
                console.log('Thanks for sharing!');
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            try {
                await navigator.clipboard.writeText(fullUrl);
                alert('URL copied to clipboard!');
            } catch (error) {
                console.error('Error copying to clipboard:', error);
            }
        }
    };

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            cursor: 'pointer',
            border: '4px solid #b3b3b3',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            position: 'relative', // Needed for absolute positioning of the share button
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            },
        }}>
            <Link href={href} passHref>
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                        component="img"
                        image={logo}
                        alt={`${firstName} ${lastName}`}
                        sx={{
                            height: { xs: 150, sm: 180, md: 200 },
                            objectFit: 'contain',
                            margin: '16px',
                        }}
                    />
                    <CardContent sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', // Vertically centers content
                        alignItems: 'center', // Horizontally centers content
                        padding: { xs: '12px', sm: '16px' },
                        textAlign: 'center', // Ensures text is centered
                    }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                        }}>
                            {firstName} {lastName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{
                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                        }}>
                            {address}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <IconButton
                sx={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    color: '#5a3d99',
                    zIndex: 1,
                }}
                onClick={handleShare}
            >
                <ShareIcon />
            </IconButton>
        </Card>
    );
};

export default MemberCard;

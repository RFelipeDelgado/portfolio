import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function BlogCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <a href="https://ibb.co/gFbgcVG" target="_blank" rel="noopener noreferrer">
                    <CardMedia
                        component="img"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        image="https://i.ibb.co/gFbgcVG/blog.jpg"
                        alt="Blog"
                    />
                </a>    
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Blog App
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A simple blog app to use. It was writen with context API for practice.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Technologies:
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}

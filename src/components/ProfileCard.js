import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ProfileCard({ profile }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/150" // replace with profile photo URL
        alt={profile.name}
      />
      <CardContent>
        <Typography variant="h5">{profile.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {profile.description}
        </Typography>
        <Link to={`/profile/${profile.id}`} state={{ profile }}>
          <Button variant="contained" color="primary" fullWidth style={{ marginTop: 10 }}>
            Summary
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;

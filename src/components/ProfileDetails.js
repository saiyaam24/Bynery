import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';
import { profiles } from './dummyProfiles'; // Import profiles
import MapComponent from './MapComponent';

function ProfileDetails() {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return <Typography variant="h6">Profile not found!</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{profile.name}</Typography>
        <Typography variant="body1">{profile.description}</Typography>
        <MapComponent location={profile.location} />
      </CardContent>
    </Card>
  );
}

export default ProfileDetails;

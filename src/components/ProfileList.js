import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import ProfileCard from './ProfileCard';
import { profiles } from './dummyProfiles'; // Import profiles

function ProfileList() {
  const [search, setSearch] = useState('');

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search Profiles"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container spacing={2}>
        {filteredProfiles.map((profile) => (
          <Grid item xs={12} sm={6} md={4} key={profile.id}>
            <ProfileCard profile={profile} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProfileList;

// src/components/AdminDashboard.js
import React from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

function AdminDashboard() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Add Profile
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminDashboard;

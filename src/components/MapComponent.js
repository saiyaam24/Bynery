import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locationCoordinates = {
  'New York, USA': [40.7128, -74.006],
  'San Francisco, USA': [37.7749, -122.4194],
  'Austin, USA': [30.2672, -97.7431],
};

function MapComponent({ location }) {
  const position = locationCoordinates[location] || [0, 0]; // Default to [0, 0] if location is not found

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;

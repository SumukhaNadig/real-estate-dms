import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent({ properties }) {
    const createCustomIcon = (imageURL) => {
        return L.icon({
            iconUrl: imageURL,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });
    };

    return (
        <MapContainer center={[12.9716, 77.5946]} zoom={8} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {properties.map(property => (
                <Marker
                    key={property._id}
                    position={[property.location.lat, property.location.lng]}
                    icon={createCustomIcon(property.imageURL || 'default-marker-icon-url.jpg')}
                >
                    <Popup>
                        {property.title} - {property.description}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapComponent;

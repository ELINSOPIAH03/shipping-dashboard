import React from 'react';
import {
    GoogleMap,
    LoadScript,
    Marker
} from '@react-google-maps/api';

const containerStyle = {
    width : '100%',
    height : '175px'
};

const  center = {
    lat: -6.200000, 
    lng: 106.816666
};

export default function MapsTracking(){
    return (
        <LoadScript googleMapsApiKey='AIzaSyCCyR_u2r7vZy7wVJTJQD0BZVs50tDJEA4'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}>
                    <Marker position={center}/>
            </GoogleMap>
        </LoadScript>
    )
}
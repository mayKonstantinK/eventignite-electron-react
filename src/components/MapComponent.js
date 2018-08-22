import React, { Component } from 'react';
import { Map, ImageOverlay } from 'react-leaflet';
import {mapImage, mapMaxBounds, mapImageBounds, mapCenter} from '../common/constants';
import '../styles/MapComponent.css';

class MapComponent extends Component {
    render() {
        return (
            <Map center={mapCenter} maxBounds={mapMaxBounds} zoom={4} minZoom={4} maxZoom={8} className="Map">
                <ImageOverlay url={mapImage} bounds={mapImageBounds}/>
            </Map>
        )
    }
}

export default MapComponent;
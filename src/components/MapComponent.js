import React, { Component } from 'react';
import { Map, ImageOverlay } from 'react-leaflet';
import {mapImage, mapMaxBounds, mapImageBounds, mapCenter} from '../common/constants';

class MapComponent extends Component {
    render() {
        return (
            <Map center={mapCenter} maxBounds={mapMaxBounds} zoom={4} minZoom={4} maxZoom={8} style={{height:"100%", width:"100%",zIndex:2, border: "1px solid red"}}>
                <ImageOverlay url={mapImage} bounds={mapImageBounds}/>
            </Map>
        )
    }
}

export default MapComponent;
import React, { Component } from 'react';
import { Map, ImageOverlay, Rectangle, Polygon } from 'react-leaflet';
import {mapImage, mapMaxBounds, mapImageBounds, mapCenter} from '../common/constants';
import '../styles/MapComponent.css';
import DataService from '../services/DataService';

class MapComponent extends Component {

    // calculateRectangleCoords = () => {
    //     var stand = {
    //         "coordX1Y1": [
    //             "4780",
    //             "1820"
    //         ],
    //         "coordX2Y1": [
    //             "4803",
    //             "1820"
    //         ],
    //         "coordX1Y2": [
    //             "4780",
    //             "1891"
    //         ],
    //         "coordX2Y2": [
    //             "4803",
    //             "1891"
    //         ]};

    //     var pixelPerDegree = 0.00602409639;

    //     var coords = [
    //         [(stand.coordX1Y1[0] - 4980 + 385) * pixelPerDegree, (stand.coordX1Y1[1] - 4980) * pixelPerDegree],
    //         [(stand.coordX2Y1[0] - 4980 + 385) * pixelPerDegree, (stand.coordX2Y1[1] - 4980) * pixelPerDegree],
    //         [(stand.coordX2Y1[0] - 4980 + 385) * pixelPerDegree, (stand.coordX2Y1[1] - 4980) * pixelPerDegree],
    //         [(stand.coordX2Y2[0] - 4980 + 385) * pixelPerDegree, (stand.coordX2Y2[1] - 4980) * pixelPerDegree]
    //     ];

    //     return coords;
  
        //   var polygon_coordinates = exhibitor.stand.polygon_coordinates;
  
        //   if (polygon_coordinates && polygon_coordinates.length) {
        //       var coords_object = polygon_coordinates.reduce(function(reducer, item, index) {
        //           var c = [ Number(item.y*Globals.y_down), Number(item.x*Globals.x_right) ];
                  
        //           if (reducer.min_x === 0) reducer.min_x = c[0];
        //           if (reducer.min_y === 0) reducer.min_y = c[1];
                    
        //           if (c[0] < reducer.min_x) {
        //             reducer.min_x = c[0];
        //           }
                  
        //           if (c[1] < reducer.min_y) {
        //             reducer.min_y = c[1];
        //           }
                  
        //           if (c[0] > reducer.max_x) {
        //             reducer.max_x = c[0];
        //           }
                  
        //           if (c[1] > reducer.max_y) {
        //             reducer.max_y = c[1];
        //           }
                
        //           reducer.coords.push(c);
        //           return reducer;
        //         },{
        //           min_x:0,
        //           max_x:0,
        //           min_y:0,
        //           max_y:0,
        //           coords:[]
        //         });
        //         polygon_coordinates = coords_object.coords;
                
        //       center = coords_object.coords[0];
        //     }
    // }

    renderExhibitors = () => {
        const stands = DataService.getAllStands();
        console.log(stands)
        return (
            <Rectangle bounds={this.calculateRectangleCoords()} color={"#ff7800"} />
        )
    }

    render() {
        return (
            <Map center={mapCenter} maxBounds={mapMaxBounds} zoom={4} minZoom={4} maxZoom={8} className="Map">
                <ImageOverlay url={mapImage} bounds={mapImageBounds}/>
                {this.renderExhibitors()}
            </Map>
        )
    }
}

export default MapComponent;
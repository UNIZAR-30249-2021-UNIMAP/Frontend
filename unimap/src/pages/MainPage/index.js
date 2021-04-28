import React from "react";
import { useState } from 'react';

import {MapContainer} from 'react-leaflet';
import {TileLayer} from 'react-leaflet'; 
import {WMSTileLayer, LayersControl} from 'react-leaflet'; 
import { useMapEvents } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'
import { MarkerIcon } from './react-leaflet-icon.js'

function AddMarkerToClick() {

  const [markers, setMarkers] = useState({ lat: -34.397, lng: 150.644 });
  const [layer, setLayer] = useState("");

  const map = useMapEvents({
    click(e) {
      const newMarker = e.latlng;
      setMarkers(newMarker);
      console.log("El markador es: " +newMarker);
      console.log("La capa final es" +layer); 
    },
  })

  map.on('baselayerchange', function (e) {
    const currentLayerID = e.layer.getAttribution();    
    setLayer(currentLayerID);         
 });

  return (
    <>
        <Marker position={markers} icon={MarkerIcon}>          
        </Marker>
    </>
  )
}

const { BaseLayer, Overlay } = LayersControl;

const MainPage_hu6 = (state) => {  
    
    return(
        <MapContainer className="map" center={[41.68366, -0.88735]}  zoom={50}
        zoomControl={false}>
          <AddMarkerToClick></AddMarkerToClick> 
        <LayersControl position="topright">
        <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <BaseLayer name="Planta calle">      
                                 
                <WMSTileLayer                  
                  url="http://35.205.239.212:8080/geoserver/wms?service=WMS"  
                  layers={'proyecto:adap00,proyecto:torresp00,proyecto:betanp00'}        
                  transparent={true}
                  format={"image/png"}
                  projection={"EPSG:25830"}
                  //singleTile={true}
                  opacity={1}
                  //maxZoom={21}
                  version={'1.1.0'}
                  attribution={"Planta calle"}
                />
              </BaseLayer>
          <BaseLayer name="  Planta 1  ">
            <WMSTileLayer                  
              url="http://35.205.239.212:8080/geoserver/wms?service=WMS"  
              layers={'proyecto:adap01,proyecto:torresp01,proyecto:betanp01'}        
              transparent={true}
              format={"image/png"}
              projection={"EPSG:25830"}
              //singleTile={true}
              opacity={1}
              //maxZoom={21}
              version={'1.1.0'}
              attribution={"Planta 1"}
            />
          </BaseLayer>
          <BaseLayer name="  Planta 2  ">
            <WMSTileLayer                  
              url="http://35.205.239.212:8080/geoserver/wms?service=WMS"  
              layers={'proyecto:adap02,proyecto:torresp02,proyecto:betanp02'}        
              transparent={true}
              format={"image/png"}
              projection={"EPSG:25830"}
              //singleTile={true}
              opacity={1}
              //maxZoom={21}
              version={'1.1.0'}
              attribution={"Planta 2"}
            />
          </BaseLayer>
          <BaseLayer name="  Planta 3  ">
            <WMSTileLayer                  
              url="http://35.205.239.212:8080/geoserver/wms?service=WMS"  
              layers={'proyecto:adap03,proyecto:torresp03,proyecto:betanp03'}        
              transparent={true}
              format={"image/png"}
              projection={"EPSG:25830"}
              //singleTile={true}
              opacity={1}
              //maxZoom={21}
              version={'1.1.0'}
              attribution={"Planta 3"}
            />
            </BaseLayer>          
          <BaseLayer name="  Planta 4  ">
            <WMSTileLayer                  
              url="http://35.205.239.212:8080/geoserver/wms?service=WMS"  
              layers={'proyecto:adap04'}        
              transparent={true}
              format={"image/png"}
              projection={"EPSG:25830"}
              //singleTile={true}
              opacity={1}
              //maxZoom={21}
              version={'1.1.0'}
              attribution={"Planta 4"}
            />
          </BaseLayer>
          <BaseLayer name=" Sótano 1 ">
            <WMSTileLayer                  
              url="http://35.205.239.212:8080/geoserver/wms?service=WMS"  
              layers={'proyecto:adas01,proyecto:torress01,proyecto:betans01'}        
              transparent={true}
              format={"image/png"}
              projection={"EPSG:25830"}
              //singleTile={true}
              opacity={1}
              //maxZoom={21}
              version={'1.1.0'}
              attribution={"Sótano 1"}
            />
          </BaseLayer>
        </LayersControl>
      </MapContainer>
    );
}

export default MainPage_hu6;
import React from "react";
import { useState } from 'react';

import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { WMSTileLayer, LayersControl } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'
import { MarkerIcon } from './react-leaflet-icon.js'
import L from 'leaflet'
import proj4 from "proj4"

const geoserverUrl = "http://35.195.165.185:8080/geoserver/wms?service=WMS"
const epsg = "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
const from = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs"
const PLANTA_CALLE = 'proyecto:adap00,proyecto:torresp00,proyecto:betanp00'
const PLANTA1 = 'proyecto:adap01,proyecto:torresp01,proyecto:betanp01'
const PLANTA2 = 'proyecto:adap02,proyecto:torresp02,proyecto:betanp02'
const PLANTA3 = 'proyecto:adap03,proyecto:torresp03,proyecto:betanp03'
const PLANTA4 = 'proyecto:adap04'
const SOTANO1 = 'proyecto:adas01,proyecto:torress01,proyecto:betans01'
function AddMarkerToClick() {

  const [markers, setMarkers] = useState({ lat: -34.397, lng: 150.644 });
  const [layer, setLayer] = useState("");

  const map = useMapEvents({
    click(e) {
      var planta;
      const newMarker = e.latlng;
      //setMarkers(newMarker);
      console.log("El markador es: " + newMarker);
      var res = proj4(epsg, [e.latlng.lng, e.latlng.lat]);
      console.log("Coordenadas: " + res)
      //var longitud = e.latlng.lng * 675734.506429 / -0.88853
      //var latitud = e.latlng.lat * 4616708.96398/ 41.68314
      switch (layer) {
        case "Planta calle":
          planta = PLANTA_CALLE
          break;
        case "Planta 1":
          planta = PLANTA1
          break;
        case "Planta 2":
          planta = PLANTA2
          break;
        case "Planta 3":
          planta = PLANTA3
          break;
        case "Planta 4":
          planta = PLANTA4
          break;
        case "Sótano 1":
          planta = SOTANO1
          break;
        default:
          planta = PLANTA_CALLE
          break;
      }

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


  return (
    <MapContainer className="map" id="map" center={[41.68366, -0.88735]} zoom={50}
      zoomControl={false}>
      <AddMarkerToClick></AddMarkerToClick>
      <LayersControl position="topright">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <BaseLayer name="Planta calle">

          <WMSTileLayer
            url={geoserverUrl}
            layers={PLANTA_CALLE}
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
            url={geoserverUrl}
            layers={PLANTA1}
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
            url={geoserverUrl}
            layers={PLANTA2}
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
            url={geoserverUrl}
            layers={PLANTA3}
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
            url={geoserverUrl}
            layers={PLANTA4}
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
            url={geoserverUrl}
            layers={SOTANO1}
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
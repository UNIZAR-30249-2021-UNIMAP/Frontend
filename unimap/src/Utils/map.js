import React, { useState } from "react";
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'
import { MarkerIcon } from './react-leaflet-icon.js'
import { WMSTileLayer, LayersControl } from 'react-leaflet';
import proj4 from "proj4"
import { ObtenerNombreSala } from "./Endpoints.js";
import TextArea from "antd/lib/input/TextArea";

const geoserverUrl = "http://localhost:8080/geoserver/wms?service=WMS"
const epsg = "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
const PLANTA_CALLE = 'proyecto:adap00,proyecto:torresp00,proyecto:betanp00'
const PLANTA1 = 'proyecto:adap01,proyecto:torresp01,proyecto:betanp01'
const PLANTA2 = 'proyecto:adap02,proyecto:torresp02,proyecto:betanp02'
const PLANTA3 = 'proyecto:adap03,proyecto:torresp03,proyecto:betanp03'
const PLANTA4 = 'proyecto:adap04'
const SOTANO1 = 'proyecto:adas01,proyecto:torress01,proyecto:betans01'
const { BaseLayer } = LayersControl;

const Map = (size) => {
    const [idEspacio, setIdEspacio] = useState("Seleccione un espacio")

    function AddMarkerToClick() {

        const [markers, setMarkers] = useState({ lat: -34.397, lng: 150.644 });
        const [layer, setLayer] = useState("");

        const map = useMapEvents({
            click(e) {
                var planta;
                const newMarker = e.latlng;
                var lat = e.latlng.lat;
                var lng = e.latlng.lng;
                console.log("El marker está: " + newMarker)
                newMarker.lat = newMarker.lat + 0.00015
                newMarker.lng = newMarker.lng - 0.000065
                setMarkers(newMarker);
                var res = proj4(epsg, [lng, lat]);
                console.log("Coordenadas: " + res)
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
                ObtenerNombreSala(planta, res);
            },
        })

        map.on('baselayerchange', function (e) {
            const currentLayerID = e.layer.getAttribution();
            setLayer(currentLayerID);
        });


        return (
            <>
                <Marker position={markers} icon={MarkerIcon}>
                    <Popup> <textarea readonly="yes">{idEspacio}</textarea></Popup>
                </Marker>
            </>
        )
    }
    return (
        <MapContainer className={size === "map" ? "map" : "mapSmall"} id="map" center={[41.68366, -0.88735]} zoom={50}
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

export default Map;
import L from 'leaflet';
import leafGreen from './../../Assets/leaf-green.png';
import leafRed from './../../Assets/leaf-red.png';
import leafOrange from './../../Assets/leaf-orange.png';
import leafShadow from './../../Assets/leaf-shadow.png';

export const State = {
    greenIcon: {
        lat: 41.68359,
        lng: -0.88977,
    },
    redIcon: {
        lat: 41.68359,
        lng: -0.88977,
    },
    orangeIcon: {
        lat: 41.68364,
        lng: -0.88977,
    },
    zoom: 25
}

export const GreenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76]
});

export const RedIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -86]
});

export const OrangeIcon = L.icon({
    iconUrl: leafOrange,
    shadowUrl: leafShadow,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -86]
});

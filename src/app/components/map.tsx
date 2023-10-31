import React from "react";
import GoogleMapReact from "google-map-react";


export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 6.4551529,
      lng: 3.6296082
    },
    zoom: 16.3
  };

  return (
    <div style={{ height: '80vh', width: '30vw' }}>
      <GoogleMapReact
        defaultZoom={defaultProps.zoom}
        defaultCenter={defaultProps.center}
        options={{
          disableDefaultUI: true, styles: [
            {
              "featureType": "road.arterial",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            }
          ]
        }}
        bootstrapURLKeys={{ key: "AIzaSyAllDaFuSrPgKVhHkQJ8CujrGP-VlZXDpY" }}
      />
    </div>
  );
}
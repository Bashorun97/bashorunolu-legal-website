import React from "react";
import GoogleMapReact from "google-map-react";


export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 6.4534672,
      lng: 3.6134696
    },
    zoom: 15.63
  };

  return (
    <div style={{ height: '80vh', width: '30vw' }}>
      <GoogleMapReact
        defaultZoom={defaultProps.zoom}
        defaultCenter={defaultProps.center}
        options={{ disableDefaultUI: true }}
        bootstrapURLKeys={{ key: "AIzaSyAllDaFuSrPgKVhHkQJ8CujrGP-VlZXDpY" }}
      />
    </div>
  );
}
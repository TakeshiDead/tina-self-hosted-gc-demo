import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const MapContainer = () => {

  const mapStyles = {        
    height: "100%",
    width: "100%"};
  
  const defaultCenter = {
    lat: 42.87845358956217, lng: -85.66477011289254
  }
  
  return (
     <LoadScript
       googleMapsApiKey="AIzaSyAmOnttIV0rd8Ulyv-3KBHuojJIqdD56y8">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        >
          <Marker position={{lat: 42.87845358956217, lng: -85.66477011289254}} />
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;
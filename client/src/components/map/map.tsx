import { Box } from "@mui/material";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import Icon from "../../assets/store.png";
import IconLocation from "../../assets/location.png";
import "leaflet/dist/leaflet.css";
import { StoresDataType } from "../../types/map";

interface Params {
  latitude: number;
  longitude: number;
  storesData: StoresDataType[];
  handleRedirectToCompany: (id: number) => void;
}

function GetIconLocation(_iconSize: number) {
  return L.icon({
    iconUrl: IconLocation,
    iconSize: [_iconSize, _iconSize],
  });
}

function GetIcon(_iconSize: number) {
  return L.icon({
    iconUrl: Icon,
    iconSize: [_iconSize, _iconSize],
  });
}

const MapComp = (params: Params) => {
  const { latitude, longitude, storesData, handleRedirectToCompany } = params;
  return (
    <Box>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* ========= I AM HERE =========*/}
        <Marker
          position={[latitude, longitude]}
          icon={GetIconLocation(50)}
        ></Marker>

        {/* ========= OTHER STORES=========*/}
        {storesData.map((v, i) => (
          <Marker
            key={i}
            position={v.direction}
            eventHandlers={{
              click: () => {
                handleRedirectToCompany(i);
              },
            }}
            icon={GetIcon(28)}
          />
        ))}
      </MapContainer>
    </Box>
  );
};

export default MapComp;

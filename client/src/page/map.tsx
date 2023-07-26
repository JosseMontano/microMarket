import { Box } from "@mui/material";
import useGetDirection from "../hooks/getDirection";
import { useNavigate } from "react-router-dom";
import { navigatesData } from "../App";
import IconBottom from "../components/map/iconBottom";
import { StoresDataType } from "../types/map";
import MapComp from "../components/map/map";

import Load from "../components/global/load";
import Navbar from "../components/global/navbar/navbar";

const Map = () => {
  const { latitude, longitude } = useGetDirection();

  const storesData: StoresDataType[] = [
    {
      direction: [-17.373644353946446, -66.16072801961718],
    },
    {
      direction: [-17.376693365740852, -66.16086655268319],
    },
    { direction: [-17.375371653958762, -66.15774749053953] },
    {
      direction: [-17.37686576222472, -66.16397357192885],
    },
  ];

  // ====== NAVIGATION ======
  const navigate = useNavigate();

  const handleRedirectToCompany = (id: number) => {
    navigate(navigatesData[1] + `/${id}`);
  };

  return (
    <>
      <Navbar />
      <Box
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {/* ============ SHOW MAP ============ */}

        {latitude && longitude != null ? (
          <MapComp
            latitude={latitude}
            handleRedirectToCompany={handleRedirectToCompany}
            longitude={longitude}
            storesData={storesData}
          />
        ) : (
          <Load />
        )}

        {/* ============ ICON OPTIONS ============ */}
        <IconBottom />
      </Box>
    </>
  );
};

export default Map;

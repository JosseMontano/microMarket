import { Box, useMediaQuery } from "@mui/material";
import BackgroundMonitor from "../assets/backgroundMonitor.jpg";
import BackgroundPhone from "../assets/backgroundPhone.jpg";
import { colors } from "../styles/colors";
import Header from "../components/home/header/header";
import Benefits from "../components/home/benefits/benefits";

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width:650px)");

  return (
    <Box sx={{background:colors.sixth}}>
      <Header
        BackgroundMonitor={BackgroundMonitor}
        BackgroundPhone={BackgroundPhone}
        isSmallScreen={isSmallScreen}
      />
      <Benefits />
    </Box>
  );
};

export default Home;

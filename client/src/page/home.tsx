import { Box, Typography, useMediaQuery } from "@mui/material";
import BackgroundMonitor from "../assets/backgroundMonitor.jpg";
import BackgroundPhone from "../assets/backgroundPhone.jpg";
import { colors } from "../styles/colors";

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width:650px)");

  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: "0",
        }}
      >
        <img
          src={isSmallScreen ? BackgroundPhone : BackgroundMonitor}
          style={{
            width: "100%",
            height: "100vh",
            filter: "brightness(0.7)",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          display: "grid",
          placeContent: "center",
        }}
      >
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.53)",
            padding: 3,
            width: "800px",
            justifySelf: "center",
            "@media screen and (max-width:850px)": {
              width: "600px",
            },
            "@media screen and (max-width:650px)": {
              width: "90%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 52,
              color: colors.sixth,
              textAlign: "center",
              "@media screen and (max-width:650px)": {
                fontSize: 32,
              },
            }}
          >
            {isSmallScreen
              ? "Encuentra tus productos"
              : "Encuentra productos de forma rapida y simple"}
          </Typography>

          <Typography
            sx={{
              fontSize: 22,
              color: colors.sixth,
              textAlign: "center",
              "@media screen and (max-width:650px)": {
                fontSize: 15,
              },
            }}
          >
            {isSmallScreen
              ? "de forma rapida"
              : "       Recuerda tener activa tu ubicacion"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

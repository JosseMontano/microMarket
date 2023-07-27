import { Box, Typography } from "@mui/material";
import { colors } from "../../../styles/colors";

interface Params {
  isSmallScreen: boolean;
  BackgroundPhone: string;
  BackgroundMonitor: string;
}

const Header = (params: Params) => {
  const { BackgroundMonitor, BackgroundPhone, isSmallScreen } = params;

  const showImg = isSmallScreen ? BackgroundPhone : BackgroundMonitor;

  const showTitle = isSmallScreen
    ? "Encuentra tus productos"
    : "Encuentra productos de forma rapida y simple";

  const showSubtitle = isSmallScreen
    ? "de forma rapida"
    : "       Recuerda tener activada tu ubicacion";

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: "0",
        }}
      >
        <img
          src={showImg}
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
            {showTitle}
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
            {showSubtitle}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;

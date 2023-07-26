import CircularProgress from "@mui/material/CircularProgress";
import { colors } from "../../styles/colors";
import { Box } from "@mui/material";
const Load = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={62} sx={{ color: colors.second }} />
    </Box>
  );
};

export default Load;

import { Box } from "@mui/material";
import { colors } from "../../styles/colors";
import StoreIcon from "@mui/icons-material/Store";

const IconBottom = () => {
  return (
    <Box position={"absolute"} bottom={10} right={15}>
      <Box
        bgcolor={colors.first}
        width={70}
        height={70}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={15}
        sx={{ cursor: "pointer" }}
      >
        <StoreIcon sx={{ width: 50, height: 50, color: colors.sixth }} />
      </Box>
    </Box>
  );
};

export default IconBottom;

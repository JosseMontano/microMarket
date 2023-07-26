import { Box, Typography } from "@mui/material";
import { colors } from "../../../styles/colors";

const Navbar = () => {
  return (
    <Box
      bgcolor={colors.first}
      padding={1}
      textAlign={"center"}
      sx={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: 50,
      }}
    >
      <Typography
        color={colors.sixth}
        fontWeight={"bold"}
        fontSize={20}
        sx={{ cursor: "pointer" }}
      >
        MERCAWEB
      </Typography>
    </Box>
  );
};

export default Navbar;

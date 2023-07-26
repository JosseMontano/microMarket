import { Box } from "@mui/material";
import { colors } from "../../styles/colors";
import { navigatesData } from "../../App";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

interface Params {
  handleRedirect: (url: string) => void;
}

const Arrow = (params: Params) => {
  const { handleRedirect } = params;
  return (
    <Box>
      <ArrowCircleLeftIcon
        sx={{ color: colors.second, fontSize: 32, cursor: "pointer" }}
        onClick={() => handleRedirect(navigatesData[0])}
      />
    </Box>
  );
};

export default Arrow;

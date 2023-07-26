import { Box } from "@mui/material";
import CardProduct from "../global/cardProduct";
import CardSkeleton from "../global/cardSkeleton";

interface Params {
  isMediumScreen: boolean;
  data: number[];
  loading: boolean;
}

const Cards = ({ isMediumScreen, data, loading }: Params) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: !isMediumScreen ? "space-around" : "space-between",
      }}
    >
      {!loading && data.map((_, i) => <CardProduct key={i} />)}

      {loading && data.map((_, i) => <CardSkeleton key={i} />)}
    </Box>
  );
};

export default Cards;

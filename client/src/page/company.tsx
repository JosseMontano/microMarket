import { Box, Grid, SelectChangeEvent, Typography } from "@mui/material";
import CardProduct from "../components/global/cardProduct";
import Categories from "../components/company/categories";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import CategoriesSelect from "../components/company/categoriesSelect";
import { colors } from "../styles/colors";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Company = () => {
  // const isSmallScreen = useMediaQuery('(max-width:349px)');
  const isMediumScreen = useMediaQuery(
    "(min-width:350px) and (max-width:800px)"
  );

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box bgcolor={colors.first} padding={1} textAlign={"center"}>
        <Typography
          color={colors.sixth}
          fontWeight={"bold"}
          fontSize={20}
          sx={{ cursor: "pointer" }}
        >
          MERCAWEB
        </Typography>
      </Box>
      <Box padding={2}>
        <Box>
          <ArrowCircleLeftIcon
            sx={{ color: colors.second, fontSize: 32, cursor: "pointer" }}
          />
        </Box>

        <Grid container>
          {!isMediumScreen && (
            <Grid sm={2}>
              <Categories />
            </Grid>
          )}

          {isMediumScreen && (
            <Grid sm={12} minWidth={"100%"}>
              <CategoriesSelect age={age} handleChange={handleChange} />
            </Grid>
          )}

          <Grid xs={12} sm={!isMediumScreen ? 10 : 12}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
                <CardProduct key={i} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Company;

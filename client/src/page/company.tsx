import { Box, Grid, SelectChangeEvent } from "@mui/material";
import Categories from "../components/company/categories";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import CategoriesSelect from "../components/company/categoriesSelect";
import UseRedirect from "../hooks/useRedirect";
import Arrow from "../components/company/arrow";
import Cards from "../components/company/cards";
import Navbar from "../components/global/navbar/navbar";
import { margin } from "../styles/margin";

const Company = () => {
  // =============== DATA ===============
  const company = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // const isSmallScreen = useMediaQuery('(max-width:349px)');
  const isMediumScreen = useMediaQuery(
    "(min-width:350px) and (max-width:800px)"
  );

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  // =============== REDIRECT TO MAP ===============
  const { handleRedirect } = UseRedirect();

  return (
    <>
      <Navbar />

      <Box padding={2} marginTop={margin.navbar}>
        <Arrow handleRedirect={handleRedirect} />

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
            <Cards
              isMediumScreen={isMediumScreen}
              data={company}
              loading={loading}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Company;

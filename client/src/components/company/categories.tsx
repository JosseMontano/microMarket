import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";
import { colors } from "../../styles/colors";

const Categories = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{
            color: colors.third + "!important",
            fontWeight: "bold",
          }}
        >
          Categorias
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: colors.third,
                  },
                }}
              />
            }
            label="Chocolate"
          />
          <FormControlLabel
            value="male"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: colors.third,
                  },
                }}
              />
            }
            label="Bebidas"
          />
          <FormControlLabel
            value="other1"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: colors.third,
                  },
                }}
              />
            }
            label="Baños"
          />
          <FormControlLabel
            value="other2"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: colors.third,
                  },
                }}
              />
            }
            label="Otros"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Categories;

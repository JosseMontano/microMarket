import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { colors } from "../../styles/colors";

interface Params {
  age: string;
  handleChange: (event: SelectChangeEvent) => void;
}

const CategoriesSelect = (params: Params) => {
  const { age, handleChange } = params;
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
        <InputLabel
          id="demo-select-small-label"
          sx={{
            color: colors.sixth,
            "&.Mui-focused": {
              color: colors.third,
            },
          }}
        >
          Categoria
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label="Categoria"
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: colors.first,
            color: colors.sixth,
            borderRadius: 3,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.third,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.third,
            },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategoriesSelect;

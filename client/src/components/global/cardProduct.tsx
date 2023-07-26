import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardProduct = () => {
  return (
    <Card sx={{ maxWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            minWidth: 150,
            maxHeight: 120,
            objectFit: "cover",
          }}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/640px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ padding: 0.5 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontSize: 18, textAlign: "center" }}
          >
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;

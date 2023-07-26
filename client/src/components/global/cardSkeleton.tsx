import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 150 }}>
      <CardActionArea>
        <Skeleton variant="rectangular" width={210} height={118} />
        <CardContent
          sx={{ padding: 0.5, display: "flex", justifyContent: "center" }}
        >
          <Skeleton width="60%" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardSkeleton;

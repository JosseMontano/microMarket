import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { colors } from "../../../styles/colors";

const Benefits = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bgcolor={colors.fifth}
    >
      <Box sx={{ width: "350px" }}>
        <Typography
          sx={{
            fontSize: 36,
            textAlign: "center",
            color: colors.fourth,
            fontWeight: "bold",
          }}
        >
          Beneficios para tu negocio
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: 2,
          gap: 3,
        }}
      >
        {[1, 2, 3].map(() => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              background: colors.second,
            }}
          >
            <CardContent sx={{ maxWidth: "300px" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{ color: colors.sixth, fontWeight: "bold" }}
              >
                Inventario
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ color: "rgba(255,255,255,.8)" }}
              >
                Ten una gestion de tus ventas guardadas en internet
              </Typography>
            </CardContent>
            <CardContent sx={{ alignSelf: "center" }}>
              <AutoStoriesIcon sx={{ fontSize: 62, color: colors.sixth }} />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Benefits;

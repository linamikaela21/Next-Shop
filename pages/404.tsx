import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../components/layout";

const NotFound = () => {
  return (
    <ShopLayout
      title="Page not Found"
      pageDescription="Nothing to show"
      imageURL=""
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={100} fontWeight={200}>
          404 |
        </Typography>
        <Typography variant="h4" marginLeft={2}>
          Page not found
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default NotFound;

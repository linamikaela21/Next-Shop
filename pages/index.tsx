import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layout";
import { ProductsList } from "../components/products";
import { initialData } from "../database/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Next-Shop"}
      pageDescription={"The better products"}
    >
      <Typography variant="h1" component="h1">Home</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>All products</Typography>
      <ProductsList products={initialData.products as any} />
    </ShopLayout>
  );
};

export default Home;

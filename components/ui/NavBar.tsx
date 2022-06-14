import NextLink from "next/link";
import {
  AppBar,
  Box,
  Link,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Container,
} from "@mui/material";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";

interface Items {
  text?: string;
  link: string;
}

export const NavBar = () => {
  const menuNevBarItems: Items[] = [
    { text: "Men", link: "/category/men" },
    { text: "Woman", link: "/category/woman" },
    { text: "Kids", link: "/category/kids" },
  ];
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link underline="none">
            <Container
              sx={{
                display: "flex",
              }}
            >
              <IconButton size="large" color="success">
                <ShoppingCartCheckoutOutlined fontSize="large" />
              </IconButton>
              <Typography color='black' sx={{ margin: "10px 20px 0 0" }} variant="h4">
                Next-Shop
              </Typography>
            </Container>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {menuNevBarItems.map((item) => (
            <NextLink key={item.text} href={item.link} passHref>
              <Link>
                <Button size="large">{item.text}</Button>
              </Link>
            </NextLink>
          ))}
        </Box>
        <Box flex={1} />
        <IconButton size="large">
          <SearchOutlined fontSize="large" />
        </IconButton>

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton size="large">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined fontSize="large" />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button size="large">Menú</Button>
      </Toolbar>
    </AppBar>
  );
};

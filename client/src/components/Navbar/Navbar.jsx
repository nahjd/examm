import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "./Navbar.scss";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            style={{ fontSize: "35px", marginLeft: "350px" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Selling.
          </Typography>
          <div className="nav">
            <Link style={{ color: "black" }} to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link style={{ color: "black" }} to="/products">
              <Button color="inherit">Products</Button>
            </Link>
            <Link style={{ color: "black" }} to="/about">
              <Button color="inherit">About Us</Button>
            </Link>
            <Link style={{ color: "black" }} to="/special">
              <Button color="inherit">Special</Button>
            </Link>
            <Link style={{ color: "black" }} to="/testimonials">
              <Button color="inherit">Testimonials</Button>
            </Link>
            <Link style={{ color: "black" }} to="/blog">
              <Button color="inherit">Blog</Button>
            </Link>
            <Link style={{ color: "black" }} to="/footer">
              <Button color="inherit">Footer</Button>
            </Link>
            <Link style={{ color: "black" }} to="/basket">
              <Button color="inherit">
                <FaShoppingBasket style={{ fontSize: "25px" }} />
              </Button>
            </Link>
            <Link style={{ color: "black" }} to="/addcard">
              <Button color="inherit">Addcard</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

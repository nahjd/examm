import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Navbar from "./../Navbar/Navbar";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./Products.scss";
import {Link} from "react-router-dom"
import {
  fetchData,
  addBasket,
  increaseBasket,
  decreaseBasket,
  deleteBasket,
} from "./../../redux/slice/personSlice";


const Products = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get("http://localhost:6060/person").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <>
      <Navbar /> <br />
      <div className="products">
        <h5>POPULAR PRODUCTS</h5>
        <h1>Our Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae{" "}
          <br />
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut{" "}
          <br />
          consequatur laboriosam ipsam.
        </p>
      </div>{" "}
      <br />
      <br />
      <div className="container2">
        {data &&
          data.map((elem, i) => (
            <Card
              container
              spacing={4}
            style={{width:"400px"}}

              key={i}
              sx={{
                border: "none",

                height: 555,
                margin: "0 auto",
              }}
            >
              <Grid xs={12}>
                <CardMedia
                  sx={{ height: 340, display: "flex", flexWrap: "wrap" }}
                  image={elem.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elem.name}
                  </Typography>
                  <div className="icons">
                    <div className="icon">
                      <FaStar style={{ color: "orange" }} /> <p>0.5</p>
                    </div>
                    <div className="icon2">
                      <FaHeart style={{ color: "red" }} /> <p>29</p>
                    </div>
                  </div>{" "}
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    {elem.about}
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="btns">
                    <Button 
                      onClick={() => {
                                dispatch(addBasket(elem));
                              }}
                      style={{ backgroundColor: "black", color: "white" }}
                      size="small"
                    >
                      CART
                    </Button>

                   <Link to={`/${elem._id}`}><Button 
                      style={{ color: "black", border: "2px solid black" }}
                      size="small"
                    >
                      VIEW
                    </Button></Link> 
                  </div>
                </CardActions>
              </Grid>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Products;

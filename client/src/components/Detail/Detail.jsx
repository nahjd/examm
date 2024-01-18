import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Navbar from "./../Navbar/Navbar";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import {
    fetchData,
    addBasket,
    increaseBasket,
    decreaseBasket,
    deleteBasket,
  } from "./../../redux/slice/personSlice";
import "./Detail.scss"
const Detail = () => {
const {id} = useParams()
console.log(id);
        const [data, setData] = useState("");
      
        useEffect(() => {
          axios.get("http://localhost:6060/person").then((res) => {
            console.log(res.data);
            setData(res.data);
          });
        }, []);
        console.log(data);
let product = data && data.find((x)=> x._id == id)
console.log(product);

  return (
    <>
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
       
            <Card
            style={{width:"400px"}}
              container
              spacing={1}
              key={product && product._id}
              sx={{
                border: "none",
            
                height: 555,
                margin: "0 auto",
              }}
            >
              <Grid xs={1}>
                <CardMedia
                  sx={{ height: 340, display: "flex", flexWrap: "wrap" }}
                  image={product.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product && product.name}
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
                    {product && product.about}
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="btns">
                 <Link to="/basket">
                 <Button   onClick={() => {
                                dispatch(addBasket(item));
                              }}
                      style={{ backgroundColor: "black", color: "white" }}
                      size="small"
                    >
                      CART
                    </Button>
                 </Link>  

                   <Button 
                      style={{ color: "black", border: "2px solid black" }}
                      size="small"
                    >
                      VIEW
                    </Button>
                  </div>
                </CardActions>
              </Grid>
            </Card>
          ))
      </div>
    </>
  )
}

export default Detail
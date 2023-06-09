import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useState, useEffect} from "react"
const ItemPage=()=>{
  const [cardData, setCardData]=useState([])

    return (
        <>
        <Grid container>
        <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
             
            }}
          >
        <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              justifyContent: "center",
             
            }}
          >
            <Card  style={{width:"40vw", height:"50vh"}}>
  <img
         style={{width:"50vw", height:"50vh"}}
          // replace this with the image that will be added to the cloud
          src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-06/230607-lionel-messi-jm-1554-24c14d.jpg"
          title="item image"
        /></Card>
      <Card  style={{width:"60vw", maxHeight:"100vh"}}>
      <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Calbiri",
                      fontWeight: "bold",
                    }}
                    variant="h1"
                   
                  >
                   SOME RANDOM TEXT
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Calbiri",
                      fontWeight: "bold",
                    }}
                    variant="h3"
                   
                  >
                   Price
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Calbiri",
                      fontWeight: "bold",
                    }}
                    variant="h4"
                   
                  >
                  Description
                  </Typography>
 
 
 </Card>
 
            
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              justifyContent: "center",
             
            }}
          >
          <Button  variant="contained" sx={{backgroundColor:"#3498ca", color:"#FFFFFF", fontWeight:"bold", width:"13vw", borderRadius:"25px"}}>Add to Cart <ShoppingBasketIcon sx={{marginLeft:"0.5vw"}}/></Button>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              justifyContent: "center",
             
            }}
          >
          <Button  variant="contained" sx={{backgroundColor:"#0053A0", color:"#FFFFFF", fontWeight:"bold", width:"13vw", borderRadius:"25px",   marginTop:"-2vh"
}}>Buy it now</Button>
          </CardContent>

          </CardContent>


        </Grid>
        
        
        </>
    )

}

export default ItemPage
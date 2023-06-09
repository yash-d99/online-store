import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useState, useEffect} from "react"
import axios from "axios";
import { CircularProgress } from '@mui/material';
import { dataSlices } from "../Store/dataSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ItemPage=()=>{
console.log("dsfasdf")
    const {id, email}=useParams()

     const newemail=decodeURIComponent(email).trim()
    console.log(newemail)

  const [cardData, setCardData]=useState(undefined)


  useEffect(()=>{




    const getItem=async()=>{

        try{
           const res= await axios.get(`http://localhost:3000/products/getItem?email=${newemail}&id=${id}`)
           setCardData(res.data)
        }catch(error){
            console.log(error)
        }

    }
    getItem()





  },[])
    return (
        <>

        {cardData===undefined?<CircularProgress/>: <Grid container justifyContent="center" alignItems="center"> 
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
          <Card style={{ width: "40vw", maxHeight: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <img
      style={{ maxWidth: "100%", maxHeight: "100%" }}
      src={cardData.imageLink}
      alt="item image"
    />
  </Card>
      <Card  style={{width:"60vw", maxHeight:"100vh"}}>
      <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Calbiri",
                      fontWeight: "bold",
                    }}
                    variant="h1"
                   
                  >
                   {cardData.name}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Calbiri",
                      fontWeight: "bold",
                    }}
                    variant="h3"
                   
                  >
                   Price: <strong>${cardData.price}</strong>
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Calbiri",
                      fontWeight: "bold",
                    }}
                    variant="h4"
                   
                  >
                 Description: {cardData.description}
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
        
        
        }
        </>
       
    )

}

export default ItemPage
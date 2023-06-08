import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
const ItemPage=()=>{


    return (
        <>
        <Grid container>
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


        </Grid>
        
        
        </>
    )

}

export default ItemPage
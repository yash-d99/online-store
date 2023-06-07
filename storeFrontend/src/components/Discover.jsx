import LoginButton from "./LoginPage";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {useState, useEffect, useRef} from 'react';

export default function Discover() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const [order, setOrder] = useState("");

  // Create dummy data for the store 
    // link to the image will be added later 
    // quantity will be added? 
    const items = [
      {name: "T-shirt", price: 50, description: "This is item 1", quantity: 10},
      {name: "Jeans", price: 30, description: "This is item 2", quantity: 9},
      {name: "Sweater", price: 40, description: "This is item 3", quantity: 7},
      {name: "Yellow shirt", price: 90, description: "This is item 6", quantity: 5},
      {name: "Jacket", price: 60, description: "This is item 4", quantity: 2},
    ];

  const sorting = [
    "Price Ascending",
    "Price Descending"
  ]


  // Render the card for one item
  function renderCard (item) {
      return(
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card >
        <CardMedia
          sx={{ height: 140 }}
          // replace this with the image that will be added to the cloud
          image="./images.png"
          title="item image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
              Price: ${item.price}
          </Typography>
          <Typography gutterBottom variant = "body1" component="div">
              Quantity: {item.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
        </CardActions>
      </Card>
      </Grid>
      );
  }

  function handleSearch(event) {
    setFilteredData(
      items.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    // console.log("Filtered in handlesearch: ", filteredData)
    // if (order !== "") {
    //   handleSort(order, filteredData)
    // }
  
} 

  function handleSort(event, data) {
    if (event === "Price Ascending") {
      setFilteredData(
        data.sort((a, b) => a.price < b.price ? -1 : (a.price > b.price ? 1 : 0))
      )
    } else {
      setFilteredData(
        data.sort((a, b) => (a.price > b.price ? -1 : 1))
      )
    }
  }
  // function handlePriceRange (minVal, maxVal) {
  //   console.log("Search", search);
  //   console.log("Max when price change: ", typeof max)
  //   console.log("Min when price changes: ", typeof min)
  //   if (search === "") {
  //     setFilteredData(
  //       items.filter((item) => 
  //       item.price >= minVal && item.price <= maxVal
  //       )
  //     );
  //   } else if (max === null && min === null) {
  //     setFilteredData(
  //       items.filter((item) => 
  //       item.name.toLowerCase().includes(search.toLowerCase())
  //       )
  //     );
  //   }
  //   else {
  //     setFilteredData(
  //     items.filter((item) => 
  //     item.price >= minVal && item.price <= maxVal && item.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  //   }

  // }
  // function chooseOutput () {
  //     if (search === "" && order === "") {
  //       return items.map((item) => renderCard(item));
  //     } else if (search !== "" && order !== "") {
  //       return filteredData.map((item) => renderCard(item));
  //     } else if (search === "" && order !== "") {
  //       return filteredData.map((item) => renderCard(item));
  //     } 
  // }

  return (
    <div>
    <LoginButton></LoginButton>
    
      <div>

      <TextField
              align-Items = "center"
              sx={{width:"90vw", marginBottom:"2vh", marginLeft:"5vw"}}
              value={search}
              placeholder="Look up item by name"
              onChange={(event) => {
                setSearch(event.target.value)
                handleSearch(event)
              }}
      ></TextField>
      {/* <FormControl style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">
                Change viewing order
              </InputLabel>
      <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={order}
                label="Change viewing order"
                onChange={(e) => {
                  setOrder(e.target.value)
                  handleSort(e.target.value, search === "" ?items :filteredData)
                }}
              >
                {sorting.map((type) => (
                  <MenuItem key={type} value={type}>
                    {" "}
                    {type}{" "}
                  </MenuItem>
                ))}
              </Select>
      </FormControl> */}
      {/* <TextField
              type = "number"
              inputProps = {{min: 0, max: Number.MAX_VALUE}}
              value={min}
              placeholder="Minimum price range"
              onChange={(event) => {
                min.current = (event.target.value)
                handlePriceRange(event.target.value, max)
              }
              }
      ></TextField>
      <TextField
              type = "number"
              inputProps = {{min: 0, max: Number.MAX_VALUE}}
              value={max}
              placeholder="Maximum price range"
              onChange={(event) => {
                max.current = (event.target.value)
                handlePriceRange(min,event.target.value)
              }}
      ></TextField> */}
      <Container maxWidth="100%">
        <Grid container className="cardGrid" spacing={3} >
        {search === ""
              ? items && items.map((item) => renderCard(item))
              : filteredData.map((item) => renderCard(item))}
        </Grid>
      </Container>
          </div>
    </div>
    
  );
}

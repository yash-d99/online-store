import LoginButton from "./LoginPage";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import zephyr from "./zephyrLogo-removebg-preview.png";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect, useRef } from "react";

export default function Discover() {
  const [search, setSearch] = useState("");

  const [order, setOrder] = useState("");

  const [priceRangeValue, setPriceRangeValue] = useState([0, 1000]);
  const [priceIsChanged, setPriceIsChanged] = useState(false);
  // Create dummy data for the store
  // link to the image will be added later
  // quantity will be added?
  const items = [
    { name: "T-shirt", price: 50, description: "This is item 1", quantity: 10 },
    { name: "Jeans", price: 30, description: "This is item 2", quantity: 9 },
    { name: "Sweater", price: 40, description: "This is item 3", quantity: 7 },
    {
      name: "Yellow shirt",
      price: 90,
      description: "This is item 6",
      quantity: 5,
    },
    { name: "Jacket", price: 60, description: "This is item 4", quantity: 2 },
  ];
  const [filteredData, setFilteredData] = useState(items);
  // Render the card for one item
  function renderCard(item) {
    return (
      <Card>
        <CardMedia
          sx={{ height: 200 }}
          // replace this with the image that will be added to the cloud
          image={zephyr}
          title="item image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price: ${item.price}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
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
    );
  }

  function handleSearch(event) {
    setFilteredData(
      items.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  const handlePriceRange = () => {
    if (search === "") {
      setPriceIsChanged(true);
      setFilteredData(
        items.filter(
          (item) =>
            item.price >= priceRangeValue[0] && item.price <= priceRangeValue[1]
        )
      );
    } else {
      setFilteredData(
        items.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) &&
            item.price >= priceRangeValue[0] &&
            item.price <= priceRangeValue[1]
        )
      );
    }
  };

  return (
    <div>
      <div>
        <TextField
          align-items="center"
          sx={{ width: "90vw", marginBottom: "2vh", marginLeft: "5vw" }}
          value={search}
          placeholder="Look up item by name"
          onChange={(event) => {
            setSearch(event.target.value);
            handleSearch(event);
          }}
        ></TextField>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <TextField
            label="min"
            type="number"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ width: "90px" }}
            value={priceRangeValue[0]}
            onChange={(e) => {
              setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
            }}
          />
          <Typography>-</Typography>
          <TextField
            label="max"
            type="number"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ width: "90px" }}
            value={priceRangeValue[1]}
            onChange={(e) => {
              setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
            }}
          />
          <Button onClick={handlePriceRange}>Go</Button>
        </Stack>
        <Container maxWidth="100%">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {search === "" && !priceIsChanged
              ? items &&
                items.map((item, index) => (
                  <Grid item xs={2} sm={3} md={3} key={index}>
                    {renderCard(item)}
                  </Grid>
                ))
              : filteredData.map((item, index) => (
                  <Grid item xs={2} sm={3} md={3} key={index}>
                    {renderCard(item)}
                  </Grid>
                ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

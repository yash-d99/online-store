import axios from "axios";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
import { CircularProgress, Container, Box } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";

function MyItems() {
  const [description, setDescription] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgName, setImgName] = useState("");
  const [execute, setExecute] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [render, setRender] = useState(false);
  const sized = useWindowSize();
  const getItems = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/db/get-items`, {
        email: email,
      });
      setItemList(response.data.result);
    } catch (error) {
      console.error(error); // Handle any errors that occur
    }
  };
  useEffect(() => {
    if (render) {
      getItems();
      console.log(itemList);
    }
  }, [email, showForm]);
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      setEmail(user.email);
      setRender(true);
    }
  }, [user]);
  const onSelectFile = async (event) => {
    event.preventDefault();
    setExecute(true);
    console.log(event);
    const file = event.target[0].files[0];
    setImgName(file.name);
    const convertedFile = await convertToBase64(file);
    const formData = new FormData();
    formData.append("image", convertedFile);
    formData.append("imageName", file.name);
    const s3URL = await axios.post(
      "http://localhost:3000/aws/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
  function renderCardMyItems(item) {
    return (
      <Card sx={{ border: "3px solid black" }}>
        <CardMedia
          sx={{ height: 200 }}
          // replace this with the image that will be added to the cloud
          image={item.imageLink}
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
            Quantity:{item.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/db/add_item`, {
          email: email,
          imageName: imgName,
          itemName: itemName,
          description: description,
          price: price,
          quantity: quantity,
        });
      } catch (error) {
        console.log("this error");
        console.error(error); // Handle any errors that occur
      }
    };
    if (execute) {
      sendData();
    }
    setShowForm(false);
  }, [imgName]);
  const convertToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };
  function displayForm() {
    setShowForm(true);
  }
  function closeForm() {
    setShowForm(false);
  }
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "0 auto",
  };

  return (
    <div style={{ marginTop: sized.width < 600 ? "20vh" : "4vh" }}>
      <div>
        {!render ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          <>
            {showForm ? (
              <div>
                <CardContent
                  sx={{
                    marginLeft: "45vw",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Container>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      minHeight="100vh"
                    >
                      <form style={formStyles} onSubmit={onSelectFile}>
                        <div>
                          {/* <label>
                                Upload a picture of the item:
                                <input id='image' type="file" accept="image/*" />
                            </label> */}

                          <Button variant="contained" component="label">
                            Upload File
                            <input
                              id="image"
                              type="file"
                              accept="image/*"
                              hidden
                            />
                          </Button>
                        </div>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="Item name"
                            variant="outlined"
                            name="name"
                            required
                            fullWidth
                            sx={{ marginBottom: "8px" }}
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                          />
                        </div>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            name="description"
                            required
                            fullWidth
                            sx={{ marginBottom: "8px" }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>

                        <div>
                          <TextField
                            type="number"
                            id="outlined-basic"
                            label="Price ($)"
                            variant="outlined"
                            name="price"
                            required
                            fullWidth
                            sx={{ marginBottom: "8px" }}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                        <div>
                          <TextField
                            type="number"
                            id="outlined-basic"
                            label="Quantity"
                            variant="outlined"
                            name="quantity"
                            required
                            fullWidth
                            sx={{ marginBottom: "8px" }}
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                        </div>
                        <div>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            Submit
                          </Button>
                        </div>
                        {/* <input type='submit' /> */}
                      </form>
                    </Box>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<CancelIcon />}
                      onClick={closeForm}
                    >
                      Cancel
                    </Button>{" "}
                  </Container>
                </CardContent>
              </div>
            ) : (
              <>
                <Button variant="outlined" onClick={displayForm}>
                  Add an item
                </Button>
                <Container maxWidth="100%">
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {itemList &&
                      itemList.map((item, index) => (
                        <Grid item xs={2} sm={3} md={3} key={index}>
                          {renderCardMyItems(item)}
                        </Grid>
                      ))}
                  </Grid>
                </Container>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MyItems;

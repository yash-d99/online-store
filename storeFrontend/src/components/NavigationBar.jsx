import { useWindowSize } from "@uidotdev/usehooks";
import { Toolbar, ButtonGroup, Button, AppBar, Box } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import CustomPopup from "./CustomPopup";
import "@github/details-menu-element";
import viteLogo from "/vite.svg";
import "./NavigationBar.css";
import "reactjs-popup/dist/index.css";
import CartItems from "./CartItemsList";
export default function NavigationBar() {
  const size = useWindowSize();
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };
  return (
    <>
      <AppBar style={{ backgroundColor: "#283618" }}>
        <Toolbar>
          {size.width > 600 && (
            <ButtonGroup disableElevation>
              <Button
                className="navButtons"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  backgroundColor: "#FEFAE0",
                  border: "none",
                }}
                component={Link}
                to="/Discover"
              >
                {" "}
                Discover{" "}
              </Button>
              <Button
                className="navButtons"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  backgroundColor: "#FEFAE0",
                  border: "none",
                }}
                component={Link}
                to="/MyItems"
              >
                {" "}
                My Items{" "}
              </Button>
            </ButtonGroup>
          )}
          {size.width < 600 && (
            <details style={{ width: "20%" }}>
              <summary className="summary">
                {
                  <img
                    src={viteLogo}
                    style={{ justifySelf: "center", width: "45%" }}
                    alt="Spots logo"
                  />
                }
                {<h4>Navigate</h4>}
              </summary>
              <details-menu
                role="menu"
                class="dropdown-menu"
                style={{ backgroundColor: "white" }}
              >
                <Button
                  sx={{ color: "black", textAlign: "center" }}
                  component={Link}
                  to={"/Home"}
                >
                  Home
                </Button>
                <Button
                  sx={{ color: "black", textAlign: "center" }}
                  component={Link}
                  to={"/Discover"}
                >
                  Discover
                </Button>
                <Button
                  sx={{ color: "black", textAlign: "center" }}
                  component={Link}
                  to={"/MyItems"}
                >
                  My Items
                </Button>
              </details-menu>
            </details>
          )}
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button onClick={() => setVisibility(true)}>Cart</Button>
          <CustomPopup
            onClose={popupCloseHandler}
            show={visibility}
            title="Your Cart"
          >
            <CartItems />
          </CustomPopup>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Outlet />
    </>
  );
}

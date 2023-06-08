import { useWindowSize } from "@uidotdev/usehooks";
import {
  Toolbar,
  ButtonGroup,
  Button,
  AppBar,
  Box,
  IconButton,
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomPopup from "./CustomPopup";
import "@github/details-menu-element";
import zephyr from "./zephyrLogo-removebg-preview.png";
import "./NavigationBar.css";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from "react-router-dom";
import LoginButton from "./LoginPage";
import { useAuth0 } from "@auth0/auth0-react";
import "reactjs-popup/dist/index.css";
import CartItems from "./CartItemsList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function NavigationBar() {
  const { isAuthenticated, isLoading, logout, user } = useAuth0();
  const location = useLocation();
  const pageName = location.pathname.substring(11);
  const size = useWindowSize();
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };
  const [highlight, setHighlight] = useState(false);
  const itemCount=useSelector(state=>state.totalQuantity)
  useEffect(() => {
    if (itemCount > 0) {
      setHighlight(true);
      const timer = setTimeout(() => {
        setHighlight(false);
      }, 1000); // Highlight effect duration (1 second)
      
      return () => clearTimeout(timer);
    }
  }, [itemCount]);

  return (
    <>
      <AppBar style={{ backgroundColor: "black" }}>
        <Toolbar>
          {size.width > 600 && (
            <ButtonGroup
              style={{ display: "flex", gap: "5rem" }}
              disableElevation
            >
              <IconButton
                component={Link}
                to={"/navigation/home"}
                style={{ width: "4%" }}
              >
                <img src={zephyr} width="60" height="60" alt="Zephyr Logo" />
              </IconButton>
              <Button
                className="navButtons"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  border: "none",
                }}
                component={Link}
                to="/navigation/discover"
                style={pageName === "/discover" ? { color: "#4ECDC4" } : null}
              >
                Discover
              </Button>
              <Button
                className="navButtons"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  border: "none",
                }}
                component={Link}
                to="/navigation/myitems"
                style={pageName === "/myitems" ? { color: "#4ECDC4" } : null}
              >
                My Items
              </Button>
              {isAuthenticated ? (
                <Button
                  onClick={logout}
                  className="navButtons"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                  }}
                >
                  Logout
                </Button>
              ) : (
                <LoginButton />
              )}
            </ButtonGroup>
          )}
          {size.width < 600 && (
            <details style={{ width: "20%" }}>
              <summary className="summary">
                {
                  <img
                    src={zephyr}
                    style={{ justifySelf: "right", width: "100%" }}
                    alt="Zephyr logo"
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
                  to={"/navigation/home"}
                >
                  Home
                </Button>
                <Button
                  sx={{ color: "black", textAlign: "center" }}
                  component={Link}
                  to={"/navigation/discover"}
                >
                  Discover
                </Button>
                <Button
                  sx={{ color: "black", textAlign: "center" }}
                  component={Link}
                  to={"/navigation/myitems"}
                >
                  My Items
                </Button>
              </details-menu>
            </details>
          )}
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button sx={{height:"100%"}} className={highlight ? 'highlight' : ''} onClick={() => setVisibility(true)}><Badge  badgeContent={itemCount} color="error">
 <ShoppingCartIcon className={highlight ? 'highlight' : ''} />
</Badge></Button>
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

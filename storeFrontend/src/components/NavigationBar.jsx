import { useWindowSize } from "@uidotdev/usehooks";
import { Toolbar, ButtonGroup, Button, AppBar } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import "@github/details-menu-element";
import viteLogo from "/vite.svg";
import "./NavigationBar.css";
import PersonIcon from '@mui/icons-material/Person';
import LoginButton from "./LoginPage";
import { useAuth0 } from "@auth0/auth0-react";
export default function NavigationBar() {

  const {isAuthenticated,isLoading, logout,user}=useAuth0()
   
 
  const size = useWindowSize();
  return (
    <>
      <AppBar style={{ backgroundColor: "#283618" }}>
        <Toolbar >
          {size.width > 600 && (
            <ButtonGroup style={{display:"flex", gap:"5rem"}} disableElevation>
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
 
                My Items
              </Button>
              {isAuthenticated?  <Button
              onClick={logout}
                className="navButtons"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  backgroundColor: "#FEFAE0",
                  border: "none",
                }}>Logout</Button>:<LoginButton/>} 
              <Button
                className="navButtons"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  backgroundColor: "#FEFAE0",
                  border: "none",
                }}
                
              ></Button>
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
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Outlet />
    </>
  );
}

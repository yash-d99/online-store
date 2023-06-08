import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "../redirect.css";
import { Helmet } from "react-helmet";

import { useAuth0 } from "@auth0/auth0-react";

const Redirect = () => {
    const navigate = useNavigate()


    return (
        <>
            <Helmet>
                <title>Zephyr</title>
            </Helmet>
            <div className="green-container">
                <h1 className="white-text">Welcome</h1>
                <div className="shadow-container">
                    <p>
                        We have successfully logged you in!
                    </p>
                </div>
                <Button
                    style={{ margin: "20px", backgroundColor: "white", color: "black" }}
                    variant="contained"
                    onClick={() => navigate("navigation/home")}
                >
                    Continue to App
                </Button>
            </div>
        </>

    )
}

export default Redirect
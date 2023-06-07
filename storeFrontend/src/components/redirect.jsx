import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

const Redirect=()=>{
    const navigate=useNavigate()


    return (

        <>
        <button onClick={()=>{
            navigate("navigation/home")
        }}>Return to the HomePage</button>
       
        </>
    )
}

export default Redirect
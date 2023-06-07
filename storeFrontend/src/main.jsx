import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./Store/Store";
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Auth0Provider
    domain="dev-x7uqysosbjt7jptw.us.auth0.com"
    clientId="UHPopQUecj5NuVpxeFlPNaiKswwtPsbH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

    <Provider store={store}>
        <App />
   
     </Provider>
    </Auth0Provider>
  </React.StrictMode>
);





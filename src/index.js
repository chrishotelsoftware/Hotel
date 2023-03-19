import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
    domain="dev-o7t7vzw1rz1ij83y.us.auth0.com"
    clientId="XrJWHbmb2W3bAlDEt9RCnDmPFHTaUaHA"
   
      redirecturi={ window.location.origin}
  
  >
   
    <App />
    
 
  </Auth0Provider>, 
document.getElementById('root'));

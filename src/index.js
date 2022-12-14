import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profile from './profile';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-23422duc.us.auth0.com"
      clientId="KvtmOXGEQG2JHLK8ZdIldw1nbMyuGHQn"
      redirectUri={window.location.origin}
    >
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </Auth0Provider>,
  </React.StrictMode>
);
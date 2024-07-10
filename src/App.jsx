import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./pages/Home";
import Signup from './pages/Signup';
// import Watchlist from './Watchlist.jsx'
// import Dashboard from './Dashboard.jsx'

// const theme = createTheme();

export default function App() {

  return (

      // <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="/watchlist" element={<Watchlist />} /> */}
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
          </div>
        </Router>
      // </ThemeProvider>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from './pages/Signup';
import { SidebarWithBurgerMenu } from "./components/SideNav/SideNav";
import Watchlist from './pages/WatchList'
import Dashboard from './pages/DashBoard'
import Resetpassword from './pages/Reset';



export default function App() {

  return (
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/sidenav" element={<SidebarWithBurgerMenu />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/resetpassword" element={<Resetpassword />} />
            </Routes>
          </div>
        </Router>
  );
}

import React, { useState } from "react";
import Login from "../components/Login";
function Home() {
    return (
    <div className="min-h-screen bg-gradient-to-l  from-customBlack-900 via-customBlak-700 to-customBlack-300  flex items-center justify-center">
        <Login />
    </div>)
};

export default Home;
import React from "react";
import { Signup as SignupComponent } from '../components/Signup'
function Signup(){
    return (
        <div className="min-h-screen bg-customLightBlue-500  flex items-center justify-center" >
            <SignupComponent />
        </div>
    );
}

export default Signup;
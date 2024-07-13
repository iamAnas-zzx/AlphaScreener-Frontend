import { useState } from "react";
import { Link } from 'react-router-dom';
import InputBox from './InputBoxes/Input';
import Button from './Buttons/Button';
import Icon from './Icon';

function Signup() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otpVerified, setOtpverified] = useState(false);
    const handleLogin = () => {
        // Handle login logic here
        console.log('Logging in with', { userId, password });
    };

    return (
        <div className="max-w-sm w-full mx-auto mt-10">
            <div className="bg-gradient-to-r from-[#11284e] to-[#1a3a6e] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mt-4 mb-4 flex items-center justify-center">
                    <Icon
                        className="h-12 w-12"
                    ></Icon>
                </div>
                <h2 className="text-center text-2xl text-white font-bold mb-4">Signup</h2>
                <div className="flex items-center justify-center mb-4" >
                    <span className="text-white mr-2" >+91</span>
                    <InputBox
                        color="blue"
                        label="Mobile Number"
                        value={mobileNumber}
                        size="lg"
                        className="text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
                        type="Number"
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />

                </div>
                <div className="text-center my-4">
                    <h6 className="text-sm text-white" >You will recieve an OTP on your number</h6>
                </div>
                <div className="flex w-full items-center justify-between">
                    <Button
                        label="Continue"
                        onClick={handleLogin}
                        className="w-full bg-customDarkBlue-500 hover:bg-customDarkBlue-700"
                    />
                </div>
                <div className="text-center mt-4">
                    <Link to="/" className="text-sm text-blue-500 hover:text-blue-800">
                        Already Signup? Login now!
                    </Link>
                </div>
            </div>
        </div>


    )
}

export { Signup };
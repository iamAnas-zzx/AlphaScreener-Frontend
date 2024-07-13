import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import InputBox from './InputBoxes/Input';
import Button from './Buttons/Button';
import Icon from './Icon';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Logging in with', { userId, password });
    };

    return (
        <div className="max-w-sm w-full mx-auto mt-10 "  >
            <div className="justify-center bg-gradient-to-r from-[#11284e] to-[#1a3a6e] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mt-4 mb-4 flex items-center justify-center">
                    <Icon
                        className="h-12 w-12"
                    ></Icon>
                </div>                            
                <h2 className="text-center text-2xl text-white font-bold mb-2">Login to</h2>
                <h2 className="text-center text-2xl text-white font-bold mb-4">Alpha-Screener</h2>
                <div className='flex flex-col gap-6' >
                    <InputBox
                        color='blue'
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        label="User ID"                        
                        className='text-white'
                    />
                    <InputBox
                        color='blue'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        className='text-white'
                    />
                    <div className="flex w-full items-center justify-between">
                        <Button
                            label="Login"
                            onClick={handleLogin}
                            className="w-full bg-customDarkBlue-500 hover:bg-customDarkBlue-700"
                        />
                    </div>
                </div>
                <div className="text-center mt-4">
                    <Link to="/signup" className="text-sm text-blue-500 hover:text-blue-800">
                        Forgot user ID or password?
                    </Link>
                </div>
                <div className="text-center mt-4">
                    <Link to="/signup" className="text-sm text-white hover:text-orange-500">
                        Don't have account? Signup now!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

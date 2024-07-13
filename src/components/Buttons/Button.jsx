import React from 'react';

const Button = ({ label, onClick, type = 'button', className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;

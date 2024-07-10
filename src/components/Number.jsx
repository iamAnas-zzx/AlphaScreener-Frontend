import React from "react";
import { Input } from "@material-tailwind/react";



function NumberBox({ color , label, type = 'text', value, onChange , className , ...props }){

    return (
            <Input
                color={color}
                type={type}
                value={value}
                onChange={onChange}
                label={label}
                className={className}
                {...props}
            />
)}

export default NumberBox;
import { Input } from '@material-tailwind/react';

const InputBox = ({ color , label, type = 'text', value, onChange , className , ...props }) => {
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
    );
};

export default InputBox;

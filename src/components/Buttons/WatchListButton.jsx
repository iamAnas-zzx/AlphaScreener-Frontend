const Watchlistbutton = ({ label, onClick, type = 'button', className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-white font-bold bg-customDarkBlue-900 rounded-full hover:bg-customDarkBlue-1100 focus:outline-none focus:shadow-outline ${className}`}
        >
            {label}
        </button>
    );
};

export default Watchlistbutton;
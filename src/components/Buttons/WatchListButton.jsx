const Watchlistbutton = ({ label, onClick, type = 'button', className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-white py-2 min-w-[200px] my-2 font-bold rounded-full  focus:outline-none focus:shadow-outline ${className}`}
        >
            {label}
        </button>
    );
};

export default Watchlistbutton;
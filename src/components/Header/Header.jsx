import { useState, useEffect } from "react";
import { SidebarWithBurgerMenu } from "../SideNav/SideNav";
import Container from '../container/Container';
import Icon from '../Icon';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../Buttons/Button";

import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Header() {
    // const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            // active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            // active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            // active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            // active: authStatus,
        },
    ]

    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () => {
        if (window.innerWidth < 960) {
            setOpenNav(true);
        } else {
            setOpenNav(false);
        }
        // console.log('Window resized:', window.innerWidth, 'Sidebar open:', openNav); // Debugging
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        handleWindowResize(); // Check the window size initially
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <header className='flex flex-row items-center py-3 shadow  bg-gradient-to-r from-[#11284e] to-[#1a3a6e] w-full '>
            <Container >
                <nav className='flex justify-between w-full'>
                    <div className='mr-4 flex flex-row items-center text-white'>
                        {openNav && <SidebarWithBurgerMenu />}
                        <Link to='/' className="flex items-center text-2xl" >
                            Alpha-Screener
                        </Link>
                    </div>
                    <div className="hidden lg:flex ">
                        <ul className='flex ml-auto'>
                            {navItems.map((item) =>
                            // item.active ? 
                            (
                                <li key={item.name}>
                                    <Button
                                        onClick={() => navigate(item.slug)}
                                        // className="px-6 py-2 text-red hover:text-white"
                                        // hover:bg-blue-100
                                        // label={item.name}
                                        className={`inline-block px-6 py-2 ${item.active ? "text-customLightBlue-300" : ""} hover:text-customLightBlue-300`}
                                    >
                                        {/* <span className="relative inline-block after:content-[''] after:block after:w-full after:h-[2px] after:bg-customLightBlue-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-400 after:ease-in-out">
                                            {item.name} 
                                        </span> */}
                                        {/* {item.name} */}
                                        {/* <span className="relative inline-block" color="white"> */}
                                        {/* {item.name} */}
                                        {/* <span className="absolute  inset-x-0 bottom-0 h-[2px] w-[10px] bg-customLightBlue-300 scale-x-0 transition-transform duration-400 ease-in-out origin-left hover:scale-x-100"></span> */}
                                        {/* <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span> */}

                                        {/* </span> */}
                                        <span className="group transition-all duration-300 ease-in-out" >
                                            <span className="bg-left-bottom bg-gradient-to-r from-customLightBlue-300 to-customLightBlue-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-400 ease-out">
                                                {/* This text gets 'underlined' on hover */}
                                                {item.name}
                                            </span>
                                        </span>
                                    </Button>
                                </li>
                            )
                                // : null
                            )}
                            {/* {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )} */}
                            <li className="flex items-center" >
                                Logout
                            </li>
                        </ul>
                        {/* <button onClick={toggleNav} className="mr-4 lg:hidden">
                            {openNav ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button> */}
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header;
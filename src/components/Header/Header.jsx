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
                        { openNav && <SidebarWithBurgerMenu />}
                        <Link to='/' className="flex items-center text-2xl" >
                            Alpha-Screener
                        </Link>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className='flex ml-auto'>
                            {navItems.map((item) =>
                            // item.active ? 
                            (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        // className="px-6 py-2 text-red hover:text-white"
                                        className='inline-bock px-6 py-2 text-white duration-200 hover:bg-blue-100 hover:text-red rounded-full'
                                        // className="inline-block px-6 py-2  duration-200 hover:text-underline  "
                                    >{item.name}</button>
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
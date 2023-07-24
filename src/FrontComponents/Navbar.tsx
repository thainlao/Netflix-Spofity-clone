import React, { FC, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import '../styles/navbar.css';
import logo from '../assets/logo1.png';

const Navbar: FC = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    };

    const handleCloseMenu = () => {
        setOpenMenu(false)
    };

    useEffect(() => {
        const body = document.querySelector("body");
        if (openMenu) {
            body?.classList.add("overflow-hidden"); 
        } else {
            body?.classList.remove("overflow-hidden");
        }
    }, [openMenu]);
    
    return (
        <div 
        style={{ fontFamily: 'font1'}}
        className="w-full bg-black py-6 flex justify-between items-center fixed z-10">
            <div className="flex mx-auto gap-3 cursor-pointer items-center">
                <Link to='/'><img src={logo} alt='logo' className="w-14 h-8 logo"/></Link>
            </div>
            <div className="mx-auto flex gap-5 cursor-pointer">
                <Link to='/music'><p className="text-xl hidden md:block text-white hover:text-[#e3eb75]">Music</p></Link> 
                <Link to='/films'><p className="text-xl hidden md:block text-white hover:text-[#e3eb75]">Films</p></Link>
            </div>
            <div 
            onClick={handleOpenMenu}
            className={`mobile-stripes cursor-pointer ${openMenu ? 'open' : ''}`}>
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
            </div>
            <div className={`menu-overlay ${openMenu ? 'open' : ''}`} onClick={handleCloseMenu}>
                <div className="menu-content">
                    <Link to='/login'><p className="text-xl text-white cursor-pointer hover:text-[#e3eb75] text-center">Log In</p></Link>
                    <Link to='/signin'><p className="text-xl text-white cursor-pointer hover:text-[#e3eb75] text-center">Sign In</p></Link>
                    <Link to='/support'><p className="text-xl text-white cursor-pointer hover:text-[#e3eb75]">Support</p></Link>
                    <Link to='/subscribe'><p className="text-xl text-white cursor-pointer hover:text-[#e3eb75]">Subscribe</p></Link>
                    <Link to='/music'><p className="text-xl text-white hover:text-[#e3eb75]">Music</p></Link> 
               <Link to='/films'> <p className="text-xl text-white hover:text-[#e3eb75]">Films</p></Link> 
                </div>
            </div>
            <div className="mx-auto flex gap-5">
                <Link to='/login'><p className="text-xl hidden md:block text-white cursor-pointer hover:text-[#e3eb75]">Log In</p></Link>
                <Link to='/signin'><p className="text-xl hidden md:block text-white cursor-pointer hover:text-[#e3eb75]">Sign In</p></Link>
                <div className="h-8 border-r border-white hidden md:block"></div>
                <Link to='/support'><p className="text-xl text-white hidden md:block cursor-pointer hover:text-[#e3eb75]">Support</p></Link>
                <Link to='/subscribe'><p className="text-xl hidden md:block text-white cursor-pointer hover:text-[#e3eb75]">Subscribe</p></Link>
            </div>
        </div>
    )
}

export default Navbar;

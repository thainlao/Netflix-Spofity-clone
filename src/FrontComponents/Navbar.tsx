import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import '../styles/navbar.css';

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
            <div className="mx-auto flex gap-3 cursor-pointer">
                <Link to='/'><p className="text-xl text-white">Thianlao</p></Link>
                <Link to='/'><p className="text-xl text-white">img</p></Link>
            </div>
            <div className="mx-auto flex gap-5 cursor-pointer">
                <p className="text-xl hidden md:block text-white hover:text-[#e3eb75]">Music</p>
                <p className="text-xl hidden md:block text-white hover:text-[#e3eb75]">Films</p>
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
                    <Link to='/login'><p className="text-xl text-white cursor-pointer hover:text-[#e3eb75]">Log In</p></Link>
                    <Link to='/signin'><p className="text-xl text-white cursor-pointer hover:text-[#e3eb75]">Sign In</p></Link>
                    <p className="text-xl text-white cursor-pointer hover:text-[#e3eb75]">Support</p>
                    <Link to='/subscribe'><p className="text-xl text-white cursor-pointer hover:text-[#e3eb75]">Subscribe</p></Link>
                    <p className="text-xl text-white hover:text-[#e3eb75]">Music</p>
                <p className="text-xl text-white hover:text-[#e3eb75]">Films</p>
                </div>
            </div>
            <div className="mx-auto flex gap-5">
                <Link to='/login'><p className="text-xl hidden md:block text-white cursor-pointer hover:text-[#e3eb75]">Log In</p></Link>
                <Link to='/signin'><p className="text-xl hidden md:block text-white cursor-pointer hover:text-[#e3eb75]">Sign In</p></Link>
                <div className="h-8 border-r border-white hidden md:block"></div>
                <p className="text-xl text-white hidden md:block cursor-pointer hover:text-[#e3eb75]">Support</p>
                <Link to='/subscribe'><p className="text-xl hidden md:block text-white cursor-pointer hover:text-[#e3eb75]">Subscribe</p></Link>
            </div>
        </div>
    )
}

export default Navbar;

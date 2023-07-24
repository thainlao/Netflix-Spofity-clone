import React, { FC } from "react";
import '../styles/Dashboard.css';
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";



const Dashboard: FC = () => {
    const [cookies, setCookie] = useCookies(['user'])
    const navigate = useNavigate();
    const user = cookies.user

    const logOut = () => {
        navigate("/login");
    };

    return (
        <div style={{ fontFamily: 'font1', height: '100vh' }}
        className="bg-[#f5f0f0] flex justify-center items-center">
            <div className="dashboard-container">
                <div className="flex flex-col gap-6 items-center justify-center py-6">
                    <p>
                        Welcome to the Thainlao Family!
                    </p>
                    <p>
                        User Info
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <hr className="bg-black h-[1.5px]"/>
                    <p>Your username: {user.username}</p>
                    <hr className="bg-black h-[1.5px]"/>
                    <p>Your E-Mail: {user.email}</p>
                    <hr className="bg-black h-[1.5px]"/>
                    <p>Your Password: {user.password}</p>
                    <hr className="bg-black h-[1.5px]"/>
                    <p>Subscribe status: {user.subscription}</p>
                    <hr className="bg-black h-[1.5px]"/>
                </div>
                <div className="flex justify-center mt-6">
                    <button 
                    onClick={logOut}
                    className="text-xl font-semibold rounded-full bg-[#e3eb75] h-12 px-6 hover:border border-[#fff9f9]">
                        Log Out
                    </button>
                 </div>
            </div>
        </div>
    )
}

export default Dashboard;
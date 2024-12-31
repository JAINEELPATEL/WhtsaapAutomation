import React from 'react';
import { FaUpload } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css'
import { NavLink } from 'react-router-dom';
import { IoIosInformationCircle } from "react-icons/io";
const Sidebar = () => {
    

    return (

        <>
            <div className='MainSidebar'>
                <div className='SidebarElements'>
                <NavLink to="/dashboard/uploadexcel" activeClassName='active' onClick={() => handleSidebarClick('uploadexcel')}>
                <div className='Sidebarcont'>
                    <div className='sidebarlogo'>
                    <FaUpload />
                    </div>
                    <div className='SidebarName'>
                        <h3>Upload Excel</h3>
                    </div>
                    </div>
                </NavLink>

                <NavLink to="/dashboard/formatexcel" activeClassName='active' onClick={() => handleSidebarClick('formatexcel')}>
                    <div className='Sidebarcont'>
                    <div className='sidebarlogo'>
                    <IoIosInformationCircle />
                    </div>
                    <div className='SidebarName'>
                        <h3>Format Excel</h3>
                    </div>
                    </div>
                    </NavLink>

                <NavLink to="/dashboard/writemessage" activeClassName='active' onClick={() => handleSidebarClick('writemessage')}>
                    <div className='Sidebarcont'>
                    <div className='sidebarlogo'>
                    <TfiWrite />
                    </div>
                    <div className='SidebarName'>
                        <h3>Write Message</h3>
                    </div>
                    </div>
                    </NavLink>
                    <NavLink to="/dashboard/whatsapplogin" activeClassName='active' onClick={() => handleSidebarClick('whatsapplogin')}>
                    <div className='Sidebarcont'>
                    <div className='sidebarlogo'>
                    <FaWhatsapp />
                    </div>
                    <div className='SidebarName'>
                        <h3>Whatsapp Login</h3>
                    </div>
                    </div>
                    </NavLink>
                    <NavLink to="/dashboard/sendmessage" activeClassName='active' onClick={() => handleSidebarClick('sendmessage')}>
                    <div className='Sidebarcont'>
                    <div className='sidebarlogo'>
                    <IoIosSend />
                    </div>
                    <div className='SidebarName'>
                        <h3>Send Message</h3>
                    </div>
                    </div>
                </NavLink>
                <NavLink to="/dashboard/terminate" activeClassName='active' onClick={() => handleSidebarClick('terminate')}>
                    <div className='Sidebarcont'>
                    <div className='sidebarlogo'>
                    <MdOutlineCancel />
                    </div>
                    <div className='SidebarName'>
                        <h3>Terminate Message</h3>
                    </div>
                    </div>
                    </NavLink>
                </div>
                <div className='ProfileEndSection'>
                <hr />
                    <h3>Profile</h3>
                </div>
            </div>

        </>
    );
};

export default Sidebar;

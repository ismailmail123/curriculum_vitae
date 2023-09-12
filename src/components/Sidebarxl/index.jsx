import Image from "next/image";
import { FcHome } from 'react-icons/fc';
import { GrDocumentStore, GrSettingsOption } from 'react-icons/gr';
import { FiUsers, FiLogOut } from 'react-icons/fi';
import ismail from '../../../public/assets/image/Ismail.jpg'
import avatar from '../../../public/assets/image/avatar.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";

function Sidebar (){

   
    const [smallnavCollapse, setSmallNavCollapse] = useState(false);
    const router = useRouter()

    return (
        
        <div 
        // className="container"
        >
            <nav className='nav fixed-top z-3'>
                    <div className='logo'>
                        <div className="admin">
                            <Image className="admin-img" src={avatar} alt="" />
                            <h1>Ismail</h1>
                        </div>
                            
                            <i className='bi bi-justify smallDeviceIcon'
                            style={{marginLeft: '130px'}}
                             onClick={e => setSmallNavCollapse(!smallnavCollapse)}
                            ></i>
                    </div>
                    
                    <ul>
                        <li>
                            <Form.Control
                            type="search"
                            placeholder="Search ..."
                            className="me-2 mt-2 search"
                            aria-label="Search"
                            />
                        </li>
                        <li>
                            <button className="mt-2 btn btn-outline-success register" >Register</button>
                        </li>
                    </ul>
                </nav>
            <aside className={`${smallnavCollapse ? "smallNav" : "" } sidebar 
           
             dekstop `}  >
                
                <div className="sidebar-inner">
                    <nav className="sidebar-nav" style={{marginTop: '70px'}}>
                        <button  style={{width: '300px'}}
                        onClick={() =>router.push('/identity')}
                        >
                            <FcHome className="fs-3"></FcHome>
                            Home
                            <span style={{animationDelay: "0.1s"}}>
                            </span>
                        </button>
                        <button type="button" style={{width: '300px'}}
                        onClick={() =>router.push('/criteria')}
                        >
                            <GrDocumentStore className="fs-3" />
                            Data
                            <span style={{animationDelay: "0.1s"}}>
                            </span>
                        </button>
                        <button type="button" style={{width: '300px'}}>
                            <GrSettingsOption className="fs-3" />
                            Setting
                            <span style={{animationDelay: "0.1s"}}>
                            </span>
                        </button>
                        <button type="button" style={{width: '300px'}}>
                            <FiUsers className="fs-3" />
                            User
                            <span style={{animationDelay: "0.1s"}}>
                            </span>    
                        </button>
                    </nav>
                    <div className=" d-flex align-items-end sidebar-footer">
                        <button type="button" style={{width: '300px'}}>
                        <FiLogOut className="fs-3" />
                        <span style={{animationDelay: "0.1s"}}>
                        </span>
                        </button>
                    </div>
                </div>
            </aside>
            
        </div>
    )
}

export default Sidebar;
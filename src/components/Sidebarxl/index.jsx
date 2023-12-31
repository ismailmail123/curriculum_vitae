import Image from "next/image";
import { FaHome } from 'react-icons/fa';
import { BiSolidDownload } from 'react-icons/bi';
import { GrDocumentStore, GrSettingsOption } from 'react-icons/gr';
import { FiUsers, FiLogOut } from 'react-icons/fi';
import { AiTwotoneMail } from 'react-icons/ai';
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
                            <h1>User</h1>
                        </div>
                            
                            <i className='bi bi-justify smallDeviceIcon'
                            style={{marginLeft: '130px'}}
                             onClick={e => setSmallNavCollapse(!smallnavCollapse)}
                            ></i>
                    </div>
                    
                    <ul>
                        {/* <li>
                            <Form.Control
                            type="search"
                            placeholder="Search ..."
                            className="me-2 mt-2 search"
                            aria-label="Search"
                            />
                        </li> */}
                        <li>
                            <button className="mt-2 btn btn-outline-success register"
                            onClick={() => router.push('/')}
                            >Register</button>
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
                            <FaHome className="fs-3"></FaHome>
                            Home
                            <span style={{animationDelay: "0.1s"}}>
                            </span>
                        </button>
                        <button type="button" style={{width: '300px'}}
                        onClick={() =>router.push('/criteria')}
                        >
                            <GrDocumentStore className="fs-3" />
                            Criteria
                            <span style={{animationDelay: "0.1s"}}>
                            </span>
                        </button>
                        <button type="button" style={{width: '300px'}}
                        onClick={() =>router.push('/file_download')}
                        >
                            <BiSolidDownload className="fs-3" />
                            Download
                            <span style={{animationDelay: "0.1s"}}>
                            </span>
                        </button>
                        <button type="button" style={{width: '300px'}}
                        onClick={() =>router.push('/message')}
                           disabled
                        >
                            <AiTwotoneMail className="fs-3" />
                            Message
                            <span style={{animationDelay: "0.1s"}}>
                            </span>
                        </button>
                    </nav>
                    <div className=" d-flex align-items-end sidebar-footer">
                        <button type="button" style={{width: '300px'}}
                        onClick={() => router.push('/')}
                        >
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

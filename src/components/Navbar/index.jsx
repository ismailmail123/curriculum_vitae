// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// // Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';


function Navbar () {

    const [navCollapse, setNavCollapse] = useState(false);
    const [smallnavCollapse, setSmallNavCollapse] = useState(false);

    return (


        <div className='sidebar_content'>
            <div 
            // className='container'
            >
                <nav className='nav'>
                    <div className='logo'>
                        <h2>Code yousaf</h2>
                        <i className='bi bi-justify largeDeviceIcon' onClick={e => setNavCollapse(!navCollapse)}></i>
                        <i className='bi bi-justify smallDeviceIcon' onClick={e => setSmallNavCollapse(!smallnavCollapse)}></i>
                    </div>
                    
                    <ul>
                        <li>Home</li>
                        <li>New Blog</li>
                    </ul>
                </nav>
                <div className={`${smallnavCollapse ? "smallNav" : "" } sidebar-container ${navCollapse ? "navCollaps" : ""}`}>
                    <div
                     className='mt-3'
                     >
                        <button className='text-light'>
                            <div className='nav-option option 1'>
                                <i className='bi bi-speedometer2'></i>
                                <h3>Dashboard</h3>
                            </div>
                        </button>
                        <button className='text-light'>
                        <div className='nav-option option 1'>
                            <i className='bi bi-clipboard-pulse'></i>
                            <h3>Articles</h3>
                        </div>
                        </button>
                        <button className='text-light'>
                        <div className='nav-option option 1'>
                            <i className='bi bi-chat-square-text'></i>
                            <h3>Report</h3>
                        </div>
                        </button>
                        <button className='text-light'>
                        <div className='nav-option option 1'>
                            <i className='bi bi-gear'></i>
                            <h3>Setting</h3>
                        </div>
                        </button>
                    </div>
                    <div style={{display: 'flex', marginTop: '170px'}}>
                        <button className='text-light'>
                            <div className='nav-option option 1'>
                                <i className='bi bi-power'></i>
                                <h3>Logout</h3>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

//         <SideNav
//     onSelect={(selected) => {
//         // Add your code here
//     }}
// >
//     <SideNav.Toggle />
//     <SideNav.Nav defaultSelected="home">
//         <NavItem eventKey="home">
//             <NavIcon>
//                 <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
//             </NavIcon>
//             <NavText>
//                 Home
//             </NavText>
//         </NavItem>
//         <NavItem eventKey="charts">
//             <NavIcon>
//                 <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
//             </NavIcon>
//             <NavText>
//                 Charts
//             </NavText>
//             <NavItem eventKey="charts/linechart">
//                 <NavText>
//                     Line Chart
//                 </NavText>
//             </NavItem>
//             <NavItem eventKey="charts/barchart">
//                 <NavText>
//                     Bar Chart
//                 </NavText>
//             </NavItem>
//         </NavItem>
//     </SideNav.Nav>
// </SideNav>




    )
}

export default Navbar;
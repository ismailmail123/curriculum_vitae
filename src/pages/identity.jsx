import Sidebarxl from '@/components/Sidebarxl/index'
import SidebarMobile from '@/components/SidebarMobile/index'
import Navbar from '@/components/Navbar/index'
import Identity from '@/containers/Identity/index'
import { Col, Row } from 'react-bootstrap'


function IdentityPage () {

    return (
        <>
            {/* <div className='dekstop'>
                <Sidebarxl/>
            </div> */}
            <Row style={{marginTop: '60px'}}>
            <Col 
            className='col-1 background-left'
            style={{height: '100vh'}}
            >
                <Sidebarxl/>
            </Col>
            {/* <Sidebarxl/> */}
            
            {/* <SidebarMobile /> */}

            
            {/* <Navbar /> */}
            <Col style={{padding: '0px '}}>
                <Identity />
            </Col>
            
           </Row>
            {/* <h3>hgvghsgdshdgsh</h3> */}
        </>
        
    )
}

export default IdentityPage;
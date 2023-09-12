import { Col, Container, Row } from 'react-bootstrap';
import { FcHome } from 'react-icons/fc';
import { GrDocumentStore, GrSettingsOption } from 'react-icons/gr';
import { FiUsers, FiLogOut } from 'react-icons/fi';

function SidebarMobile () {

    return (
        <Container className='mobile'>
            <div className="fixed-bottom bg-success p-2 text-dark bg-opacity-75"
            style={{backgroundColor: '#1f85ad', width: '10re', height: '5%', borderRadius: '100px', }}>
                <div className="d-flex justify-content-center mt-3 ">
                    <Row>
                        <Col>
                            <p>
                              <a href="/identity">
                                <FcHome className="mb-3" />
                              </a>
                            </p>
                        </Col>
                        <Col className="ms-4 ">
                          <p>
                          <a href="#user">
                            <GrDocumentStore className="mb-3" />   
                          </a>
                          </p>
                        </Col>
                        <Col className="ms-4 ">
                          <p>
                            <a href="#galeri">
                              <GrSettingsOption className="mb-3" />
                            </a>
                          </p>
                        </Col>
                        <Col className="ms-4 ">
                          <p>
                            <a href="#maps">
                              <FiUsers className="mb-3" />
                            </a>
                          </p>
                        </Col>
                        <Col className="ms-4 ">
                          <p>
                            <a href="#maps">
                              <FiLogOut className="mb-3" />
                            </a>
                          </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default SidebarMobile;


import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import ismail from '../../../public/assets/image/Ismail.jpg';
import avatar from '../../../public/assets/image/avatar.jpg'
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import { BiSolidStar, BiSolidUserCircle } from 'react-icons/bi';
import { AiFillCheckCircle, AiOutlineMail, AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';
import ReactWhatsapp from 'react-whatsapp';
import { FaFemale,FaHome } from 'react-icons/fa';


function Criteria (){

    return (

        <Row  className="mt-5 isDekstopcr">
           <Col className="col-4 padding-left " style={{height: '100vh'}}>
           <div className='logo2 bg-primary bg-opacity-50 p-2'>
                        <div className="admin2">
                            <Image className="admin1-img" src={ismail} alt="" />
                            <h6 className="mt-2 text-center">Ismail</h6>
                            <h6 className="text-center">VISI & MISI PERNIKAHAN</h6>
                            <hr className="ms-2 w-75" />
                        </div>
                    </div>
                    <div className="bg-success bg-opacity-25 p-2" 
                    style={{height: '100vh', width: '100%'}}
                    >
                        <div className="row-gap-3" style={{marginTop: '150px'}}>
                            <div className="text-center">
                                <h6 className="fw-bold">VISI</h6>
                                <p>Membangun keluarga yang senantiasa memberikan rasa aman (sakinah)</p>
                            </div>
                            <div 
                            // className="text-center"
                            >
                                <h6 className="fw-bold text-center">MISI</h6>
                                <div className="font-card">
                                    <p>Menjadikan keluarga sebagai sarana Tarbiyah</p>
                                    <p>Melahirkan keturunan yang dekat dengan Al-Quran, 
                                        berakhlak terpuji dan bermanfaat bagi orang banyak</p>
                                    <p>Menjadikan keluarga yang mandiri secara sikap (matang) 
                                        dan mandiri secara finansial (ekonomi).</p>
                                    <p>Menjadikan keluarga yang kaya Ilmu & kaya amal sholeh</p>
                                </div>
                                
                            </div>
                        </div>
                       
                    </div>
           </Col>
           <Col className="col-8 " style={{height: '100vh'}}>
            <div className="bg-primary-subtle p-2 mb-1 mt-1" style={{width: '90%'}}>
            <i>Barakallahu Laka Wa Baarakaa Alaika Wa Jamaa Bainakumaa Fii Khoir.<br></br>
                “Mudah-mudahan Allah memberkahi engkau dalam segala hal dan mempersatukan kalian berdua dalam kebaikan.” 
                (HR. Abu Dawud, Ahmad, Tirmidzi).</i>
            </div>
            
           <Card className="border-0 bg-success p-2 bg-opacity-10 overflow-x-auto" style={{width: '90%', height: '140px'}}>
            <div style={{ width: '390px'}}>
            <div>
            <MdOutlineFamilyRestroom className="text-primary rounded-circle me-2" style={{borderRadius: '50%', width: '30px', height: '30px'}} src={avatar} alt="" />
            <span className="fw-bold">KELUARGA SAYA</span>
            </div>
                <Row className="ms-1">
                    <Col className="col-5">
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 font-card fw-bold" >BAPAK</span>
                        </div>
                        <div className="ms-3">
                            <span className="ms-2 font-card" >Nama</span><br/>
                            <span className="ms-2 font-card" >TTL</span><br/>
                            <span className="ms-2 font-card" >Pekerjaan</span>
                        </div>
                    </Col>
                    <Col>
                    <div>
                        <span className="ms-2"></span>
                    </div>
                    <div>
                        <span className="ms-2">: Raupung</span><br/>
                        <span className="ms-2">: Maros, 26 November 1962</span><br/>
                        <span className="ms-2">: Petani</span>
                    </div>
                    </Col>
                    <Col className="col-5">
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 font-card fw-bold" >IBU</span>
                        </div>
                        <div className="ms-3">
                            <span className="ms-2 font-card" >Nama</span><br/>
                            <span className="ms-2 font-card" >TTL</span><br/>
                            <span className="ms-2 font-card" >Pekerjaan</span>
                        </div>
                    </Col>
                    <Col>
                    <div>
                        <span className="ms-2"></span>
                    </div>
                    <div>
                        <span className="ms-2">: Bondeng Dg. Bau</span><br/>
                        <span className="ms-2">: Maros, 12 Desember 1968</span><br/>
                        <span className="ms-2">: IRT</span>
                    </div>
                    </Col>
                    <Col className="col-5">
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 font-card fw-bold" >KAKAK</span>
                        </div>
                        <div className="ms-3">
                            <span className="ms-2 font-card" >Nama</span><br/>
                            <span className="ms-2 font-card" >TTL</span><br/>
                            <span className="ms-2 font-card" >Pekerjaan</span>
                        </div>
                    </Col>
                    <Col>
                    <div>
                        <span className="ms-2"></span>
                    </div>
                    <div>
                        <span className="ms-2">: Syahril</span><br/>
                        <span className="ms-2">: Maros, 27 Agustus 1984</span><br/>
                        <span className="ms-2">: PNS</span>
                    </div>
                    </Col>
                </Row>
                </div>    
            </Card>
            <Card className="mt-4 border-0 bg-success p-2 bg-opacity-10 overflow-x-auto" style={{width: '90%'}}>
                <div style={{ width: '320px'}}>
                <div>
                    <BiSolidUserCircle className="text-primary me-2" style={{borderRadius: '50%', width: '30px', height: '30px'}} src={avatar} alt="" />
                    <span className="fw-bold">KEBIASAAN SAYA</span>
                </div>
                <Row className="ms-1" style={{ width: '390px'}}>
                <table className="ms-3" style={{fontSize: '10px', width: '100%'}} >
                    <tbody>
                        <tr>
                            <td className="fw-bold font-card">
                            <AiFillCheckCircle style={{fontSize: '15px', marginRight: '5px'}}/>
                                Makan</td>
                            <td className="font-card">: 3x sehari, saat sarapan, makan siang dan makan malam</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card">
                            <AiFillCheckCircle style={{fontSize: '15px', marginRight: '5px'}}/>
                                Sholat</td>
                            <td className="font-card">: Jamaah di Masjid, terutama shubuh dan maghrib</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card">
                            <AiFillCheckCircle style={{fontSize: '15px', marginRight: '5px'}}/>
                                Tilawah</td>
                            <td className="font-card">: Rutin setelah sholat shubuh dan maghrib</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card">
                            <AiFillCheckCircle style={{fontSize: '15px', marginRight: '5px'}}/>
                                Tidur</td>
                            <td className="font-card">: Tidur malam jam 23.00 WITA (saat tidak sift malam)</td>
                        </tr>
                    </tbody>
                    </table>
                </Row> 
            </div>       
            </Card>
            <Card className="mt-3 border-0 bg-success p-2 bg-opacity-10 overflow-x" >
            <div>
            <FaFemale className="text-primary " style={{borderRadius: '50%', width: '30px', height: '30px'}} src={avatar} alt="" />
            <span className="fw-bold">KRITERIA CALON PASANGAN</span>
            </div>
            <Row className="ms-1" style={{ width: '390px'}}>
                <table className="ms-3 " style={{fontSize: '10px', width: '100%'}} >
                    <tbody>
                        <tr className="me-2 border-danger border-bottom">
                            <td className="fw-bold font-card">
                                SHALEHAH</td>
                            <td className="font-card text-center text-warning">
                                <span>
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <AiOutlineStar />
                                </span>
                            </td>
                            <td className="font-card">kriteria fisik ialah berjilbab dan tidak berpenampilan berlebihan</td>
                        </tr>
                        <tr className="border-danger border-bottom">
                            <td className="fw-bold font-card">
                                CANTIK</td>
                            <td className="font-card text-center text-warning col-3" >
                                <span>
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <FaStarHalfAlt />
                                    <AiOutlineStar />
                                </span>
                            </td>
                            <td className="font-card">Cantik yang dimaksud bukan merupakan hal yang paling utama dan menentukan</td>
                        </tr>
                        <tr className=" border-danger border-bottom">
                            <td className="fw-bold font-card">
                                BERBAKTI</td>
                            <td className="font-card text-center text-warning">
                                <span>
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <AiOutlineStar />
                                </span>
                            </td>
                            <td className="font-card">Shaleh dan berbakti kepada suami adalah hal yang dibutuhkan</td>
                        </tr>
                        <tr >
                            <td className="fw-bold font-card">
                               SETIA</td>
                            <td className="font-card text-center text-warning">
                                <span>
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <BiSolidStar />
                                    <BiSolidStar />
                                </span>
                            </td>
                            <td className="font-card">Setia tentu saja pasti</td>
                        </tr>
                    </tbody>
                    </table>
                </Row>
            </Card>
            <Card className="mt-3 border-0 bg-success p-2 bg-opacity-10 overflow-x" >
            <div style={{width: '300px'}}>
            <FaHome className="text-primary me-2" style={{borderRadius: '50%', width: '30px', height: '30px'}} src={avatar} alt="" />
            <span className="fw-bold">RENCANA SETELAH MENIKAH</span>
            </div>
            <Row className="ms-1" style={{ width: '390px'}}>
                <table className="ms-3" style={{fontSize: '10px', width: '100%'}} >
                    <tbody>
                        <tr className="me-2 border-danger border-bottom">
                            <td className="fw-bold font-card col-4">
                               Rumah Tangga</td>
                            
                            <td className="font-card ">: Segala upaya untuk memberikan rasa aman</td>
                        </tr>
                        <tr className="border-danger border-bottom">
                            <td className="fw-bold font-card col-4">
                                Keturunan</td>
                            
                            <td className="font-card ">: Memiliki keturunan akhlak terpuji dan qurani</td>
                        </tr>
                        <tr className="border-danger border-bottom">
                            <td className="fw-bold font-card col-4">
                                Pekerjaan</td>
                            
                            <td className="font-card ">: Istri diberikan hak untuk bekerja</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card col-4">
                               Tempat Tinggal</td>
                           
                            <td className="font-card ">: Sementara waktu tinggal di wilayah tempat sya ditugaskan saat ini namun dirumah sendiri, Bantaeng Sulawesi Selatan</td>
                        </tr>
                    </tbody>
                    </table>
                </Row>
            </Card>
           </Col>
        </Row>
    )
}

export default Criteria;
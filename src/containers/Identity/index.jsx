import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import ismail from '../../../public/assets/image/Ismail.jpg';
import avatar from '../../../public/assets/image/avatar.jpg'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { BiLogoFacebookCircle, BiSolidUserCircle } from 'react-icons/bi';
import { AiFillCheckCircle, AiOutlineMail } from 'react-icons/ai';
import { GiGraduateCap } from 'react-icons/gi';
import { SiGooglemaps } from 'react-icons/si';
import ReactWhatsapp from 'react-whatsapp';


function Identity (){

    return (

        <Row className="isDekstop">
           <Col className="col-3 padding-left " style={{height: '100vh'}}>
                    <div className='d-flex align-items-center justify-content-center logo1 bg-primary bg-opacity-50 p-2'>
                        <div className="admin1">
                            <Image className="admin1-img" src={ismail} alt="" />
                            <h1 className="mt-2">Ismail</h1>
                            <hr className="ms-2 w-75" />

                        </div>
                    </div>
                    <div className="bg-success bg-opacity-25 p-2" 
                    style={{height: '100vh', width: '100%', marginTop: '-150px'}}
                    >
                        <div className="row-gap-3" style={{marginTop: '150px'}}>
                            <Row >
                                <a className="d-flex justify-content-center" href="#">
                                <ReactWhatsapp className="border-0 w-100 " number="+6285342545607" message="اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ" > <BsWhatsapp className="text-success rounded-circle mt-5 fs-2" /> </ReactWhatsapp>
                                 
                                </a>
                            </Row>
                            <Row>
                                <a className="d-flex justify-content-center" href="https://m.facebook.com/profile.php/?id=100005335387345">
                                    <BiLogoFacebookCircle className="text-primary rounded-circle mt-5 fs-2" />
                                </a>
                            </Row>
                            <Row>
                                <a className="d-flex justify-content-center" href="https://www.instagram.com/ismail_adzikr/">
                                    <BsInstagram className="text-danger-emphasis rounded-circle mt-5 fs-2" />
                                </a>
                            </Row>
                            <Row>
                                <a className="d-flex justify-content-center" href="https://mail.google.com/mail/u/0/">
                                    <AiOutlineMail className="text-black rounded-circle mt-5 fs-2" />  
                                </a>
                            </Row>
                            <Row>
                                <a className="d-flex justify-content-center" href="https://www.google.com/maps?q=-5.5369767,119.9318322&z=17&hl=id">
                                    <SiGooglemaps className="text-warning rounded-circle mt-5 fs-2" />   
                                </a>
                            </Row>
                        </div>
                       
                    </div>
           </Col>
           <Col className="col-9 " style={{height: '100vh'}}>
           <Card className="border-0 bg-success p-2 bg-opacity-10 overflow-x-auto" style={{width: '90%'}}>
            <div style={{ width: '370px'}}>
            <div>
            <BiSolidUserCircle className="text-primary me-2" style={{borderRadius: '50%', width: '30px', height: '30px'}} src={avatar} alt="" />
            <span className="fw-bold">DATA PRIBADI</span>
            </div>
                <Row className="ms-1">
                    <Col className="col-5">
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 font-card" >Nama</span>
                        </div>
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 font-card" >TTL</span>
                        </div>
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 font-card" >Suku</span>
                        </div>
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 font-card" >Golongan darah</span>
                        </div>
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 font-card" >Berat badan</span>
                        </div>
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 font-card" >Agama</span>
                        </div>
                    </Col>
                    <Col>
                    <div>
                        <span className="ms-2">: Ismail</span>
                    </div>
                    <div>
                        <span className="ms-2">: Maros, 22 April 1996</span>
                    </div>
                    <div>
                        <span className="ms-2">: Bugis</span>
                    </div>
                    <div>
                        <span className="ms-2">: O</span>
                    </div>
                    <div>
                        <span className="ms-2">: 56 Kg</span>
                    </div>
                    <div>
                        <span className="ms-2">: Islam</span>
                    </div>
                        
                    </Col>
                </Row>
                </div>    
            </Card>
            <Card className="mt-4 border-0 bg-success p-2 bg-opacity-10 overflow-x-auto" style={{width: '90%'}}>
                <div style={{ width: '320px'}}>
                <div>
                    <GiGraduateCap className="text-primary me-2" style={{borderRadius: '50%', width: '30px', height: '30px'}} src={avatar} alt="" />
                    <span className="fw-bold">PENDIDIKAN FORMAL</span>
                </div>
                <Row className="ms-1">
                    <div>
                        <AiFillCheckCircle style={{fontSize: '15px'}}/>
                        <span className="ms-2 font-card" >
                            <span className="fw-bold me-3">SDN 234 Barambang II</span>
                            2002 - 2008
                            
                        </span>
                    </div>
                    <div>
                        <span className="ms-4 fw-bold">Alamat : </span>
                        <span>Jl. Poros Kariango</span>
                    </div>
                </Row>
                <Row className="ms-1">
                    <div className="mt-3">
                        <AiFillCheckCircle style={{fontSize: '15px'}}/>
                        <span className="ms-2 font-card" >
                            <span className="fw-bold me-3">SMPN 16 Mandai :</span>
                            2008 - 2011
                            
                        </span>
                    </div>
                    <div>
                        <span className="ms-4 fw-bold">Alamat : </span>
                        <span>Jl. Poros Kariango</span>
                    </div>
                </Row>
                <Row className="ms-1">
                <div className="mt-3">
                    <AiFillCheckCircle style={{fontSize: '15px'}}/>
                    <span className="ms-2 font-card" >
                        <span className="fw-bold me-3">SMAN 8 Mandai-Maros : </span>
                         2011 - 2014
                         
                    </span>
                </div>
                <div>
                    <span className="ms-4 fw-bold">Alamat : </span>
                    <span>Jl. Poros Kariango</span>
                </div>
            </Row>
            <Row className="ms-1">
                <div className="mt-3">
                    <AiFillCheckCircle style={{fontSize: '15px'}}/>
                    <span className="ms-2 font-card" >
                        <span className="fw-bold me-3">Universitas Muslim Maros</span>
                         2015 - 2019
                         
                    </span>
                </div>
                <div>
                    <span className="ms-4 fw-bold">Alamat : </span>
                    <span>Pamalekang Jenne Kab. Maros</span>
                </div>
                
            </Row> 
            </div>       
            </Card>
            <Card className="mt-3 border-0 bg-success p-2 bg-opacity-10 overflow-x" >
            <div>
            <BiSolidUserCircle className="text-primary me-2" style={{borderRadius: '50%', width: '30px', height: '30px'}} src={avatar} alt="" />
            <span className="fw-bold">TENTANG SAYA</span>
            </div>
                <Row className="ms-1" style={{ width: '390px'}}>
                <table className="ms-3" style={{fontSize: '10px', width: '100%'}} >
                    <tbody>
                        <tr>
                            <td className="fw-bold font-card">Warna Favorit</td>
                            <td className="font-card">: Biru, Hijau, Coklat</td>
                        </tr>
                        {/* <tr>
                            <td className="fw-bold font-card">Makanan Favorit</td>
                            <td className="font-card">: Ayam, Sayur, Kentang, salad</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card"> Minuman Favorit </td>
                            <td className="font-card">: Madu, air Kelapa, Jus Melon, Jus Buah Naga</td>
                        </tr> */}
                        <tr>
                            <td className="fw-bold font-card"> Hal yang Disuka </td>
                            <td className="font-card">: Bangun Pagi, Membaca, Belajar Bahasa Pemrograman web</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card"> Hal yang Tidak Disuka </td>
                            <td className="font-card">: Rokok</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card"> Karakter + </td>
                            <td className="font-card">: Rapi, Semangat</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card"> Karakter - </td>
                            <td className="font-card">: Tidak Tegas, Pelupa, Tidak Teliti</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card"> Riwayat Penyakit </td>
                            <td className="font-card">: -</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card"> Keterangan </td>
                            <td className="font-card">: Aktif Bekerja di Lingkungan Rumah tahanan Negara Kelas IIB Bantaeng</td>
                        </tr>
                        <tr>
                            <td className="fw-bold font-card"> Tarbiah </td>
                            <td className="font-card">: Kajian Rutin ( ust. Nasrum, S.Pd.I)</td>
                        </tr>
                    </tbody>
                    </table>
                </Row>    
            </Card>
           </Col>
        </Row>
    )
}

export default Identity;
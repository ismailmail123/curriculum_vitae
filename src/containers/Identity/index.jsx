import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import ismail from '../../../public/assets/image/Ismail.jpg';
import avatar from '../../../public/assets/image/avatar.jpg'
import { BsWhatsapp } from 'react-icons/bs';
import { BiLogoFacebookCircle, BiSolidUserCircle } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';


function Identity (){

    return (

        <Row>
           <Col className="col-3 padding-left " style={{height: '100vh'}}>
           <div className='logo1 bg-primary bg-opacity-50 p-2'>
                        <div className="admin1">
                            <Image className="admin1-img" src={ismail} alt="" />
                            <h1>Ismail</h1>
                            <hr className="ms-2 w-75" />

                        </div>
                    </div>
                    <div className="bg-success bg-opacity-25 p-2" 
                    style={{height: '100vh', width: '100%', marginTop: '-150px'}}
                    >
                        <div className="row-gap-3" style={{marginTop: '150px'}}>
                            <Row>
                                <BsWhatsapp className="text-success rounded-circle" />
                               
                            </Row>
                            <Row>
                                <BiLogoFacebookCircle className="text-success rounded-circle" />
                               
                            </Row>
                            <Row>
                                <BsWhatsapp className="text-success rounded-circle" />
                               
                            </Row>
                            <Row>
                                <BsWhatsapp className="text-success rounded-circle" />
                               
                            </Row>
                            <Row>
                                <BsWhatsapp className="text-success rounded-circle" />
                               
                            </Row>
                        </div>
                       
                    </div>
           </Col>
           <Col className="col-9 " style={{height: '100vh'}}>
           <Card className="border-0 bg-success p-2 bg-opacity-10" style={{width: '90%'}}>
            <div>
            <BiSolidUserCircle className="text-primary" style={{borderRadius: '50%', width: '30px', height: '30px'}} src={avatar} alt="" />
            <span className="fw-bold">DATA PRIBADI</span>
            </div>
                <Row className="ms-1">
                    <Col className="col-5">
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 " style={{fontSize: '10px'}}>Nama</span>
                        </div>
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 " style={{fontSize: '10px'}}>Tempat & Tanggal Lahir</span>
                        </div>
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 " style={{fontSize: '10px'}}>Suku</span>
                        </div>
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 " style={{fontSize: '10px'}}>Golongan darah</span>
                        </div>
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 " style={{fontSize: '10px'}}>Berat badan</span>
                        </div>
                        <div>
                            <AiFillCheckCircle style={{fontSize: '15px'}}/>
                            <span className="ms-2 " style={{fontSize: '10px'}}>Agama</span>
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
            </Card>
            <Card className="mt-4 border-0 bg-success p-2 bg-opacity-10" style={{width: '90%'}}>
                <div>
                    <BiSolidUserCircle className="text-primary" style={{borderRadius: '50%', width: '30px', height: '30px'}} src={avatar} alt="" />
                    <span className="fw-bold">PENDIDIKAN FORMAL</span>
                </div>
                <Row className="ms-1">
                    <div>
                        <AiFillCheckCircle style={{fontSize: '15px'}}/>
                        <span className="ms-2 " style={{fontSize: '10px'}}>
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
                        <span className="ms-2 " style={{fontSize: '10px'}}>
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
                    <span className="ms-2 " style={{fontSize: '10px'}}>
                        <span className="fw-bold me-3">SMAN 8 Mandai-Maros : </span>
                         2012 - 2014
                         
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
                    <span className="ms-2 " style={{fontSize: '10px'}}>
                        <span className="fw-bold me-3">Universitas Muslim Maros</span>
                         2015 - 2019
                         
                    </span>
                </div>
                <div>
                    <span className="ms-4 fw-bold">Alamat : </span>
                    <span>Pamalekang Jenne Kab. Maros</span>
                </div>
            </Row>        
            </Card>
            <Card className="mt-3 border-0 bg-success p-2 bg-opacity-10" style={{width: '90%'}}>
            <div>
            <BiSolidUserCircle className="text-primary" style={{borderRadius: '50%', width: '30px', height: '30px'}} src={avatar} alt="" />
            <span className="fw-bold">TENTANG SAYA</span>
            </div>
                <Row className="ms-1">
                <table className="ms-3" style={{fontSize: '10px', width: '90%'}} >
                    <tbody>
                        <tr>
                            <td className="fw-bold">Warna Favorit</td>
                            <td>: Biru, Hijau, Coklat</td>
                        </tr>
                        <tr>
                            <td className="fw-bold">Makanan Favorit</td>
                            <td>: Ayam, Sayur, Kentang, salad</td>
                        </tr>
                        <tr>
                            <td className="fw-bold"> Minuman Favorit </td>
                            <td >Madu, air Kelapa, Jus Melon, Jus Buah Naga</td>
                        </tr>
                        <tr>
                            <td className="fw-bold"> Hal yang Disuka </td>
                            <td >: Bangun Pagi, Membaca, Belajar Bahasa Pemrograman web</td>
                        </tr>
                        <tr>
                            <td className="fw-bold"> Hal yang Tidak Disuka </td>
                            <td >: Rokok</td>
                        </tr>
                        <tr>
                            <td className="fw-bold"> Karakter + </td>
                            <td >: Rapi, Semangat</td>
                        </tr>
                        <tr>
                            <td className="fw-bold"> Karakter - </td>
                            <td >: Tidak Tegas, Pelupa, Tidak Teliti</td>
                        </tr>
                        <tr>
                            <td className="fw-bold"> Riwayat Penyakit </td>
                            <td >: -</td>
                        </tr>
                        <tr>
                            <td className="fw-bold"> Keterangan </td>
                            <td >: Aktif Bekerja di Lingkungan Rumah tahanan Negara Kelas IIB Bantaeng</td>
                        </tr>
                        <tr>
                            <td className="fw-bold"> Tarbiah </td>
                            <td >: Kajian Rutin ( ust. Nasrum, S.Pd.I)</td>
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
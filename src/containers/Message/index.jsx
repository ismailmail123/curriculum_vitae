import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { BiSolidSend } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import ReactScrollableFeed from 'react-scrollable-feed';
import dayjs from 'dayjs';


function Message (){



    const router = useRouter();
    const messageId =  router.query.messageId;

    const [cards, setCards] = useState();
    const [name, setName] = useState('');
    const [say, setSay] = useState('');

    const URL = "https://invitation-lm0g.onrender.com"
    const getCards = () => {
        axios({
        method: "GET",
        url: `${URL}/recipients`
        })
        .then(cards => {
        setCards(cards.data)
        console.log(cards.data)
        })
        .catch(err => {
        console.log(err)
        })
    }
    useEffect(() => {
        getCards()
    },[]) 

    const submitHendler = () => {
        axios({
          method: "POST",
          url: `${URL}/recipients`,
          data:{
            name,say
          }
        })
        .then(result => {
          getCards()
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
        })
      }
      useEffect(() => {
        getCards()
      },[])

  
     

    return(
        <>
        <Container  fluid
        
        >
            <Card className="overflow-auto bg-success bg-opacity-10" 
            style={{height: '85vh'}}
            >
               <ReactScrollableFeed>
                     {
                        cards?.length !== 0 ? 
                        cards?.map(recipient => {
                        return(
                            <>
                                
                            <div key={messageId} className=' d-flex justify-content-center'>
                                <Card className="mt-3 d-flex bg-success" style={{width: '350px' }} >
                                
                                <span className="fw-bold fs-6 lh-1 ms-2 text-light">👨‍💼{recipient.name}</span>
                                <span className="text-end">{dayjs(recipient?.createdAt).format("DDDD:MM, HH:MM")}</span>
                                    <Card
                                    //  style={{width: '350px'}}
                                    >
                                        
                                                <p className="fw-bold lh-1 ms-1 me-1">{recipient.say}</p>
                                                
                                        
                                    </Card>
                                
                                    
                                    
                                </Card>
                            </div>
                            
                            </>
                            
                        )
                        }) : 
                        <>
                        </>
                    }
               </ReactScrollableFeed>
            </Card>
        
           </Container>
            <div className='font-template  fixed-bottom bg-opacity-75 mb-1' style={{width: '415px'}}>
                
                <Form.Group
                    className="mb-3 w-50 ms-3"
                    controlId="name"
                    data-testid="wrapper-labelName">
                    <Row>
                        {/* <Col sm="8"> */}
                            <Form.Control
                                type="text"
                                placeholder="Nama tidak boleh kosong"
                                className='forminput rounded-pill'
                                onChange={(e) => setName(e.target.value)} 
                             />
                                                
                        {/* </Col> */}
                    </Row>
                
                </Form.Group>
                <Row >
                    
                                <Form.Group
                                    className="mb-3"
                                    style={{width: '80%'}}
                                    controlId="price"
                                    data-testid="wrapper-labelPrice">
                                    <Row className="d-flex">
                                            <textarea
                                                type="text"
                                                placeholder="Pesan tidak boleh kosong"
                                                className='forminput rounded-pill ms-3'
                                                onChange={(e) => setSay(e.target.value)}
                                            />
                                            
                                       
                                    </Row>
                                </Form.Group>
                                <button 
                                className="bg-primary rounded-circle ms-4" 
                                style={{width: '50px', height: '50px'}}
                                onClick={() => submitHendler()}
                                disabled={!name || !say}
                                >
                 <BiSolidSend className="fs-2 text-center text-light" />
                </button>
                
                </Row>                
            </div>
            <button onClick={() => router.push('/identity')}>
                <AiOutlineCloseCircle className="text-danger fixed-top fw-bold" style={{fontSize: '50px'}}/>
            </button>
            
                       
           </>
       
    )
}

export default Message;

import Image from 'next/image'
import profil from '../../public/assets/image/Ismail.jpg'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useRouter } from 'next/router'


function HomePage (){

  const router = useRouter()
  

  return (
    

    <Container
      className="bg-image d-flex align-items-center justify-content-center"
          
    >
      <div className='text-center'>
        <h2 className="mb-3">السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ</h2>
        <h2>Klik tombol berikut</h2>
        <Button onClick={() =>router.push('/identity')} className='w-25 btn-success mt-5' disabled >MY CV</Button>

      </div>
      
    </Container>
  )
}

export default HomePage

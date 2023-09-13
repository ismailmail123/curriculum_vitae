import { BiSolidDownload } from 'react-icons/bi';

function Unduh (){

    return(
        <div className='d-flex justify-content-center align-items-center ' style={{width: '100%', height: '100vh'}}>
            <div>
                <h4 className='text-primary'>Silahkan klik tombol <a href='https://drive.google.com/file/d/16UMp3lLjDw3yb5CSDAt7YfjqzvyTKF5d/view?usp=drive_link'>
            <BiSolidDownload className="fs-1 text-success text-center" /></a> </h4>
            </div>
        </div>
       
    )
}

export default Unduh;
import { BiSolidDownload } from 'react-icons/bi';

function Unduh (){

    return(
        <div className='d-flex justify-content-center align-items-center ' style={{width: '100%', height: '100vh'}}>
            <button>
            <BiSolidDownload className="fs-1 text-success" />
            <h4>Download My CV</h4>
            </button>
        </div>
       
    )
}

export default Unduh;
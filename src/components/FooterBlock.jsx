import footerFlag from '../assets/footerflag.png';
import blob from '../assets/blob.png';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterBlock = () => {
    return (
        <div className="relative">
            <img src={footerFlag} alt="Footer flag" className='w-full md:w-[50vw]' />
            <img src={blob} alt="Footer flag" className='w-full md:w-[45vw] absolute top-0 left-0 md:m-10' />
            <div className="absolute top-0 left-0 m-8 md:m-20 md:mx-40 text-[#FE75BB] text-center">
                <h1 className="text-4xl md:text-6xl font-bold">Get In Touch</h1>
                <div className="flex justify-center mt-4">
                    <a href="https://www.linkedin.com/in/charne-nel-723326265/" className="mx-2 text-xl md:text-2xl">
                        <FaLinkedin size={40} md:size={60}/>
                    </a>
                    <a href="mailto:Charne0611@gmail.com" className="mx-2 text-xl md:text-2xl">
                        <FaEnvelope size={40} md:size={60}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterBlock;
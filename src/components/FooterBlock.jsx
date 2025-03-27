import footerFlag from '../assets/footerflag.png';
import blob from '../assets/blob.png';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterBlock = () => {
    return (
        <div className="relative">
            <img src={footerFlag} alt="Footer flag" className='w-full md:w-[50vw]' />
            <img src={blob} alt="Footer flag" className='w-full md:w-[45vw] absolute top-0 left-0 md:m-10' />
            <div className="absolute top-0 left-0 m-8 md:m-20 mx-30 md:mx-35 text-[#FE75BB] text-center">
                <h1 className="text-4xl md:mt-15 md:text-6xl font-bold">Get In Touch</h1>
                <div className="flex justify-center md:mt-4">
                    <a href="https://www.linkedin.com/in/charne-nel-723326265/" className="mx-2 text-xl md:text-2xl">
                        <FaLinkedin size={60} md:size={80}/>
                    </a>
                    <a href="mailto:Charne0611@gmail.com" className="mx-2 text-xl md:text-2xl">
                        <FaEnvelope size={60} md:size={100}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterBlock;
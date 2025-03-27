import React from 'react';
import laptopMockup from '../assets/laptop.png';
import phoneMockup from '../assets/phone.png';
import vibeMockup from '../assets/laptop2.png';
import twinRehab from '../assets/twinrehab.png';
import HeadBlock from '../components/HeadBlock';
import FooterBlock from '../components/FooterBlock';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const route = window.location.pathname;
    const navigate = useNavigate()

    return (
        <div className="w-full overflow-x-hidden font-sans">
            <HeadBlock />

            {/* TROJAN HORSE WAS A UNICORN SECTION */}
            <section
                id="projects"
                className="bg-[#FE5701] min-h-screen px-4 md:py-20 flex flex-col-reverse md:flex-row items-center md:space-x-10"
            >
                <div className="p-5 w-full md:w-1/3 text-white text-left">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">Trojan Horse</h2>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">Was A Unicorn</h2>
                    <p className="pb-10 text-lg">Art Investment Dashboard</p>
                    <div className="mb-4 leading-relaxed px-4 text-lg">
                        <ul className="list-disc list-inside">
                            <li>Desktop-based investment and financial dashboard.</li>
                            <li>Focused on digital art investments.</li>
                            <li>Track finances and assets effortlessly.</li>
                            <li>Provide insights into market trends and valuations.</li>
                        </ul>
                    </div>
                    <div className='flex justify-center'>
                        <button className="bg-[#F7EEE3] text-[#FE5701] py-2 px-6 rounded-full font-bold" onClick={() => navigate('/projects/trojan')}>
                            Read
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-2/3 mb-6 md:mb-0 justify-center mt-55 md:mt-0 md:flex">
                    <img
                        src={laptopMockup}
                        alt="Laptop mockup"
                        className="w-full object-contain"
                    />
                </div>
            </section>

            {/* ALTHEA SECTION */}
            <section
                id="althea"
                className="bg-[#FA982D] min-h-screen px-4 flex flex-col md:flex-row items-center md:space-x-10"
            >
                <div className="w-full md:w-3/5 mb-6 md:mb-0 flex justify-center">
                    <img
                        src={phoneMockup}
                        alt="Phone mockup"
                        className="h-auto md:h-screen object-contain"
                    />
                </div>
                <div className="max-w-xl w-full md:w-2/5 text-center text-white px-4 md:px-0">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Althea</h2>
                    <p className="mb-4 leading-relaxed text-lg">Safety & Tracking App for Girls</p>
                    <ul className="text-left px-4 md:px-20 list-disc list-inside text-lg">
                        <li>Safety & Protection focused mobile application.</li>
                        <li>Real-time tracking and geo-fencing for added security.</li>
                        <li>SOS button for instant emergency alerts.</li>
                        <li>Community & Connectivity features for support and assistance.</li>
                        <li>Available on IOS for seamless accessibility.</li>
                    </ul>
                    <button className="bg-[#F7EEE3] text-[#FA982D] py-2 px-6 rounded-full font-bold mt-10" onClick={() => navigate('/projects/althea')}>
                        Read
                    </button>
                </div>
            </section>

            {/* VIBE POINTS SECTION */}
            <section
                id="vibe-points"
                className="min-h-screen bg-[#FE75BA] px-4 flex flex-col-reverse md:flex-row items-center md:space-x-10"
            >
                <div className="max-w-xl w-full md:w-1/3 text-left text-white p-4 pl-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">TwinRehab</h2>
                    <p className="mb-4 leading-relaxed text-lg">
                        Medical- Digital Twin Clone
                    </p>
                    <ul className="list-disc list-inside mb-4 text-lg">
                        <li>Medical field.</li>
                        <li>Post Operation Medical Therapy</li>
                        <li>Enhance post-operative recovery time by prescribing personalized exercises derived from a digital twin model, then assess the results to optimize recovery outcomes.</li>
                        <li>Available on iOS (mobile app)</li>
                    </ul>
                    <div className='flex justify-center'>
                        <button className="bg-[#FF389C] text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600" onClick={() => navigate('/projects/twin-rehab')}>
                            Read
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-2/3 mb-6 md:mb-0 flex justify-center">
                    <img
                        src={twinRehab}
                        alt="TwinRehab"
                        className="h-auto md:h-screen object-contain"
                    />
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="bg-[#F6AAB6] flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <FooterBlock />
                </div>
                <div className="w-full md:w-1/2 text-center text-[#812C00] mt-15 text-3xl p-4 md:p-20">
                    <p>
                        Thanks for scrolling through my portfolio! If you liked what you saw, let’s chat. If you didn’t… well, let’s chat anyway—I love a good design challenge!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

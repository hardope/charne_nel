import React from "react";
import Nav from "../components/Nav";
import althea from '../assets/althea.png';
import { useNavigate } from "react-router-dom";
import flower from "../assets/flower.svg";
import analysis from "../assets/analysis.png";
import userResearch from "../assets/user_research.png";
import qResearch1 from "../assets/q_research_1.png";
import qResearch2 from "../assets/q_research_2.png";
import features from "../assets/features.png";
import features2 from "../assets/features2.png";
import screens from "../assets/screens.png";

const Althea = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#F7EEE3] text-black">
            <Nav />
            <div className="bg-[#FD7840] text-[#09244B] mt-3 py-2 w-full flex flex-col md:flex-row items-center justify-center">
                <img src={althea} alt="Althea" className="w-60 mx-5" />
            </div>

            <div className="bg-[#F1D0CF] text-black mt-5 p-5 w-full md:w-[90vw] rounded-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">Scope</h1>
                <p className="text-lg leading-relaxed">
                    This project aims to design and develop a mobile app focused on women’s safety worldwide. 
                    The app will provide essential security features for women who may feel unsafe while using public transportation at night, 
                    running alone on a trail, or walking home from the library on campus. Key features will include an emergency SOS button, 
                    live location sharing, discreet distress signals, and safe route recommendations. Users can also set check-in alerts, 
                    report suspicious activity, and receive community safety updates. Designed for both iOS and Android, the app will be user-friendly, 
                    accessible globally, and tailored to different environments and languages. 
                    The goal is to create a reliable and proactive tool that helps women feel safer and more empowered in any situation.
                </p>
            </div>

            <div className="bg-[#F1D0CF] w-full md:w-[90vw] p-2 rounded-2xl mb-6 flex flex-col md:flex-row mx-auto mt-5">
                <h2 className="text-3xl font-bold mb-2 md:mb-0 md:w-1/5 ml-10">Tools:</h2>
                <p className="md:w-4/5 text-lg">
                Miro | SWOT analysis | Design life cycle  FigJam | Figma | A/B Testing | User interviews | Prototyping | Wire-framing | User testing | Interaction design | Intensive User Research 
                </p>
            </div>

            <div className="bg-[#F1D0CF] w-full md:w-[90vw] p-2 rounded-2xl mx-auto mt-5">
                <h2 className="text-3xl font-bold text-center">Who Is Althea?</h2>
            </div>

            <div className="w-full md:w-[90vw] mx-auto p-2 mt-5">
                <p className="text-lg leading-relaxed">
                    Althea is more than just an app—it’s a trusted companion for women’s safety. Designed to provide security and peace of mind, 
                    Althea empowers women to navigate the world with confidence, whether they’re commuting at night, running alone, or walking home. 
                    With smart safety features like live location sharing, discreet distress signals, and community alerts, 
                    Althea is always there when you need it most. Built for women, by women, this app is a global solution to everyday safety concerns, 
                    ensuring that no one ever feels alone in an unsafe situation.
                </p>
            </div>

            <div className="bg-[#F1D0CF] w-full md:w-[90vw] p-2 rounded-2xl mx-auto mt-5">
                <h2 className="text-3xl font-bold text-center">Problem Statement</h2>
            </div>

            <div className="w-full md:w-[90vw] mx-auto p-2 mt-5">
                <p className="text-lg leading-relaxed flex">
                    <img src={flower} alt="bulletpoint" className="w-5 h-5 mx-2 mt-1" />
                    Riley is a woman who often travels alone, who needs a simple and quick way to stay safe and alert others in emergencies because traditional safety tools are not always accessible or effective in high-stress situations. 
                </p>
                <p className="text-lg leading-relaxed flex mt-4">
                    <img src={flower} alt="bulletpoint" className="w-5 h-5 mx-2 mt-1" />
                    Bella is a young woman navigating unfamiliar environments, who needs a reliable and discreet way to share her location and call for help because she may feel unsafe and vulnerable when travelling alone, especially at night.
                </p>
            </div>

            <div className="bg-[#F1D0CF] w-full md:w-[90vw] p-2 rounded-2xl mx-auto mt-5">
                <h2 className="text-3xl font-bold text-center">Competitor Research Analysis</h2>    
            </div>

            <div className="flex flex-col md:flex-row w-full md:w-[90vw] mx-auto p-2 mt-5">
                <img src={analysis} alt="analysis" className="w-full md:w-2/3 p-2" />
                <div className="w-full md:w-1/3">
                    {([
                        "Enhanced Safety Features – Go beyond emergency response by adding AI-driven alerts, automatic check-ins, and real-time risk detection",
                        "Strong Privacy & Security – Build trust with encrypted communication, transparent data policies, and customizable location settings.",
                        "User-Friendly Experience – Ensure easy access to SOS, geo-fencing, and community chat with a clean, intuitive interface.",
                        "Integration & Growth – Expand with wearable compatibility, safety education, and features for travel, night commutes, and family monitoring."   
                    ].map((item, index) => (
                        <p key={index} className="text-lg leading-relaxed flex mb-4">
                            <img src={flower} alt="bulletpoint" className="w-5 h-5 mx-2 mt-1" />
                            {item}
                        </p>
                    )))}
                </div>
            </div>

            <div className="bg-[#F1D0CF] w-full md:w-[90vw] p-2 rounded-2xl mx-auto mt-5">
                <h2 className="text-3xl font-bold text-center">User Research (Target Groups & Pain Points)</h2>    
            </div>
            
            <div className="flex flex-col md:flex-row w-full md:w-[90vw] mx-auto p-2 mt-5">
                <img src={userResearch} alt="User Research" className="w-full" />
            </div>

            <div className="flex-col w-full md:w-[90vw] mx-auto p-2 mt-5">
                <h1 className="text-xl font-bold text-left mb-3">Different groups face different safety concerns:</h1>

                {([
                    "Teen Girls – Fear of bullying, stranger danger, and peer pressure. Parents likely monitor.",
                    "College Students – Campus safety, social risks, and urban crime. Use for personal security.",
                    "Young Professionals – Commuting, travel, and living alone risks. Integrated into daily life.",
                    " Outdoor Enthusiasts – Remote dangers, navigation issues, and isolation. Need real-time alerts.",
                    "International Travellers – Cultural barriers, scams, medical emergencies. Use for alerts abroad.",
                    " Parents of Young Girls – Worry about abduction, injury, and bullying. Use to monitor kids."
                ].map((item, index) => (
                    <p key={index} className="text-lg leading-relaxed mb-2 flex">
                        <img src={flower} alt="bulletpoint" className="w-5 h-5 mx-2 mt-1" />
                        {item}
                    </p>
                )))}
            </div>

            <div className="bg-[#F1D0CF] w-full md:w-[90vw] p-2 rounded-2xl mx-auto mt-5">
                <h2 className="text-3xl font-bold text-center">User Research (Qualitative & Quantitative)</h2>    
            </div>

            <div className="w-full md:w-[90vw] mx-auto p-2 mt-5 flex flex-col md:flex-row">
                <img src={qResearch1} alt="Qualitative Research" className="w-full md:w-1/2 p-2" />
                <img src={qResearch2} alt="Quantitative Research" className="w-full md:w-1/2 p-2" />
            </div>

            
            <div className="bg-[#F1D0CF] w-full md:w-[90vw] p-2 rounded-2xl mx-auto mt-5">
                <h2 className="text-3xl font-bold text-center">Main Features for the Althea App</h2>    
            </div>

            <div className="w-full md:w-[90vw] mx-auto p-2 mt-5 flex flex-col md:flex-row">
                <img src={features} alt="Features" className="w-full md:w-5/6 p-2" />
                <div className="relative bg-[#F1D0CF] text-black rounded-full max-w-sm mx-auto h-60 w-full text-center p-10" name="messageBubble">
                    <p className="text-lg leading-relaxed">The final features were carefully selected based on extensive user research, prioritizing three key aspects: safety, connectivity, and assistance.</p>
                </div>
            </div>

            <div className="w-full md:w-[90vw] mx-auto p-2 mt-5 flex flex-col md:flex-row">
                <img src={features2} alt="Features" className="w-full p-2" />
            </div>

            <div className="w-full md:w-[90vw] p-4 rounded-2xl mx-auto mt-5shadow-lg">
                <ol className="list-decimal pl-5 space-y-5 text-gray-800">
                    {[
                        {
                            title: "Emergency SOS",
                            pros: "Instantly alerts emergency contacts, useful for various emergencies.",
                            cons: "Navigation to the button may take too long; risk of false alarms."
                        },
                        {
                            title: "Real-Time Location Sharing",
                            pros: "Provides peace of mind, full control over sharing, and emotional support.",
                            cons: "Privacy concerns; requires internet access."
                        },
                        {
                            title: "Geo-Fencing",
                            pros: "Prevents entry into dangerous areas, customizable safe zones, alerts parents or guardians.",
                            cons: "Non-critical alerts can be annoying; GPS inaccuracies."
                        },
                        {
                            title: "Community Forum",
                            pros: "Emotional support, safety tips, and insights from others.",
                            cons: "Risk of misinformation, privacy concerns, and potential for negative interactions."
                        },
                        {
                            title: "Emergency Contacts",
                            pros: "Easy syncing, ensures contacts are notified in emergencies, supports user safety.",
                            cons: "Privacy concerns, risk of security breaches, false alarms may reduce responsiveness."
                        },
                        {
                            title: "Check-In Feature",
                            pros: "Enhances safety, customizable settings, reduces human error.",
                            cons: "False alarms from missed check-ins, potential overuse leading to privacy concerns."
                        }
                    ].map((item, index) => (
                        <li key={index} className="leading-relaxed">
                            <span className="font-semibold">{item.title}</span>
                            <ul className="pl-5 space-y-2">
                                <li className="list-disc"><span className="font-semibold">Pros:</span> {item.pros}</li>
                                <li className="list-disc"><span className="font-semibold">Cons:</span> {item.cons}</li>
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="bg-[#F1D0CF] w-full md:w-[90vw] p-2 rounded-2xl mx-auto mt-5">
                <h2 className="text-3xl font-bold text-center">iOS Native app</h2>    
            </div>

            <div className="w-full md:w-[90vw] mx-auto p-2 mt-5 flex flex-col md:flex-row">
                <img src={screens} alt="Qualitative Research" className="w-full p-2" />
            </div>

            <div className="bg-[#F1D0CF] w-full md:w-[90vw] p-2 rounded-2xl mx-auto mt-5">
                <h2 className="text-3xl font-bold text-center">Results & Next Steps</h2>    
            </div>

            <div className="w-full md:w-[90vw] mx-auto p-2 mt-5">
                User testing confirmed that the selected features effectively enhance safety, connectivity, and assistance, addressing key user concerns. While feedback was largely positive, areas for improvement include:
                <p className="text-lg leading-relaxed flex mt-4">
                    <img src={flower} alt="bulletpoint" className="w-5 h-5 mx-2 mt-1" />
                    Refining the user experience to reduce false alarms
                </p>
                <p className="text-lg leading-relaxed flex">
                    <img src={flower} alt="bulletpoint" className="w-5 h-5 mx-2 mt-1" />
                    Enhancing privacy controls
                </p>
                <p className="text-lg leading-relaxed flex mb-2">
                    <img src={flower} alt="bulletpoint" className="w-5 h-5 mx-2 mt-1" />
                    Optimizing location-based features for accuracy.
                </p>

                Next steps will focus on iterating based on user insights—fine-tuning existing features, exploring additional customization options, and continuing to gather feedback to ensure the app remains a reliable safety companion. Future updates will also prioritize a seamless balance between security and user autonomy.
            </div>

            <div className="text-center m-4" onClick={() => navigate('/#projects')}>
                <button className="bg-[#FE5701] text-white font-bold py-2 px-4 rounded-lg">Back to Case Studies</button>
            </div>
        </div>
    );
};

export default Althea;

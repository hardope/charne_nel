import React from "react";
import Nav from "../components/Nav";
import twinRehab from '../assets/twin-rehab.png';
import { useNavigate } from "react-router-dom";
import head_rehab from "../assets/head-rehab.png";
import doctor from "../assets/doctor.svg";
import patient from "../assets/patient.svg";
import doctorScreen from "../assets/doctor-screens.png";
import patientScreen from "../assets/patient-screens.png";

const TwinRehab = () => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#055986] text-black flex flex-col">
            <Nav />
            <div className="text-white mt-2 w-full flex items-center justify-center border-t-1 border-b-1 border-white" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'fill'
                , backgroundPosition: 'center' }}>
                <img src={twinRehab} alt="Twinrehab" className="w-20 md:w-40 mx-5" />
                <p className="text-xl md:text-3xl  font-bold">TWINREHAB</p>
            </div>

            <div className="text-white border-1 border-white w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className="text-3xl font-bold">Scope</p>
                <p className="text-lg leading-relaxed text-left mt-2 p-2">
                    The iOS app uses a digital twin model to enhance post-operative recovery for both doctors and patients. 
                    Doctors can view patient details, assign personalized exercises, message patients, and track progress with visual graphs. 
                    Patients can access their doctors, communicate securely, view their exercise plans, and monitor recovery progress. 
                    This dual-sided platform ensures efficient, data-driven care to optimize recovery outcomes.
                </p>
            </div>

            <div className="text-white border-1 border-white w-full flex flex-col md:flex-row items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className="text-3xl font-bold w-1/5">Tools: </p>
                <p className="text-lg leading-relaxed text-left mt-2">
                    Miro | SWOT analysis | Design life cycle FigJam | Figma | A/B Testing | User interviews | Prototyping | Wire-framing | User testing | Interaction design | Intensive User Research 
                </p>
            </div>

            <div className="text-white mt-2 border-1 border-white w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className="text-3xl font-bold">Who is TwinRehab</p>
            </div>

            <p className="text-lg text-white leading-relaxed text-left mt-2 md:w-[95vw] md:mx-auto md:my-3 p-2">
                TwinRehab is an advanced healthcare system that empowers doctors and patients with cutting-edge tools to visualize diseases, simulate treatments, and predict outcomes. By optimizing the entire treatment process, we aim to save time, reduce costs, and improve overall health, ensuring more effective and personalized care.
                Our users are post-operative patients, and with their digital twin, we can provide seamless, remote treatment, ensuring faster recovery and more personalized care—anytime, anywhere.
            </p>

            <div className="text-white mt-2 border-1 border-white w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className="text-3xl font-bold">Problem Statement</p>
            </div>

            <p className="text-lg text-white leading-relaxed text-left mt-2 md:w-[95vw] md:mx-auto md:my-3 p-2">
                Grace is a post-operative patient with a knee injury, who needs a seamless and personalized rehab experience because she struggles with accessing proper guidance and tracking her recovery.
                <br /><br />James is a shoulder surgery patient, who needs clear, guided therapy exercises and easy communication with his doctor because he finds it difficult to stay motivated and track his rehabilitation progress.
            </p>

            <div className="text-white mt-2 border-1 border-white w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className="text-3xl font-bold">User Research (Target groups & Pain points) </p>
            </div>

            <div className="text-black grid grid-cols-1 md:grid-cols-2 mt-2 w-full items-center md:w-[95vw] md:mx-auto md:my-3 p-2 text-center justify-between" >
                <div className="w-[99%] h-full border-1 border-white p-2 rounded-2xl m-1 text-left" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <p className="font-bold text-lg">User Group 1: Post-Operative Patients</p> 
                
                    <p className="my-2">Challenges: Post-surgical recovery often requires frequent check-ups, personalized rehabilitation, and continuous monitoring, which can be time-consuming and costly.</p>
                    <p className="my-2">How TwinRehab Helps:</p>
                    <ul className="px-5">
                        <li className="list-disc">
                            Creates a digital twin for personalized recovery plans.
                        </li>
                        <li className="list-disc">
                            Enables remote monitoring, reducing the need for in-person visits.
                        </li>
                        <li className="list-disc">
                            Reduces complications through early intervention.
                        </li>
                    </ul>

                    <p className="mt-4">Example: A knee surgery patient uses TwinRehab to track healing progress and receive tailored rehabilitation exercises at home, minimizing hospital visits.</p>
                </div>
                <div className="w-[99%] h-full border-1 border-white p-2 rounded-2xl m-1 text-left" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <p className="font-bold text-lg">User Group 2: Athletes and Rehabilitation Patients</p> 
                
                    <p className="my-2">Challenges: Athletes recovering from injuries require precise rehabilitation and performance optimization to safely return to peak condition.</p>
                    <p className="my-2">How TwinRehab Helps:</p>
                    <ul className="px-5">
                        <li className="list-disc">
                            Simulates different rehabilitation strategies to find the most effective approach.
                        </li>
                        <li className="list-disc">
                            Tracks muscle recovery and performance metrics in real time.
                        </li>
                        <li className="list-disc">
                            Reduces downtime and prevents re-injury through data-driven insights.                        </li>
                    </ul>

                    <p className="mt-4">Example: A professional soccer player recovering from an ACL injury uses TwinRehab to monitor progress, adjust training intensity, and receive expert recommendations from a sports therapist remotely.</p>
                </div>
                <div className="w-[99%] h-full mt-4 border-1 border-white p-2 rounded-2xl m-1 text-left" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <p className="font-bold text-lg">User Group 3: Hospitals and Healthcare Institutions</p> 
                
                    <p className="my-2">Challenges: Post-surgical recovery often requires frequent check-ups, personalized rehabilitation, and continuous monitoring, which can be time-consuming and costly.</p>
                    <p className="my-2">How TwinRehab Helps:</p>
                    <ul className="px-5">
                        <li className="list-disc">
                            Creates a digital twin for personalized recovery plans.
                        </li>
                        <li className="list-disc">
                            Enables remote monitoring, reducing the need for in-person visits.
                        </li>
                        <li className="list-disc">
                            Reduces complications through early intervention.
                        </li>
                    </ul>

                    <p className="mt-4">Example: A knee surgery patient uses TwinRehab to track healing progress and receive tailored rehabilitation exercises at home, minimizing hospital visits.    </p>
                </div>
                <div className="w-[99%] h-full mt-4 border-1 border-white p-2 rounded-2xl m-1 text-left" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <p className="font-bold text-lg">User Group 4: Elderly Patients and Assisted Living Residents</p> 
                
                    <p className="my-2">Challenges: Ageing individuals often require continuous health monitoring and proactive care to prevent deterioration and ensure quality of life.</p>
                    <p className="my-2">How TwinRehab Helps:</p>
                    <ul className="px-5">
                        <li className="list-disc">
                            Provides continuous monitoring for early detection of health issues.
                        </li>
                        <li className="list-disc">
                            Offers caregivers and doctors real-time insights into patient conditions.
                        </li>
                        <li className="list-disc">
                            Allows remote therapy and interventions, reducing hospitalizations.
                        </li>
                    </ul>

                    <p className="mt-4"> Example: An elderly patient with mobility issues uses TwinRehab to receive customized physical therapy exercises and real-time feedback, helping them maintain independence longer.</p>
                </div>
            </div>

            <div className="text-white mt-2 border-1 border-white w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className="text-3xl font-bold">Main Features for the TwinRehab app</p>
            </div>

            <div className="text-white mt-2  w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center">
                <div style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="border-1 border-white w-40 rounded-3xl flex">
                    <img src={doctor} alt="Doctor" className="w-10 p-1 mx-5" />
                    <p className="font-bold mt-2">Doctor</p>
                </div>

                <p className="text-lg text-left mt-2 md:w-[95vw] md:mx-auto md:my-3 p-2">
                    <b>Homepage</b> - A centralized dashboard where doctors can view all their patients at a glance, including a brief overview of their condition and progress. Doctors can efficiently search, filter, and sort patients to streamline their workflow.
                </p>

                <p className="text-lg text-left mt-2 md:w-[95vw] md:mx-auto md:my-3 p-2">
                    <b>Patient Page</b> -  When a doctor selects a patient from the homepage, they are redirected to a dedicated patient profile. This page provides comprehensive details, including medical notes, prescribed exercises, and progress tracking. From here, doctors can also seamlessly navigate to a personal chat for direct communication with the patient.
                </p>

                <p className="text-lg text-left mt-2 md:w-[95vw] md:mx-auto md:my-3 p-2">
                    <b>Chat Page</b> -  A dedicated communication hub where doctors can access all conversations with their patients in one place. They can seamlessly communicate via text messages, voice notes, and calls, ensuring efficient and timely patient support.
                </p>

                <p className="text-lg text-left mt-2 md:w-[95vw] md:mx-auto md:my-3 p-2">
                    <b>Profile Page</b> -  A personalized space where doctors can input and manage their professional details, ensuring relevant information is readily available for reference
                </p>
            </div>

            <div className="text-white mt-2  w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center">
                <div style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="border-1 border-white w-40 rounded-3xl flex">
                    <img src={patient} alt="Patient" className="w-10 p-1 mx-5" />
                    <p className="font-bold mt-2">Patient</p>
                </div>

                <p className="text-lg text-left mt-2 md:w-[95vw] md:mx-auto md:my-3 p-2">
                    <b>Homepage</b> - The patient’s central dashboard where they can view their doctor's details, upcoming appointments, and a brief overview of their treatment progress. Patients can also search and filter past interactions, exercises, and medical notes for easy access.
                </p>

                <p className="text-lg text-left mt-2 md:w-[95vw] md:mx-auto md:my-3 p-2">
                    <b>Doctor Page</b> -  When a patient selects their doctor from the homepage, they are redirected to a dedicated profile page. Here, they can view essential information about their doctor, including specialization, notes on their treatment, and previous recommendations. Patients can also navigate to the chat feature for direct communication.
                </p>

                <p className="text-lg text-left mt-2 md:w-[95vw] md:mx-auto md:my-3 p-2">
                    <b>Chat Page</b> -  A communication hub where patients can access all conversations with their doctor. They can send text messages, voice notes, and make calls, enabling seamless and real-time communication for better treatment support.
                </p>

                <p className="text-lg text-left mt-2 md:w-[95vw] md:mx-auto md:my-3 p-2">
                    <b>Profile Page</b> -  A personal space where patients can manage their information, including medical history, current treatment plans, and personal preferences. This ensures their doctor has the most up-to-date information for effective care.
                </p>
            </div>

            <div className="text-white mt-2 border-1 border-white w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className="text-3xl font-bold">iOS Native App</p>
            </div>

            <div className="text-white mt-2 w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center">
                <div style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="border-1 border-white w-40 rounded-3xl flex mb-2">
                    <img src={doctor} alt="Doctor" className="w-10 p-1 mx-5" />
                    <p className="font-bold mt-2">Doctor</p>
                </div>

                <img src={doctorScreen} alt="Doctor Screens" className="w-full" />

                <div style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="border-1 border-white w-40 rounded-3xl flex my-2">
                    <img src={patient} alt="Patient" className="w-10 p-1 mx-5" />
                    <p className="font-bold mt-2">Patient</p>
                </div>

                <img src={patientScreen} alt="Patient Screens" className="w-full" />
            </div>

            <div className="text-white mt-2 border-1 border-white w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center" style={{ backgroundImage: `url(${head_rehab})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className="text-3xl font-bold">Results & Next Steps</p>
            </div>

            <div className="text-white mt-2 w-full items-center justify-center md:w-[95vw] md:mx-auto md:my-3 p-2 rounded-2xl text-center">
                <p className="text-lg text-left">
                    After conducting user testing on the final high-fidelity version with a diverse group of participants across various age groups and levels of technical expertise, we concluded that the interface is intuitive and user-friendly for all users, regardless of age or technical proficiency.
                </p>
                
                <ul className="px-5 text-left">
                    <li className="list-disc p-1">
                        Replace Overlay with a New Page: Users preferred that clicking the “See More” buttons on information pages direct them to a new page rather than displaying content in an overlay.
                    </li>
                    <li className="list-disc p-1">
                        Improve Accessibility for Older Users: Some older participants had difficulty identifying where to click to close the overlay. Removing overlays in favour of dedicated pages will enhance usability.
                    </li>
                    <li className="list-disc p-1">
                    Enable PDF Downloads: Several users expressed a preference for printing exercise pages rather than accessing them through the app. Adding a feature to download exercises as a PDF will improve convenience.
                    </li>
                </ul>
            </div>

            <div className="text-center" onClick={() => navigate('/#projects')}>
                <button className="bg-[#FE5701] text-white font-bold py-2 px-4 rounded-lg mb-10">Back to Case Studies</button>
            </div>
        </div>
    );
};

export default TwinRehab;

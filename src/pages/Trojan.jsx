import React from "react";
import Nav from "../components/Nav";
import trojan from '../assets/trojan.png';
import lofi from "../assets/lofi.png"
import midfi from "../assets/midfi.png"
import hifi from "../assets/hifi.png"
import { useNavigate } from "react-router-dom";

const TrojanHorse = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#01204B] text-black">
            <Nav />
            <div className="bg-[#E9FC87] text-[#09244B] mt-3 py-6 px-4 w-full flex flex-col md:flex-row items-center justify-center">
                <img src={trojan} alt="Trojan Horse" className="w-20 mx-10" />
                <h1 className="text-3xl font-bold">Trojan Horse was a Unicorn</h1>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-10 text-black">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-[#8C94EF] p-2 rounded-lg">
                        <h2 className="text-3xl font-bold mb-2">Timeline</h2>
                        <p className="flex items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                                <path d="M12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0ZM12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4ZM12 4.8C12.2939 4.80004 12.5776 4.90795 12.7972 5.10326C13.0169 5.29857 13.1572 5.5677 13.1916 5.8596L13.2 6V11.5032L16.4484 14.7516C16.6636 14.9676 16.7886 15.2573 16.7979 15.5621C16.8072 15.8668 16.7001 16.1637 16.4985 16.3923C16.2969 16.621 16.0157 16.7644 15.7122 16.7933C15.4087 16.8222 15.1056 16.7345 14.8644 16.548L14.7516 16.4484L11.1516 12.8484C10.9651 12.6617 10.8453 12.4188 10.8108 12.1572L10.8 12V6C10.8 5.68174 10.9264 5.37652 11.1515 5.15147C11.3765 4.92643 11.6817 4.8 12 4.8Z" fill="black"/>
                            </svg>
                            2 Weeks
                        </p>
                    </div>
                    <div className="md:col-span-2 bg-[#8C94EF] p-2 rounded-lg">
                        <h2 className="text-3xl font-bold mb-2">Scope</h2>
                        <p>
                            Design a section of the new business platform where digital artists
                            can showcase their work and investors can discover and invest in
                            their creations.
                        </p>
                    </div>
                </div>

                <div className="bg-[#8C94EF] p-2 rounded-lg mb-6 flex flex-col md:flex-row">
                    <h2 className="text-3xl font-bold mb-2 md:mb-0 md:w-1/5">Tools:</h2>
                    <p className="md:w-4/5">
                        Interview skills | Google Surveys | Miro | FigJam | Figma | A/B Testing |
                        Desirability Testing | Design Thinking
                    </p>
                </div>

                {/* About Section */}
                <h2 className="text-2xl font-bold mb-2 bg-[#8C94EF] p-2 rounded-lg text-center">Who is Trojan Horse was a Unicorn?</h2>
                <div className="p-6 mb-6 text-white">
                    
                    <p>
                        THU is a curated community platform designed to facilitate networking and
                        opportunities for individuals and businesses. This UX case study explores
                        the research, insights, and design solutions developed to enhance its
                        investment dashboard experience.
                    </p>
                </div>

                {/* Problem Statement */}
                <div className="bg-[#8C94EF] p-2 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-2">Problem Statement</h2>
                </div>

                <div className="p-6 mb-6 text-white">
                    <p>
                        Users of investment dashboards often struggle with information overload,
                        outdated designs, and difficulty in quickly understanding their
                        investments. My goal was to identify pain points and improve the user
                        experience by creating a more intuitive, modern, and accessible
                        interface.
                    </p>
                    <br />
                    <p className="italic">
                        "Rickey is an investment dashboard user who needs a modern, intuitive, and
                        accessible interface because they struggle with information overload,
                        outdated designs, and difficulty in quickly understanding their
                        investments."
                    </p>
                    <br />
                    <p className='italic'>
                        "Investors using dashboards are overwhelmed by complex information and outdated 
                        designs who need a clear, user-friendly, and modern interface to quickly understand 
                        their investments because current dashboards make it difficult to access key insights 
                        efficiently."
                    </p>
                </div>

                <div className="bg-[#8C94EF] p-2 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-2">Research & Compeditor Analysis</h2>
                </div>

                <div className="p-6 mb-6 text-white space-y-4">
                    <p>
                        To better understand user needs and industry standards, I conducted competitor analysis, evaluating their strengths and areas for improvement:
                    </p>

                    <div className="flex items-start space-x-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_13_166)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2V8.5C12 8.89782 12.158 9.27936 12.4393 9.56066C12.7206 9.84196 13.1022 10 13.5 10H20V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H12ZM11.99 15H11C10.7348 15 10.4804 15.1054 10.2929 15.2929C10.1054 15.4804 10 15.7348 10 16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17V17.99C11 18.548 11.452 19 12.01 19H12.5C12.7201 19 12.9341 18.9273 13.1087 18.7933C13.2834 18.6593 13.4089 18.4714 13.4659 18.2588C13.5229 18.0462 13.5081 17.8207 13.4238 17.6173C13.3396 17.414 13.1906 17.2441 13 17.134V16.01C13 15.8774 12.9739 15.746 12.9231 15.6235C12.8724 15.501 12.798 15.3896 12.7042 15.2958C12.6104 15.202 12.499 15.1276 12.3765 15.0769C12.254 15.0261 12.1226 15 11.99 15ZM12 12C11.7348 12 11.4804 12.1054 11.2929 12.2929C11.1054 12.4804 11 12.7348 11 13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13C13 12.7348 12.8946 12.4804 12.7071 12.2929C12.5196 12.1054 12.2652 12 12 12ZM14 2.043C14.3789 2.12336 14.7263 2.31199 15 2.586L19.414 7C19.688 7.27373 19.8766 7.62112 19.957 8H14V2.043Z" fill="#8C94EF"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_13_166">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div>
                            <b className="block">Information Overload:</b>
                            Many dashboards display excessive data without clear prioritization.
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_13_170)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 3C9.16304 3 9.79892 3.26339 10.2678 3.73223C10.7366 4.20107 11 4.83696 11 5.5V7H13V5.5C12.9999 4.86528 13.2412 4.25429 13.675 3.79095C14.1088 3.32762 14.7026 3.04664 15.336 3.005L15.559 3C16.1884 3.0002 16.8019 3.19837 17.3124 3.56645C17.823 3.93454 18.2049 4.45389 18.404 5.051L21.606 14.656C21.8805 15.268 22.0147 15.9337 21.9987 16.6043C21.9828 17.2748 21.8172 17.9333 21.5139 18.5317C21.2107 19.13 20.7776 19.6529 20.2462 20.0623C19.7148 20.4716 19.0987 20.757 18.4428 20.8975C17.7869 21.0381 17.1079 21.0302 16.4555 20.8745C15.8031 20.7188 15.1937 20.4192 14.6719 19.9977C14.1502 19.5761 13.7293 19.0433 13.44 18.4381C13.1507 17.8329 13.0004 17.1708 13 16.5V9H11V16.5C10.9996 17.1708 10.8493 17.8329 10.56 18.4381C10.2707 19.0433 9.84981 19.5761 9.32807 19.9977C8.80632 20.4192 8.19694 20.7188 7.5445 20.8745C6.89206 21.0302 6.21306 21.0381 5.55719 20.8975C4.90132 20.757 4.28516 20.4716 3.75378 20.0623C3.22241 19.6529 2.78927 19.13 2.48605 18.5317C2.18283 17.9333 2.0172 17.2748 2.00127 16.6043C1.98534 15.9337 2.11952 15.268 2.394 14.656L5.595 5.051C5.78435 4.48344 6.13908 3.98547 6.61361 3.62106C7.08815 3.25665 7.6608 3.04246 8.258 3.006L8.5 3ZM6.5 14C5.145 14 4 15.149 4 16.5C4 16.9945 4.14662 17.4778 4.42133 17.8889C4.69603 18.3 5.08648 18.6205 5.54329 18.8097C6.00011 18.9989 6.50277 19.0484 6.98773 18.952C7.47268 18.8555 7.91814 18.6174 8.26777 18.2678C8.6174 17.9181 8.8555 17.4727 8.95196 16.9877C9.04843 16.5028 8.99892 16.0001 8.8097 15.5433C8.62048 15.0865 8.30005 14.696 7.88893 14.4213C7.4778 14.1466 6.99445 14 6.5 14ZM17.5 14C17.0055 14 16.5222 14.1466 16.1111 14.4213C15.7 14.696 15.3795 15.0865 15.1903 15.5433C15.0011 16.0001 14.9516 16.5028 15.048 16.9877C15.1445 17.4727 15.3826 17.9181 15.7322 18.2678C16.0819 18.6174 16.5273 18.8555 17.0123 18.952C17.4972 19.0484 17.9999 18.9989 18.4567 18.8097C18.9135 18.6205 19.304 18.3 19.5787 17.8889C19.8534 17.4778 20 16.9945 20 16.5C20 15.149 18.855 14 17.5 14Z" fill="#8C94EF"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_13_170">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div>
                            <b className="block">Visual Simplicity:</b>
                            The use of minimalistic designs and clear typography improves usability.
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 4.5C13 5.16304 12.7366 5.79893 12.2678 6.26777C11.7989 6.73661 11.163 7 10.5 7C9.83696 7 9.20107 6.73661 8.73223 6.26777C8.26339 5.79893 8 5.16304 8 4.5C8 3.83696 8.26339 3.20107 8.73223 2.73223C9.20107 2.26339 9.83696 2 10.5 2C11.163 2 11.7989 2.26339 12.2678 2.73223C12.7366 3.20107 13 3.83696 13 4.5Z" fill="#8C94EF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.196 12.48C15.936 12.5321 15.6659 12.4788 15.4451 12.3318C15.2244 12.1847 15.0711 11.956 15.019 11.696C14.849 10.846 14.39 10.469 13.789 10.254C13.6942 10.2198 13.5977 10.1905 13.5 10.166V20.93C13.4995 21.2006 13.3965 21.4609 13.2119 21.6587C13.0273 21.8565 12.7746 21.9771 12.5047 21.9962C12.2348 22.0154 11.9677 21.9316 11.757 21.7618C11.5463 21.592 11.4077 21.3488 11.369 21.081L10.643 16H10.357L9.631 21.08C9.59234 21.3477 9.4538 21.5909 9.24323 21.7607C9.03265 21.9305 8.76562 22.0143 8.49579 21.9953C8.22596 21.9763 7.97331 21.8559 7.7886 21.6583C7.60388 21.4607 7.50078 21.2005 7.5 20.93V15C6.57174 15 5.6815 14.6313 5.02513 13.9749C4.36875 13.3185 4 12.4283 4 11.5C4 10.5717 4.36875 9.6815 5.02513 9.02513C5.6815 8.36875 6.57174 8 7.5 8H12V8.002C12.702 8.012 13.617 8.069 14.461 8.371C15.61 8.781 16.651 9.654 16.981 11.304C17.0068 11.4328 17.0069 11.5655 16.9814 11.6944C16.9559 11.8233 16.9053 11.9459 16.8324 12.0552C16.7595 12.1645 16.6658 12.2583 16.5566 12.3314C16.4474 12.4045 16.3249 12.4553 16.196 12.481M7.5 10C7.10218 10 6.72064 10.158 6.43934 10.4393C6.15804 10.7206 6 11.1022 6 11.5C6 11.8978 6.15804 12.2794 6.43934 12.5607C6.72064 12.842 7.10218 13 7.5 13V10Z" fill="#8C94EF"/>
                            <path d="M17 14.4C17 14.177 17.087 14.035 17.213 13.934C17.3675 13.8163 17.5558 13.7518 17.75 13.75C17.937 13.75 18.142 13.817 18.287 13.934C18.357 13.9891 18.4129 14.0602 18.4499 14.1412C18.487 14.2223 18.5041 14.311 18.5 14.4V21C18.5 21.1989 18.579 21.3897 18.7197 21.5303C18.8603 21.671 19.0511 21.75 19.25 21.75C19.4489 21.75 19.6397 21.671 19.7803 21.5303C19.921 21.3897 20 21.1989 20 21V14.4C20 13.69 19.68 13.131 19.229 12.766C18.8076 12.4334 18.2868 12.2517 17.75 12.25C17.25 12.25 16.705 12.416 16.271 12.766C16.0268 12.9619 15.8304 13.2108 15.6968 13.494C15.5632 13.7771 15.4959 14.087 15.5 14.4C15.5 14.5989 15.579 14.7897 15.7197 14.9303C15.8603 15.071 16.0511 15.15 16.25 15.15C16.4489 15.15 16.6397 15.071 16.7803 14.9303C16.921 14.7897 17 14.5989 17 14.4Z" fill="#8C94EF"/>
                        </svg>
                        <div>
                            <b className="block">Outdated UI:</b>
                            Common industry designs rely on outdated aesthetics, such as white backgrounds with                 
          green buttons, reducing user engagement.
                        </div>
                    </div>
                </div>

                <div className="bg-[#8C94EF] p-2 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-2">User Research (Qualitative & Quantitative)</h2>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3 mb-10">
                    <div className="md:w-1/2 p-6 text-black bg-[#D9E787] rounded-lg mt-6">
                        <h1 className="font-bold text-xl mb-4 text-center">Interviews</h1>
                        <p>Conducted with NFT & Crypto Investors / Digital Artists to gather qualitative insights: (15 Interviews</p>

                        <ul className="list-disc list-inside mt-5">
                            <li>
                                <b>Cognitive Load: </b> Users find excessive detail overwhelming and confusing
                            </li>
                            <li>
                                <b>Time Constraints: </b> Investors need quick access to key information due to limited availability.
                            </li>
                            <li>
                                <b>Overview Preference: </b> A summary view with an option for in-depth analysis is favoured.
                            </li>
                            <li>
                                <b>Information Density: </b> Users prefer a structured layout that prevents overload.
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 p-6 text-black bg-[#D9E787] rounded-lg mt-6">
                        <h1 className="font-bold text-xl mb-4 text-center">Surveys</h1>
                        <p>Quantitative data gathered from NFT & Crypto Investors / Digital Artists: (30 surveys)</p>

                        <ul className="list-disc list-inside mt-5">
                            <li>
                                <b>96% </b> prefer seeing all their investments on the dashboard rather than a summarized version.
                            </li>
                            <li>
                                <b>84% </b> want an overview of their total investments across all platforms.
                            </li>
                            <li>
                                <b>82% </b> seek categorized views of their investments.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#8C94EF] p-2 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-2">Lo-Fi Prototype</h2>
                </div>

                <div className="p-6 mb-6 text-white">
                    <img src={lofi} alt="Lo-Fi Prototype" className="w-full" />

                    <p className="mt-6">
                        Design Thinking and ideation led me to this first draft (Lo-fi) The following were the findings after 7 user testings with  digital artist, NFT collectors and Crypto investors:
                    </p>

                    <ul className="mt-5 space-y-3">
                        {[
                            "Add Project stages",
                            "The suggested graphs take up too much space with valuable information",
                            "There are way too many different graphs on one page, which left users confused",
                            "Users did not care to see co-investors",
                            "Need a sub-navigation bar"
                        ].map((text, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28 9.5H2M28 9.5L20 17M28 9.5L20 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="leading-relaxed">{text}</span>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="bg-[#8C94EF] p-2 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-2">Mid-Fi Prototype</h2>
                </div>

                <div className="p-6 mb-6 text-white">
                    <img src={midfi} alt="Mid-Fi Prototype" className="w-full" />

                    <p className="mt-6">
                        Through Design Thinking and ideation, I developed this second iteration of the dashboard design (Mid-Fi). Insights from 11 user tests with digital artists, NFT collectors, and crypto investors revealed the following:
                    </p>

                    <ul className="mt-5 space-y-4">
                        {[
                            { title: "Investment Information Placement", description: "Users preferred moving the investment details column to the bottom of the page rather than keeping it at the top." },
                            { title: "Chart Preference", description: "The bar chart was favoured over the line chart, as it was more intuitive and effective for most users." },
                            { title: "Donut Graph Challenges", description: "Some users, particularly those with visual impairments, found it difficult to read and analyse." },
                            { title: "Save Function Confusion", description: "Users were unsure why there were two separate 'Save' options." },
                            { title: "Navigation Issue", description: "On the second page, some users struggled to find a way back to the main dashboard." },
                            { title: "Sorting and Ordering Difficulties", description: "The system for sorting and ordering was perceived as too complex and unclear." },
                            { title: "Desirability Testing (3rd Page)", description: "Users preferred the second option, as it presented valuable information in a clearer and more concise manner." }
                        ].map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28 9.5H2M28 9.5L20 17M28 9.5L20 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <div className="flex-1">
                                    <b>{item.title}: </b>
                                    <span className="leading-relaxed">{item.description}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="bg-[#8C94EF] p-2 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-2">Hi-Fi Prototype</h2>
                </div>

                <div className="p-6 mb-6 text-white">
                    <img src={hifi} alt="Hi-Fi Prototype" className="w-full" />

                    <p className="mt-6">
                        While designing the investment dashboard, I’ve gained insights into effectively utilizing limited space to present crucial information in a user-friendly manner. Post-implementation feedback and usability testing will be conducted to refine the final experience. Future iterations will focus on:
                    </p>

                    <ul className="mt-5 space-y-3">
                        {[
                            "Personalized Dashboard Recommendations based on user behaviour.",
                            "AI-driven Insights to provide investment suggestions.",
                            "Enhanced Mobile Optimization for on-the-go tracking.",
                            " I aim to explore options for enabling users to link their bank cards to the THU investment dashboard, allowing them to access a virtual THU card. This enhancement will streamline the investment process and improve user experience."
                        ].map((text, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28 9.5H2M28 9.5L20 17M28 9.5L20 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="leading-relaxed">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-center" onClick={() => navigate('/#projects')}>
                    <button className="bg-[#FE5701] text-white font-bold py-2 px-4 rounded-lg">Back to Case Studies</button>
                </div>
            </div>
        </div>
    );
};

export default TrojanHorse;

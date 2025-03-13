"use client";
import React from 'react';
import portraitImg from '../assets/portrait.png';
import stars from '../assets/stars.png';
import figma from '../assets/figma.png';
import googleAnalytics from '../assets/google-analytics.png';
import css3 from '../assets/css-3.png';
import sketch from "../assets/sketch.png";
import html5 from '../assets/html5.png';
import adobeIllustrator from '../assets/adobe-illustrator.png';
import miroIcon from '../assets/miro-icon.png';
import adobeXd from '../assets/adobe-xd.png';
import slack from '../assets/slack.png';
import notion from '../assets/notion.png';
import bee from '../assets/bee.png';
import box from '../assets/box.png';
import vscode from '../assets/vscode.png';
import Nav from './Nav';

const HeadBlock = () => {

    return (
        <div className='h-screen'>
            <Nav />
            <section
                id="home"
                className="w-full flex flex-col md:flex-row bg-[#F5F5F5] text-gray-800"
            >
                {/* Left side with image */}
                <img
                    src={portraitImg}
                    alt="Charne portrait"
                    className="h-auto md:h-[75vh] p-5 object-cover z-10 md:-mr-20 ml-0 md:ml-50 mt-5"
                />

                {/* Right side: orange background with text */}
                <div className="w-full h-auto md:h-[84vh] bg-[#FA982D] p-8 md:pl-16 md:py-12 font-sans text-white text-center relative">
                    <img
                        src={stars}
                        alt="Stars"
                        className="hidden md:block absolute top-5 right-60 h-[15vh]"
                    />
                    <div className='flex flex-col justify-center h-full'>
                        <h3 className="text-2xl md:text-3xl font-semibold mt-20 mb-5">
                            About Charne
                        </h3>
                        <p className="mb-3">
                            As a UX/UI Designer with a strong foundation in AI, I bring a 
                            unique perspective and a passion for solving complex problems 
                            in innovative ways.
                        </p>
                        <p className="mb-3">
                            My journey into design was inspired by the potential of AI to 
                            revolutionise how we interact with technology, driving me to 
                            create user-centric solutions that are both intuitive and impactful.
                        </p>
                        <p className="mb-3">
                            I thrive on understanding user behaviours and translating those insights 
                            into designs that seamlessly balance functionality and aesthetics.
                        </p>
                        <p className="mb-3">
                            My goal is to harness AI to push the boundaries of digital experiences, 
                            creating products that genuinely improve people’s lives and make advanced 
                            technologies more accessible and engaging.
                        </p>
                    </div>
                </div>
            </section>
            {/* Bottom Icons (hidden on mobile) */}
            <div className="hidden md:flex h-[8vh] space-x-4 w-full justify-between items-center p-1 bg-[#F6AAB6]">
                <img src={figma} className="h-full" />
                <img src={googleAnalytics} alt="Google Analytics icon" className="h-full" />
                <img src={css3} alt="CSS3 icon" className="h-full" />
                <img src={sketch} alt="Sketch icon" className="h-full" />
                <img src={html5} alt="HTML5 icon" className="h-full" />
                <img src={adobeIllustrator} alt="Adobe Illustrator icon" className="h-full" />
                <img src={miroIcon} alt="Miro icon" className="h-full" />
                <img src={adobeXd} alt="Adobe XD icon" className="h-full" />
                <img src={slack} alt="Slack icon" className="h-full" />
                <img src={notion} alt="Notion icon" className="h-full" />
                <img src={bee} alt="Bee icon" className="h-full" />
                <img src={box} alt="Box icon" className="h-full" />
                <img src={vscode} alt="VS Code icon" className="h-full" />
            </div>
        </div>
    );
};

export default HeadBlock;

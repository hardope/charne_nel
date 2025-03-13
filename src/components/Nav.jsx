"use client";
import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import charne from '../assets/charne.svg';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const route = window.location.pathname;
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="w-full bg-[#FE5701] h-[8vh] px-6 py-4 flex items-center justify-between">
            <img src={charne} alt="Charne logo" className="h-8" />
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-24 text-white">
                <li onClick={() => navigate('/')}>
                    <a
                        href="#home"
                        className={`hover:text-black transition ${route === '/' ? 'border-2 p-2 border-white rounded-xl' : ''}`}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className={`hover:text-white transition ${route.startsWith('/projects') ? 'border-2 p-2 rounded-xl' : ''}`}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className={`hover:text-white transition ${route === '/contact' ? 'border-2 p-2 rounded-xl' : ''}`}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        href="#cv"
                        className={`hover:text-white transition ${route === '/cv' ? 'border-2 p-2 rounded-xl' : ''}`}
                    >
                        CV
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/charne-nel-723326265/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaLinkedin size={25} />
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:Charne0611@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaEnvelope size={25} />
                    </a>
                </li>
            </ul>
            {/* Mobile Navigation (Hamburger) */}
            <div className="md:hidden text-white">
                <button onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <ul className="absolute top-[8vh] left-0 w-full bg-[#FE5701] flex flex-col px-10 space-y-4 text-white py-4 z-11 text-left">
                    <li onClick={() => { navigate('/'); toggleMobileMenu(); }}>
                        <a
                            href="#home"
                            className={`hover:text-black transition ${route === '/' ? 'border-2 p-2 border-white rounded-xl' : ''}`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`hover:text-white transition ${route.startsWith('/projects') ? 'border-2 p-2 rounded-xl' : ''}`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`hover:text-white transition ${route === '/contact' ? 'border-2 p-2 rounded-xl' : ''}`}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#cv"
                            className={`hover:text-white transition ${route === '/cv' ? 'border-2 p-2 rounded-xl' : ''}`}
                        >
                            CV
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/charne-nel-723326265/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition"
                        >
                            <FaLinkedin size={25} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:Charne0611@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition"
                        >
                            <FaEnvelope size={25} />
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Nav;
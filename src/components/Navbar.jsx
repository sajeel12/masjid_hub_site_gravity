import React, { useState } from 'react';

import logoImg from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Products', href: '#products' },
        { name: 'Blog', href: '#blog' },
        { name: 'Inspiring Mosques', href: '#inspiring-mosques' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Support', href: '#support' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src={logoImg} alt="MasjidHub Logo" className="w-48 h-48 object-contain" />
                        {/* <span className="font-bold text-xl text-primary tracking-tight">MasjidHub</span> */}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-primary font-medium text-sm transition-colors"
                                onClick={(e) => link.name === 'Products' && e.preventDefault()} // Dropdown trigger in future
                            >
                                {link.name} {link.name === 'Products' && <span className="text-xs">▼</span>}
                            </a>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#login" className="text-slate-600 hover:text-primary font-medium px-4 py-2 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors">
                            Log in
                        </a>
                        <a href="#join" className="bg-primary text-white hover:bg-slate-800 font-medium px-5 py-2.5 rounded-md transition-colors shadow-sm">
                            Join MasjidHub
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="mt-4 flex flex-col space-y-2 px-3">
                            <a href="#login" className="text-center text-slate-600 hover:text-primary font-medium px-4 py-2 rounded-md bg-slate-100 transition-colors">
                                Log in
                            </a>
                            <a href="#join" className="text-center bg-primary text-white hover:bg-slate-800 font-medium px-5 py-2.5 rounded-md transition-colors">
                                Join MasjidHub
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

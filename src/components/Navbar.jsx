import React, { useState } from 'react';
import logoImg from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    // Data for the dropdown
    const mosqueFeatures = [
        {
            name: 'Screens',
            desc: 'Display prayer times, verses, hadiths, announcements, events, and more in just a few clicks.',
            iconColor: 'text-blue-500',
            iconBg: 'bg-blue-50',
            iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        },
        {
            name: 'Pages',
            desc: 'Just drag and drop the elements we have already prepared for you, and your website is ready in just a few clicks!',
            iconColor: 'text-emerald-500',
            iconBg: 'bg-emerald-50',
            iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        },
        {
            name: 'Social',
            desc: 'Automate your stories, share your mosque\'s prayer times with elegant visuals.',
            iconColor: 'text-purple-500',
            iconBg: 'bg-purple-50',
            iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        },
        {
            name: 'Calendars',
            desc: 'Edit customizable and printable calendars in PDF format, viewable electronically.',
            iconColor: 'text-rose-500',
            iconBg: 'bg-rose-50',
            iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        },
        {
            name: 'Applications',
            desc: 'Allow worshippers to stay connected to your mosque with ease.',
            iconColor: 'text-orange-500',
            iconBg: 'bg-orange-50',
            iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        },
        {
            name: 'Donations',
            desc: 'Collect donations online in just a few clicks. We take care of the infrastructure and payment processing for you.',
            iconColor: 'text-rose-500',
            iconBg: 'bg-rose-50',
            iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        },
        {
            name: 'Widgets',
            desc: 'Want to improve your existing website\'s quality? Discover our ready-to-use widgets.',
            iconColor: 'text-teal-500',
            iconBg: 'bg-teal-50',
            iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        },
    ];

    const worshipperFeatures = [
        {
            name: 'One',
            desc: 'Never miss mosque announcements nearby, follow their prayer times, events, and more!',
            iconColor: 'text-sky-500',
            iconBg: 'bg-sky-50',
            iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        },
        {
            name: 'Home',
            desc: 'Stay connected to your favorite mosques from the comfort of your home.',
            iconColor: 'text-green-500',
            iconBg: 'bg-green-50',
            iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        },
    ];

    const navLinks = [
        { name: 'Products', href: '#products', hasDropdown: true },
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
                    <div className="hidden md:flex space-x-8 items-center h-full">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative h-full flex items-center"
                                onMouseEnter={() => link.hasDropdown && setShowProducts(true)}
                                onMouseLeave={() => link.hasDropdown && setShowProducts(false)}
                            >
                                <a
                                    href={link.href}
                                    className={`text-slate-600 hover:text-primary font-medium text-sm transition-colors flex items-center gap-1 ${link.hasDropdown ? 'cursor-default' : ''}`}
                                    onClick={(e) => link.hasDropdown && e.preventDefault()}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <svg className={`w-3 h-3 transition-transform ${showProducts ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </a>

                                {/* Dropdown Menu */}
                                {link.hasDropdown && showProducts && (
                                    <div className="absolute top-full left-0 w-[800px] bg-white shadow-xl border border-slate-100 rounded-lg -ml-40 overflow-hidden transform transition-all duration-200 ease-in-out opacity-100 translate-y-0">
                                        <div className="flex">
                                            {/* Left Column: For Mosques */}
                                            <div className="w-2/3 p-6 border-r border-slate-50">
                                                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2 bg-slate-100 py-1 rounded inline-block">For mosques</h3>
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                                                    {mosqueFeatures.map((item) => (
                                                        <a href="#" key={item.name} className="group flex gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                                            <div className={`flex-shrink-0 w-10 h-10 ${item.iconBg} ${item.iconColor} rounded-lg flex items-center justify-center`}>
                                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    {item.iconPath}
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-bold text-slate-800 group-hover:text-primary">{item.name}</p>
                                                                <p className="text-xs text-slate-500 leading-snug mt-1 line-clamp-3">{item.desc}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Column: For Worshippers */}
                                            <div className="w-1/3 p-6 bg-slate-50/50">
                                                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2 bg-slate-100 py-1 rounded inline-block">For worshippers</h3>
                                                <div className="space-y-6">
                                                    {worshipperFeatures.map((item) => (
                                                        <a href="#" key={item.name} className="group flex gap-3 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                                                            <div className={`flex-shrink-0 w-10 h-10 ${item.iconBg} ${item.iconColor} rounded-lg flex items-center justify-center`}>
                                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    {item.iconPath}
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-bold text-slate-800 group-hover:text-primary">{item.name}</p>
                                                                <p className="text-xs text-slate-500 leading-snug mt-1">{item.desc}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
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
                <div className="md:hidden bg-white border-t border-slate-100 max-h-[80vh] overflow-y-auto">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <div className="px-3 py-2">
                            <p className="font-semibold text-slate-400 text-xs mb-2 uppercase">Products</p>
                            <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-slate-100">
                                {[...mosqueFeatures, ...worshipperFeatures].map(item => (
                                    <a key={item.name} href="#" className="flex gap-3 py-2 items-center text-slate-700">
                                        <div className={`w-6 h-6 ${item.iconColor}`}>
                                            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                {item.iconPath}
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {navLinks.filter(l => l.name !== 'Products').map((link) => (
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

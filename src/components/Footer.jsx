import React from 'react';
import logoImg from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logoImg} alt="MasjidHub Logo" className="w-48 h-48 object-contain" />
                            {/* <span className="font-bold text-lg text-primary">MasjidHub</span> */}
                        </div>
                        <p className="text-sm text-slate-400 mb-6">
                            © 2026 MasjidHub
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Products</h3>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-primary">Screens</a></li>
                            <li><a href="#" className="hover:text-primary">Player</a></li>
                            <li><a href="#" className="hover:text-primary">Applications</a></li>
                            <li><a href="#" className="hover:text-primary">Pages</a></li>
                            <li><a href="#" className="hover:text-primary">Donations</a></li>
                            <li><a href="#" className="hover:text-primary">Social</a></li>
                            <li><a href="#" className="hover:text-primary">Widgets</a></li>
                            <li><a href="#" className="hover:text-primary">Calendars</a></li>
                        </ul>
                    </div>

                    {/* Resources & Solutions */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-slate-500 mb-8">
                            <li><a href="#" className="hover:text-primary">Blog</a></li>
                            <li><a href="#" className="hover:text-primary">Inspiring Mosques</a></li>
                            <li><a href="#" className="hover:text-primary">Changelog</a></li>
                            <li><a href="#" className="hover:text-primary">Support</a></li>
                            <li><a href="#" className="hover:text-primary">Contact us</a></li>
                        </ul>

                        <h3 className="font-semibold text-slate-900 mb-4">Solutions</h3>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-primary">Our pricing</a></li>
                        </ul>
                    </div>

                    {/* Language & Social */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Language</h3>
                        <ul className="space-y-3 text-sm text-slate-500 mb-8">
                            <li><a href="#" className="hover:text-primary">English</a></li>
                            <li><a href="#" className="hover:text-primary">Français</a></li>
                            <li><a href="#" className="hover:text-primary">العربية</a></li>
                        </ul>

                        <h3 className="font-semibold text-slate-900 mb-4">Join us</h3>
                        <div className="flex gap-4">
                            {/* Social Icons (Placeholders) */}
                            <a href="#" className="text-slate-400 hover:text-primary">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            {/* Add more icons as svg if needed */}
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

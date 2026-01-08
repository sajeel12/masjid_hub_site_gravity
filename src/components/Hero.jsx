import React from 'react';
import dashboardImg from '../assets/images/dashboard.png';

const Hero = () => {
    return (
        <section className="bg-white pt-20 pb-20 lg:pt-32 lg:pb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-6">
                    The Operating System for your <span className="text-accent">Mosque</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 mb-10">
                    Manage your mosque, engage your community, and increase donations with our all-in-one digital platform.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="#try-free"
                        className="px-8 py-3.5 border border-transparent text-base font-semibold rounded-md text-white bg-primary hover:bg-slate-800 md:text-lg md:px-10 transition-shadow shadow-lg"
                    >
                        Try for free now
                    </a>
                    <a
                        href="#demo"
                        className="px-8 py-3.5 border border-slate-200 text-base font-semibold rounded-md text-primary bg-white hover:bg-slate-50 md:text-lg md:px-10 transition-colors"
                    >
                        Watch Demo
                    </a>
                </div>

                {/* Abstract Hero Image/Graphic */}
                <div className="mt-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                    <div className="mx-auto max-w-5xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden bg-slate-50">
                        <img
                            src={dashboardImg}
                            alt="MasjidHub Dashboard"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';

const Testimonials = () => {
    return (
        <section className="bg-slate-50 py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Side: Content & CTA */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-6">
                            Hear what others have to say about us
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            We are working tirelessly for the sake of our shared community, and we've already helped thousands of mosques just like yours to make their day easier.
                        </p>
                        <a
                            href="#try-free"
                            className="inline-block px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-slate-800 transition-colors shadow-lg"
                        >
                            Try for free now
                        </a>
                    </div>

                    {/* Right Side: Testimonial Cards */}
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
                            <p className="text-slate-600 mb-6 italic">
                                "The experience so far has been amazing, making our masjid more accessible and transparent regarding activities, donation collection, and dynamic prayer time management."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-md flex items-center justify-center font-bold text-slate-400 text-xs">MIYC</div>
                                <div className="text-sm">
                                    <p className="font-semibold text-primary">Masjid Al-Ikhlas</p>
                                    <p className="text-slate-500">Board Member</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
                            <p className="text-slate-600 mb-6 italic">
                                "Thanks to Masjidbox, the Nour mosque in Annemasse has strengthened its digital communication and built loyalty among its regular visitors, while simplifying the management of its events."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-md flex items-center justify-center font-bold text-slate-400 text-xs">NOUR</div>
                                <div className="text-sm">
                                    <p className="font-semibold text-primary">Nour Mosque</p>
                                    <p className="text-slate-500">Administrator</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons (Visual only for now) */}
                        <div className="col-span-2 flex gap-2 mt-4">
                            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-colors">
                                &lt;
                            </button>
                            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-colors">
                                &gt;
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;

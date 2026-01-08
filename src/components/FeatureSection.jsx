import React from 'react';

const FeatureSection = ({
    title,
    highlight,
    description,
    image,
    imagePosition = 'right',
    ctaText = 'Learn more',
    bg = 'white'
}) => {
    return (
        <section className={`py-20 lg:py-28 ${bg === 'light' ? 'bg-slate-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Text Content */}
                    <div className="flex-1 text-left">
                        {/* Small Icon/Category Indicator if needed */}
                        <div className="mb-4">
                            {/* Dynamically render icon based on title? For now simple decorative line */}
                            <div className="w-10 h-1 bg-accent rounded-full mb-6"></div>
                        </div>

                        <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-6">
                            {title} <span className="text-accent">{highlight}</span>
                        </h2>

                        <div className="text-lg text-slate-600 space-y-4 mb-8">
                            {description}
                        </div>

                        <a href="#" className="inline-flex items-center text-accent font-semibold hover:text-emerald-700 transition-colors bg-emerald-50 px-6 py-3 rounded-md">
                            {ctaText}
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 w-full relative">
                        {/* Decorative blob or shape behind image */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-slate-100 opacity-50 blur-3xl -z-10`}></div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                            {/* Check if image URL is provided, otherwise generic placeholder */}
                            {image ? (
                                <img src={image} alt={`${title} feature`} className="w-full h-auto object-cover" />
                            ) : (
                                <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-10">
                                    <span className="text-slate-300 font-bold text-2xl">{title} Visual</span>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureSection;

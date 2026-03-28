import React from 'react';
import banImg from '../../assets/banner.png'
import { FaArrowRightLong } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-[60vh]">
                <div className="hero-content gap-64 flex-col lg:flex-row-reverse">
                    <div>
                        <img className='h-130 w-auto object-contain animate-pulse' src={banImg}/>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <h2 className='border border-red-600 bg-red-100 text-red-600 p-3 rounded-3xl w-50'>✨ Frontier AI Models</h2>
                        </div>
                        <h1 className="text-5xl font-extrabold text-red-600">One Subscription!</h1>
                        <h1 className="text-5xl font-extrabold bg-linear-to-r from-red-400 via-orange-400  to bg-amber-400 bg-clip-text text-transparent">All the AIs You Need</h1>
                        <p className="py-6 text-xl">
                            Experience the full spectrum of frontier intelligence — all the <br /> most advanced AI models, unified under a single, powerful subscription.
                        </p>
                        <button className="btn bg-red-400 hover:bg-red-600 transition-all text-white p-8 rounded-3xl text-2xl">Get Unlimited Access <FaArrowRightLong /></button>
                        <div className='flex items-center gap-8 text-zinc-600'>
                            <small>✓ 50+ Frontier Models</small>
                            <small>✓ No Usage Limits</small>
                            <small>✓ Cancel Anytime</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
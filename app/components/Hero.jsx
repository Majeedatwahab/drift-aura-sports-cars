"use client"
import Link from "next/link";

export default function Hero(){
   
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

            {/* Background Video*/}
            <video className="absolute top-0 left-0 w-full h-full object-cover z-0" 
           autoPlay
            loop
            muted
            playsInline>
                <source src="/assets/trailer-1.mp4" type="video/mp4"/>
                    <source src="/assets/trailer-1.mp4" type="video/ogg"/>
                Your browser does not support the video tag.
            </video>

            
            {/* overlay */}
            <div className="absolute inset-0 bg-black/50 z-10">
            </div>
         
            {/* Navbar */}
            <div className="absolute top-0 left-0 w-full px-6 py-4 z-20 flex items-center justify-center backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-transparent tracking-wide bg-clip-text drop-shadow-lg">
                    Drift Aura
                </h1>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
                    Unleash the Power, <br className="hidden sm:block" />
                    Experience the Drive
                </h1>
                <Link href="#collection">
                    
                        <button className="mt-4 cursor-pointer px-6 py-3 text-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 transition">
                            Explore Our Collections
                        </button>
                   
                </Link>
            </div>
        </section>
    );
}
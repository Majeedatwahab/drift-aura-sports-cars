'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Navigation, Pagination } from 'swiper/modules';

import data from "@/app/data/BestSellers.json";

// Icons
import { FuelIcon as Engine, Gauge, Zap} from "lucide-react"

export default function BestSellers() {
    return (
        <section className="my-16 px-4 md:px-8">
            <h2 className="text-4xl font-extrabold text-center text-white mb-12">
                Our Best Sellers
            </h2>

            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper max-w-md mx-auto" 
            
            >
                {data.BestSellers.map((car, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-[320px] h-[460px] mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105" id='best-sellers'>
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />
                            <div className="p-6 text-white">
                                <h3 className="text-2xl font-bold text-center mb-4">{car.name}</h3>

                                <div className="flex items-center justify-center text-sm text-gray-300 mb-4 space-x-2">
                                    <Engine className="h-5 w-5 text-purple-400" />
                                    <p>{car.engine}</p>
                                </div>

                                <div className="flex justify-between text-sm text-gray-300 mb-4">
                                    <div className="flex items-center space-x-1">
                                        <Gauge className="h-5 w-5 text-blue-400" />
                                        <span>{car.Horsepower} hp</span>
                                    </div>
                                    <div className="flex items-center space-x-1 font-bold">
                                        <Zap className="h-5 w-5 text-yellow-400" />
                                        <span>{car.Torque} lb-ft</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">

                                    <p className="text-xl font-semibold">${car.price}</p>
                                    <button className="px-6 cursor-pointer py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl transform transition duration-300 hover:from-purple-700 hover:to-blue-700">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

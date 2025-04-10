'use client'

import { useState, useEffect } from 'react'
import data from "@/app/data/Collection.json";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination } from 'swiper/modules'
// Icons
import { FuelIcon as Engine, Gauge, Zap } from "lucide-react"
export default function CarCards({ selectedBrand }) {
    const [filteredCars, setFilteredCars] = useState([]);  

    useEffect(() => {
        if (data && Array.isArray(data.Collection)) {
            const filtered = data.Collection.filter(
                (car) => car.brand === selectedBrand
            );
            setFilteredCars(filtered);
        }
    }, [selectedBrand]);


    if (!filteredCars.length) {
        return (
            <div className="text-white text-center p-6">
                <p>No cars found for the selected brand!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
                <div key={car.id} className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="mb-4">
                        {/* Image Carousel */}
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            {car.image.map((img, i) => (
                                <SwiperSlide key={i} className='bg-gray-700 rounded-lg'>
                                    <img
                                        src={img}
                                        alt={`${car.name} ${i + 1}`}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{car.name}</h3>

                    <div className="space-y-2 text-white text-sm">
                        <div className="flex items-center gap-2">
                            <Engine className="h-5 w-5 text-purple-400" />
                            <span className="font-medium">Engine:</span>
                            <span className="font-semibold">{car.engine} lb-ft</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Gauge className="h-5 w-5 text-blue-400" />
                            <span className="font-medium">Horsepower:</span>
                            <span className="font-semibold">{car.horsepower} HP</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-yellow-400" />
                            <span className="font-medium">Torque:</span>
                            <span className="font-semibold">{car.torque} lb-ft</span>
                        </div>
                    </div>

                    <p className="text-xl font-bold text-white mt-4 mb-3">{car.price}</p>

                    <button className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition">
                        Buy Now
                    </button>

                </div>
            ))}
        </div>
    );
}

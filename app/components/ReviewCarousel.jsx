"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import data from "@/app/data/Review.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ReviewCarousel = () => {
    return (
        <section className="w-full py-12 px-4 sm:px-8 lg:px-16 bg-zinc-900 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                What Our Drivers Are Saying
            </h2>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                }}
            >
                {data.Reviews.map(({ id, name,  carPurchased, rating, review, date }) => (
                    <SwiperSlide key={id}>
                        <div className="bg-zinc-800 rounded-2xl p-6 h-full flex flex-col gap-4 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300">

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-zinc-600 to-zinc-800 text-white flex items-center justify-center rounded-full font-semibold text-lg border border-zinc-500">
                                    {name.split(" ").map(n => n[0]).join("")}
                                </div>


                                <div>
                                    <p className="font-semibold text-white">{name}</p>
                                    <p className="text-sm text-zinc-400">{carPurchased}</p>
                                </div>
                            </div>

                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-yellow-400 ${i < rating ? "opacity-100" : "opacity-30"}`}>
                                        ★
                                    </span>
                                ))}
                            </div>

                            <p className="text-zinc-300 text-sm italic">"{review}"</p>
                            <p className="text-xs text-zinc-500 mt-auto">{new Date(date).toDateString()}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ReviewCarousel;

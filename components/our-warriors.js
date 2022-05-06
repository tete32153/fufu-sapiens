import React from "react";
import Image from 'next/image'
import Link from "next/link";

// Import components for Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import styles needed for Swiper
import 'swiper/css';

// import required modules for Swiper
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurWarriorsStyles from './OurWarriorsStyles.module.css'


export default function OurWarriorsSection(){
    return (
        <section className={`text-white pb-5`}>
            <div className={`${OurWarriorsStyles.sectionWrap}`}>

                <div className="reset-next-img text-center mb-5">
                    <Image src='/images/about-section-shield-and-arrows.png' layout='fill' />
                </div>

                <h1 className="text-center mb-5 pb-4">MEET OUR WARRIORS</h1>

                <div className={`${OurWarriorsStyles.sliderWrap}`}>

                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                    delay: -1,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  speed={4000}
                  freeMode={true}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Autoplay, FreeMode, Pagination, Navigation]}
                > 
                <SwiperSlide>
                <div className={`${OurWarriorsStyles.slideItemW}`}>
                    <div className={`${OurWarriorsStyles.slideItem} text-center`}>
                        <div className="warrior-img-wrap reset-next-img mb-4">
                            <Image className={`${OurWarriorsStyles.slideItemImg}`} src='/images/desmond.jpg' layout='fill' />
                        </div>
                        <h3 className="text-white text-uppercase mb-1">Desmond</h3>
                        <h4><Link href={`https://twitter.com/o_lonks?s=11&t=-CNg71vNU6Nb0zq-FCG36g`}><a target='_blank'><span><i className="uil uil-twitter"></i></span>@o_lonks</a></Link></h4>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${OurWarriorsStyles.slideItemW} text-center`}>
                    <div className={`${OurWarriorsStyles.slideItem}`}>
                        <div className="warrior-img-wrap reset-next-img mb-4">
                            <Image className={`${OurWarriorsStyles.slideItemImg}`} src='/images/Max.jpg' layout='fill' />
                        </div>
                        <h3 className="text-white text-uppercase mb-1">Maxhibit</h3>
                        <h4><Link href={`https://twitter.com/mwinnongme?s=11&t=-CNg71vNU6Nb0zq-FCG36g`}><a target='_blank'><span><i className="uil uil-twitter"></i></span>@mwinnongme</a></Link></h4>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${OurWarriorsStyles.slideItemW} text-center`}>
                    <div className={`${OurWarriorsStyles.slideItem}`}>
                     <div className="warrior-img-wrap reset-next-img mb-4">
                            <Image className={`${OurWarriorsStyles.slideItemImg}`} src='/images/Josephina.jpg' layout='fill' />
                        </div>
                        <h3 className="text-white text-uppercase mb-1">Josefeena</h3>
                        <h4><Link href={`https://twitter.com/bankuslayer?s=11&t=-CNg71vNU6Nb0zq-FCG36g`}><a target='_blank'><span><i className="uil uil-twitter"></i></span>@BankuSlayer</a></Link></h4>
                    </div>
                </div>
                </SwiperSlide>
                </Swiper>

                </div>

            </div>
        </section>
    )
}
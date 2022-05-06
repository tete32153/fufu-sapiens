import Image from "next/image"
import Link from "next/link"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

import ShakaCollectionStyles from "./shakaCollectionStyles.module.css"


export default function ShakaCollectionSection(){
    return (
        <section className="text-white text-center mb-5 pb-3 pb-lg-5 pt-5">
            <div className={`${ShakaCollectionStyles.sectionWrap} pt-5`} >


                <div className={`${ShakaCollectionStyles.ourCollectionContentW} pt-lg-5`}>
                    <div className="container-fluid px-0">
                        <div className="row align-items-lg-center g-0">
                            <div className="col-12 col-lg-6 order-lg-2 mb-5 mb-lg-0">

                            <div>
                            <Swiper
                                    effect={"fade"}
                                    speed={1}
                                    autoplay={{
                                      delay: 1600,
                                      disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, EffectFade]}
                                >
                                <SwiperSlide>
                                <div className={`${ShakaCollectionStyles.ourCollectionGravatar} reset-next-img`}>
                                    <Image src="/images/sonia-asare.png" layout="fill" />
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className={`${ShakaCollectionStyles.ourCollectionGravatar} reset-next-img`}>
                                    <Image src="/images/tony-blair.png" layout="fill" />
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className={`${ShakaCollectionStyles.ourCollectionGravatar} reset-next-img`}>
                                    <Image src="/images/mario-james.png" layout="fill" />
                                </div>
                                </SwiperSlide>
                                </Swiper>
                            </div>

                            </div>

                           
                            
                            <div className="col-12 col-lg-6 order-lg-1">
                                <div className={`${ShakaCollectionStyles.ourCollectionContent}`}>
                                <div className={`reset-next-img text-center mb-5 ${ShakaCollectionStyles.ourCollectionContentHeaderImg}`}>
                                    <Image src="/images/about-section-shield-and-arrows.png" layout="fill" />
                                </div>

                                <div className="px-3 mb-5">
                                <h1 className="mb-4">Shaka Collection</h1>

                                <div className="mb-5 px-5">
                                <p className="mb-4 px-lg-5">Shaka Zulu was a legendary king, warrior and ruler of the empire in Zululand or modern-day Eastern South Africa.</p>


                                <p className="mb-0 px-lg-5" >
                                    We wanted our first collection to be Shaka Zulu Inspired because our NFT arts are meant to tell stories of the African culture. By looking at our Art you can tell there&apos;s a story behind it.
                                </p>

                                </div>
                                
                                <Link href="/">
                                    <a className="d-block">
                                        <div className={`${ShakaCollectionStyles.ourCollectionCTA} primary-btn text-uppercase`}>
                                            <img src="/images/btn-bg.png" />
                                            <p className="mb-0 link text-white" >Mint</p>
                                        </div>
                                    </a>
                                </Link>

                                </div>

                                <div className="reset-next-img pe-5 pe-lg-0 pt-4" >
                                
                                    <Image src="/images/our-collection-section-left-pattern.png" layout="fill" />
                                
                                </div>
                                
                                </div>
                            </div>

                           
                        </div>

                    </div>

                </div>
            
            </div>
        </section>
    )
}
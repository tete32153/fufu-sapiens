import Link from 'next/link';
import { ParallaxBanner } from 'react-scroll-parallax';
import LandingStyles from './landingStyles.module.css'

export default function LandingPage(){
    return (
        <section>
            <div className={`${LandingStyles.parallaxWrap} mb-5 pt-4 pt-lg-0`}>

            <ParallaxBanner
                layers={[
                    { image: '/images/landing-page-bg.jpg', speed: -20 },
                ]}
                className={`${LandingStyles.landingPgParallax} d-flex align-items-center d-lg-block`}>

                <div className={`${LandingStyles.parallaxContent} position-relative`}>
                    <div className='row g-0 h-100'>

                        <div className='col-2 col-lg-3 h-100'>
                            <div className='reset-next-img lpg-left-spear d-flex align-items-center align-items-lg-end h-100'>
                                <img className='img-fluid position-relative' src='/images/landing-page-left-spear.png' />
                            </div>
                        </div>

                        <div className='col-8 col-lg-6 h-100'>
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <div className='position-relative' style={{top: '-50px'}}>
                                <h1 className='text-uppercase mb-5'>Community driven nfts inspired by african art and culture</h1>
                                <Link href='/'>
                                    <a className='d-block'>
                                    <div className={`${LandingStyles.ourCollectionCTA} primary-btn text-uppercase`}>
                                        <img src='/images/btn-bg.png' />
                                        <p className='mb-0 link text-white'>Mint</p>
                                    </div>
                                    </a>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-2 col-lg-3 h-100'>
                            <div className='reset-next-img lpg-right-spear d-flex align-items-center align-items-lg-end h-100'>
                            <img className='img-fluid position-relative ms-auto' src='/images/landing-page-right-spear.png' />
                            </div>
                        </div>

                    </div>
                </div>

                </ParallaxBanner>
           
            </div>
        </section>
    )
}
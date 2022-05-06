import Image from "next/image"
import AboutSectionStyles from './aboutSectionStyles.module.css'

export default function AboutSection(){

    return (<section className="text-white text-center mb-5 mb-lg-0">
    <div className={`${AboutSectionStyles.sectionWrap} pt-5`} style={{background: "url('/images/about-collection-bg - Copy.png')"}}>

    <div className="reset-next-img text-center mb-5 section-icon">
            <Image src='/images/about-section-shield-and-arrows.png' layout='fill' />
        </div>

        <h1 className="text-center mb-5 text-white px-2 px-lg-0">ABOUT FUFU SAPIENs</h1>
        

        <div className="container-fluid px-0 mb-5 mb-lg-5">
            <div className="row g-lg-4 mx-0 pt-5">
                <div className="col-2 col-lg-3 text-white ps-0">
                    <div className={`position-relative h-100 ${AboutSectionStyles.patternWrap} ${AboutSectionStyles.left}`} >
                        <Image className="" src='/images/about-section-left-pattern.png' layout='fill' />
                    </div>
                </div>
                <div className="col-8 col-lg-6 text-white px-lg-5">
                    <div className={`${AboutSectionStyles.videoWrap} d-flex align-items-center justify-content-center`}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DMt3k06P_2A?modestbranding=1&amp;iv_load_policy=0&amp;rel=0" title="About Fufu Sapiens" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="col-2 col-lg-3 text-white pe-0">
                    <div className={`position-relative h-100 ${AboutSectionStyles.patternWrap} ${AboutSectionStyles.right}`} >
                        <Image className="" src='/images/about-section-right-pattern.png' layout='fill' />
                    </div>
                </div>
            </div>
        </div>

        <div className={`${AboutSectionStyles.mainAboutContentW} mb-5`}>
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-2 col-lg-3'>
                        <div className='reset-next-img'>
                            <Image className='img-fluid about-section-torch' src='/images/torch.png' layout='fill' alt='Torch light' />
                        </div>
                    </div>
                    <div className='col-8 col-lg-6'>
                        <div className={`text-center ${AboutSectionStyles.mainAboutContent}`}>
                            <p className='mb-3 mb-lg-3 pt-0'>
                            Fufu Sapiens is a women-led and community-driven NFT project. </p>
                            <p className='mb-3 mb-lg-3 pt-0'>
                            Our team is committed to bringing African culture forward and creating a platform that showcases art and talent. Part of our collection incorporates 2D illustration along with photography done by talent from areas that are often overlooked. 
                            </p>
                            <p className='mb-0 pt-0'>
                            Our mint price is 0.015 ETH;  5% of the proceeds will be donated to a school in Africa to educate the youth about web3 and Blockchain technology.

                            </p>
                        </div>
                    </div>
                    <div className='col-2 col-lg-3'>
                        <div className='reset-next-img'>
                            <Image className='img-fluid about-section-torch' src='/images/torch.png' layout='fill' alt='Torch light' />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    
    </div>
</section>
    )
}
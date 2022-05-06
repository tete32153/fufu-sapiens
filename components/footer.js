import { useState } from 'react';
import Image from 'next/image';
import headerStyles from './headerStyles.module.css'
import FooterStyles from './footer.module.css'
import Faqs from './faqs';
import faqsPgStyles from "./faqs.module.css"

const faqs = [
    {
        id: 1,
        question: 'What is an NFT?',
        answer: 'A non-fungible token is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded. Types of NFT data units may be associated with digital files such as photos, videos, and audio.'
    },
    {
        id: 2,
        question: 'What is Fufu Sapiens?',
        answer: 'A community driven and female-led NFT art project that is focused on showcasing art and talent from areas that are often overlooked.'
    },
    {
        id: 3,
        question: 'What will be the mint price?',
        answer: 'Fufu Sapiens NFT will be minting for 0.015ETH.'
    },
    {
        id: 4,
        question: 'What is Fufu?',
        answer: 'Fufu is a type of food that is a dough-like food that is consumed in Africa. We named this project Fufu because Fufu is not just a food that is eaten but it is also a sign of Unity.'
    },
    {
        id: 5,
        question: 'How to mint?',
        answer: 'After you have purchased ETH send it your metamask and connect your wallet to Fufu Sapiens official website, click on mint and confirm this transaction in your wallet.'
    }
]

export default function Footer(){
    

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

    return (        
    <footer>
        <section className={`${FooterStyles.wrap} d-flex flex-column px-4 px-lg-5 pb-5 pt-5`} style={{background: "url(/images/footer-bg-alt.png)",minHeight: '100vh'}}>

            <div className='container py-5'>

            <div className="reset-next-img text-center mb-5">
                    <Image src='/images/about-section-shield-and-arrows.png' layout='fill' />
                </div>

                <h1 className="text-center mb-5 text-white px-2 px-lg-0">FAQS</h1>

                <div className=''>
                <img className='d-block img-fluid' src='/images/top-nav-img.png' />
                </div>

                <Faqs />                
            
            </div>

            <div className='container-fluid mt-auto pb-lg-5 pt-5'>

                <div className='row align-items-end'>

                    <div className='col-12 col-lg-4 mb-5 mb-lg-0 order-lg-1'>
                        <div className={`${FooterStyles.footerLogoW}`}>

                            <div className='d-flex justify-content-between align-items-center'>
                                <div className={`${FooterStyles.footerLogo} text-white`}>
                                    <img className='img-fluid' src='/images/fufu-sapiens-logo.png' alt='Fufu Sapiens footer logo' />
                                </div>
                                <div className={`${FooterStyles.scrollUp} text-white d-lg-none`}>
                                    <span className='pointer' onClick={()=>scrollToTop()}><i className="fa-solid fa-play"></i></span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 col-lg-4 order-lg-3 mb-5 mb-lg-0'>

                        <div className={`${FooterStyles.socialHandlesW} text-lg-end`}>

                            <h3 className='text-white mb-2 mb-lg-3'>JOIN the <br/>COMMUNITY</h3>

                            <div className={`${headerStyles.socialHandles} `}>
                                <a href='https://discord.gg/Ph94pshdJu' target='_blank' rel="noreferrer" className='me-1 text-white'><i className="fa-brands fa-discord"></i></a>
                                <a href='https://instagram.com/fufusapiens' target='_blank' rel="noreferrer" className='me-2 text-white'><i className="uil uil-instagram"></i></a>
                                <a href='https://www.youtube.com/channel/UCKBOFcpIWWSyC8zHZaRrYUQ' target='_blank' rel="noreferrer" className='me-2 text-white'><i className="uil uil-youtube"></i></a>
                                <a href='https://twitter.com/FufuSapiens' target='_blank' rel="noreferrer" className='text-white'><i className="uil uil-twitter"></i></a>
                                <a href='https://t.me/fufusapeins' target='_blank' rel="noreferrer" className='text-white'><i className="uil uil-telegram-alt"></i></a>
                            </div>

                        </div>

                    </div>

                    <div className='col-12 col-lg-4 order-lg-2'>
                        <div className={`${FooterStyles.copyrightW}`} >
                            <p className='mb-0 text-white'>© 2022. FUFU SAPIENS. all rights reserved.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    </footer>
    )
}
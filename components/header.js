import Image from 'next/image'
import Link from 'next/link';
import { useContext } from 'react';
import headerStyles from './headerStyles.module.css'

import { AppContext } from './utils/appContext';

export default function Header(){

    const {handleConnectModal} = useContext(AppContext)

    return (
        <header>
        <div className={`${headerStyles.topHeader} text-white reset-next-img`}>
        <img className='d-block img-fluid' src='/images/top-nav-img.png' />
        </div>
        <nav className='bg-black px-3 px-lg-5 py-3 pb-3 py-lg-4'>
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-12 col-lg-auto ms-lg-auto order-lg-2 text-center text-white mb-3 mb-lg-0'>
                        <div className={`${headerStyles.socialHandles} `}>
                            <a href='https://discord.gg/Ph94pshdJu' target='_blank' rel="noreferrer" className='me-1'><i className="fa-brands fa-discord"></i></a>
                            <a href='https://instagram.com/fufusapiens' target='_blank' rel="noreferrer" className='me-2'><i className="uil uil-instagram"></i></a>
                            <a href='https://www.youtube.com/channel/UCKBOFcpIWWSyC8zHZaRrYUQ' target='_blank' rel="noreferrer" className='me-2'><i className="uil uil-youtube"></i></a>
                            <a href='https://twitter.com/FufuSapiens' target='_blank' rel="noreferrer" className='me-1'><i className="uil uil-twitter"></i></a>
                            <a href='https://t.me/fufusapeins' target='_blank' rel="noreferrer" className='me-lg-4'><i className="uil uil-telegram-alt"></i></a>
                        </div>                        
                    </div>
                    <div className='col-6 col-lg-auto order-lg-1 text-white'>
                        <Link href='/' >
                            <a className={`${headerStyles.brandLogo}`}>
                            <Image src='/images/fufu-sapiens-logo.png' width='180' height='181' />
                            </a>
                        </Link>
                    </div>
                    <div className='col-6 col-lg-auto order-lg-3 text-white text-end'>
                        <div className={`${headerStyles.CTA} primary-btn text-uppercase pointer`} onClick={()=>{handleConnectModal('open')}}>
                            <img src='/images/btn-bg.png' />
                            <p className='mb-0 link'>Connect Wallet</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </header>
    )
}
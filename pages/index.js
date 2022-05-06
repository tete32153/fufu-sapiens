import Head from 'next/head'
import { useState } from 'react'
import { AppContext } from '../components/utils/appContext'
import Header from '../components/header'
import LandingPage from '../components/landing'
import ShakaCollectionSection from '../components/shaka-collection'
import AboutSection from '../components/about-section'
import OurWarriorsSection from '../components/our-warriors'
import Footer from '../components/footer'
import ConnectModal from '../components/connect-modal'

export default function Home() {
  const [showConnectModal, setShowConnectModal] = useState(false)

  const handleConnectModal = (action)=>{

    if(action === "open"){

      setShowConnectModal(true)
      document.body.classList.add('modal-open');

    } else if(action === "close") {

      setShowConnectModal(false)
      document.body.classList.remove('modal-open');

    }

    
  }
  return (
    <>
    <Head>
      <title>Fufu Sapiens</title>
      <meta name="description" content="Community driven nfts inspired by african art and culture" />
      <meta name="author" content="Fufu Sapiens"></meta>

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />


      <meta property="og:title" content="Fufu Sapiens" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.fufusapiens.com" />
      <meta property="og:description" content="Community driven nfts inspired by african art and culture" />
      <meta property="og:image" content="/images/top-nav-img.png" />


    </Head>
    <AppContext.Provider value={{showConnectModal, setShowConnectModal, handleConnectModal}}>

    {showConnectModal && <ConnectModal /> } 

    <Header />

    <main>

      <LandingPage />
      <ShakaCollectionSection />
      <AboutSection />
      <OurWarriorsSection />
    </main>

    <Footer />

    </AppContext.Provider>
    </>
  )
}

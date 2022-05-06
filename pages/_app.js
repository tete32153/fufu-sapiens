import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import Layout from '../components/layout'
import { ParallaxProvider } from 'react-scroll-parallax';

import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);

  return <>
  <ParallaxProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ParallaxProvider>
  </>
}

export default MyApp

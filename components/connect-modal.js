import { useContext } from 'react';
import { AppContext } from './utils/appContext';
import ConnectModalStyles from './connect-modal.module.css'

export default function ConnectModal(){

    const {handleConnectModal} = useContext(AppContext)

    return (
        <div className={`position-fixed d-flex align-items-center justify-content-center p-4 ${ConnectModalStyles.wrap}`} >
            <div className='pseudoClose' onClick={()=>{handleConnectModal('close')}}></div>

            <div className={`${ConnectModalStyles.content} pb-5`} >
                <div className='modal-content-header-img'><img className='d-block img-fluid' src='/images/modal-content-header-img.png' /></div>
                <div className='modal-close-btn text-end py-3 px-4'><span className='d-inline-flex align-items-center justify-content-center' onClick={()=>{handleConnectModal('close')}}><i className="fa-solid fa-xmark"></i></span></div>
                
                <div className='px-4'>
                <h2 className='text-white mb-3'>CONNECT WALLET</h2>

                <div className='tnc-w d-flex align-items-center mb-4'>
                <input type='checkbox' id='tnc' name='tnc' className='d-none' />
                <span className='me-2'></span>
                <label htmlFor='tnc' className='text-white mb-0'>I agree to the Terms & Conditions and Privacy Policy.</label>
                </div>

                <div className='connect-modal-footer d-flex align-items-center pt-3'>

                    <div className='footer-gravatar text-white me-3'>
                        <img className='img-fluid' src='/images/connect-modal-footer-gravatar.png' />
                    </div>

                    <h5 className='mb-0 text-white'>METAMASK</h5>

                </div>

                </div>
            
            </div>
        </div>
    )
}
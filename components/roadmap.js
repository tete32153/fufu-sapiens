import React from "react";
import Image from 'next/image'

import RoadmapStyles from './roadmapStyles.module.css';

export default function OurWarriorsSection(){
    return (   

        <section className={`text-white pb-5`}>
            <div className={`${RoadmapStyles.sectionWrap}`}>
                <div className="reset-next-img text-center mb-5">
                    <Image src='/images/about-section-shield-and-arrows.png' layout='fill' />
                </div>

                <h1 className="text-center mb-5 pb-4 ">ROADMAP</h1>

                <div className="mb-5 px-5">
                    <p className="mb-4 px-lg-5">By supporting the project, you unlock future relevant utilities in addition to your NFTs. The
                        timeline of execution will be based on the support we receive on the project.
                    </p>

                    <h3 className="text-left mb-4 px-lg-5 ">EDUCATION</h3>
                    <p className="mb-4 px-lg-5">Exclusive to our NFT holders via Fufu Sapiens discord server or website. All in real life events will
                        be on a first come first serve basis.
                    </p>
                    <div  className={`${RoadmapStyles.listWrap}`} style={{paddingLeft:'100px'}}>
                         <ul class="mb-4" >
                        <li>Access to free web3 education</li>
                        <li>Digital art lessons</li>
                        <li>Mentorship</li>
                        <li>Career coaching</li>
                        <li>Guidance for job placements</li>
                        <li>Web3 networking opportunities</li>
                        <ul class="mb-4" style={{paddingLeft:'50px'}}>
                        <li>Through conferences that are organized by the Fufu Sapiens. QR code will be
                            airdropped to <br/>our NFT Holders which will act as tickets to our events.</li>
                        </ul>
                        <li>Guidance on building web3 network</li>
                        <li>Advisory on how to launch your own NFT/web3 project</li>
        
                    </ul>
                    </div>

                    <h3 className="text-left mb-4 px-lg-5 ">CHARITY</h3>
                        <div  className={`${RoadmapStyles.listWrap}`} style={{paddingLeft:'100px'}}>
                            <ul class="mb-4" >
                            <li>5% of all mint proceeds will go to a school in Africa to teach the youth about web3</li>
                            </ul>

                        </div>

                    <h3 className="text-left mb-4 px-lg-5 ">MERCH</h3>
                    <p className="mb-4 px-lg-5">Exclusive to our NFT holders via Fufu Sapiens website, this will be on a first come first serve basis
                    </p>

                    <div  className={`${RoadmapStyles.listWrap}`} style={{paddingLeft:'100px'}}>
                            <ul class="mb-4" >
                            <li>Access to purchase Fufu Sapiens merch at a discount</li>
                                <ul class="mb-4" style={{paddingLeft:'50px'}}>
                                    <li>Fufu Sapiens Merch will be available on the Fufu
                                        Sapiens website.<br/> Our NFT holders will be
                                        airdropped a one-time passcode to their wallet
                                        address <br/>which they can use to redeem Fufu Merch
                                        at a discounted price
                                    </li>
                                    <li>Access to digital versions of Merch, which could be
                                        used in the metaverse
                                    </li>
                                </ul>
                            </ul>
                           

                        </div>

                    <h3 className="text-left mb-4 px-lg-5 ">CLUB</h3>
                    <p className="mb-4 px-lg-5">Exclusive to our NFT holders via Fufu Sapiens website, this will be on a first come first serve basis</p>
                    <div  className={`${RoadmapStyles.listWrap}`} style={{paddingLeft:'100px'}}>
                            <ul class="mb-4" >
                            <li>Access to real-life events organized by Fufu Sapiens</li>
                                {/* <ul class="mb-4" style={{paddingLeft:'50px'}}>
                                    <li>Fufu Sapiens Merch will be available on the Fufu
                                        Sapiens website.<br/> Our NFT holders will be
                                        airdropped a one-time passcode to their wallet
                                        address <br/>which they can use to redeem Fufu Merch
                                        at a discounted price
                                    </li>
                                   
                                </ul> */}
                                <li>Access to discounted or free internet data bundles</li>
                                <li>Access to Fufu Sapiens in a real-life members-only club</li>
                            </ul>
                    </div>
                    <h3 className="text-left mb-4 px-lg-5 ">Fufu Governance Token Airdrop.</h3>  
                        <div  className={`${RoadmapStyles.listWrap}`} style={{paddingLeft:'100px'}}>
                            <ul class="mb-4" >
                            <li>A snapshot will be taken and FufuDao tokens will be airdropped to all of our NFT holders</li>
                            <li>FufuCoin will be an ERC-20 governance and utility tokenused within the Fufu ecosystem <br/> to incentivise community-building activities.</li>
                            </ul>

                        </div>

                </div>

            </div>

        </section>

     )
}

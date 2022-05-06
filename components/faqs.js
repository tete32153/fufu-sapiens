import { useState } from "react"
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

export default function Faqs(){
    const [showFaq, setShowFaq] = useState({show: false,item:''})

    const handleFaqClick = (itemId)=>{

      if(showFaq.item == itemId){
          if(showFaq.show === false){
          setShowFaq({show:true,item:itemId})
          } else {
              setShowFaq({show:false,item:''})
          }
      } else {
          setShowFaq({show:true,item:itemId})
      }
  
      }

    return (

        <div className={`${faqsPgStyles.faqsListW} mb-5 pb-5`} >
                <div className={`${faqsPgStyles.faqsList}`}>

                        {
                            faqs.length ? (
                                    <>
                                {faqs.map(faq=>{
                                    const {id,question,answer} = faq
                                    return ( 
                                        <div key={id} id={`faq_id_${id}`} className={`${faqsPgStyles.faqsItem} pointer py-4 ${(showFaq.show && showFaq.item == `faq_id_${id}`) && `${faqsPgStyles.activeFaq}` }`} onClick={()=>handleFaqClick(`faq_id_${id}`)}>
                                            <h2 className="mb-0 d-flex align-items-center justify-content-between">{question} <span className="material-icons text-white">add</span></h2>
                                            <div className={`${faqsPgStyles.faqsItemAnswer} ${(showFaq.show && showFaq.item == `faq_id_${id}`) ? 'pt-3 d-block' : 'd-none'}`}>
                                            {answer}
                                            </div>
                                        </div>
                                    )
                                })}

                                    </>

                            ) : 'No FAQs today'
                        }

                        </div>
                </div>

    )
}
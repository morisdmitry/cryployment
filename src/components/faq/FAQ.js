import "./FAQ.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { useMediaQuery } from "react-responsive";

export const Faq = () => {
  const { t } = useTranslation();


  const DefaultFaq = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileFaq = useMediaQuery({ query: "(max-width: 428px)" });

  const demo = false
  const isActive = false


  const [switchSign, setSwitchSign] = useState(false);
  const [num, setNum] = useState(null);



  const toggle = (number) => {

    if(num !== null && number !==num){
        setSwitchSign(true);
        setNum(number);
    }else{
        setSwitchSign(!switchSign);
        if(number === num){
            setNum(null);
        }
        else{
            setNum(number);
        }
    }

    
    
  };

  console.log('switchSign', switchSign)
  console.log('num', num)
  return (
    <>
      {MobileFaq && (
        
        
        <div className="block-6-mobile">
        <div className="block6-wrapper-mobile">
            <div className="block6-header-wrapper-mobile">
            <span className="header6-mobile">{t("block5-header1")}</span>
            </div>

            <div className="block6-text-wrapper-mobile">
            <div className="faq-el-mobile">
                <div className="faq-text-block-mobile">
                    <span className="faq-text-mobile">{t("block5-question1")}</span>
                    <div className="faq-text-swich-mobile" onClick={() => toggle(1)}>
                        <div className= {switchSign  & num === 1 ? "plus-mobile" : "minus-mobile"}>
                        </div>
                    </div>
                </div>
                <div className={`faq-answer-mobile ${num === 1? "dis-block" : "dis-none"}`}>{t("block5-question1")} </div>
            <div className="faq-line-mobile"></div>
            </div>

            <div className="faq-el-mobile">
                <div className="faq-text-block-mobile">
                    <span className="faq-text-mobile">{t("block5-question2")}</span>
                    <div className="faq-text-swich-mobile" onClick={() => toggle(2)}>
                        <div className= {switchSign  & num === 2 ? "plus-mobile" : "minus-mobile"}>
                        </div>
                    </div>
                </div>
                <div className={`faq-answer-mobile ${num === 2 ? "dis-block" : "dis-none"}`}>{t("block5-question1")} </div>
            <div className="faq-line-mobile"></div>
            </div>



            <div className="faq-el-mobile">
                <div className="faq-text-block-mobile">
                    <span className="faq-text-mobile">{t("block5-question3")}</span>
                    <div className="faq-text-swich-mobile" onClick={() => toggle(3)}>
                        <div className= {switchSign  & num === 3 ? "plus-mobile" : "minus-mobile"}>
                        </div>
                    </div>
                </div>
                <div className={`faq-answer-mobile ${num === 3 ? "dis-block" : "dis-none"}`}>{t("block5-question3")} </div>
            <div className="faq-line-mobile"></div>
            </div>

            <div className="faq-el-mobile">
                <div className="faq-text-block-mobile">
                    <span className="faq-text-mobile">{t("block5-question4")}</span>
                    <div className="faq-text-swich-mobile" onClick={() => toggle(4)}>
                        <div className= {switchSign  & num === 4 ? "plus-mobile" : "minus-mobile"}>
                        </div>
                    </div>
                </div>
                <div className={`faq-answer-mobile ${num === 4 ? "dis-block" : "dis-none"}`}>{t("block5-question4")} </div>
            <div className="faq-line-mobile"></div>
            </div>

            <div className="faq-el-mobile">
                <div className="faq-text-block-mobile">
                    <span className="faq-text-mobile">{t("block5-question5")}</span>
                    <div className="faq-text-swich-mobile" onClick={() => toggle(5)}>
                        <div className= {switchSign  & num === 5 ? "plus-mobile" : "minus-mobile"}>
                        </div>
                    </div>
                </div>
                <div className={`faq-answer-mobile ${num === 5 ? "dis-block" : "dis-none"}`}>{t("block5-question5")} </div>

            </div>



            

            
            

            
            
            </div>

        </div>
        </div>


      )}
      {DefaultFaq && (


        <div className="block-6">
        <div className="block6-wrapper">
            <div className="block6-header-wrapper">
            <span className="header6-mobile">{t("block5-header1")}</span>
            </div>

            <div className="block6-text-wrapper">
            <div className="faq-el">
                <div className="faq-text-block">
                    <span className="faq-text">{t("block5-question1")}</span>
                    <div className="faq-text-swich" onClick={() => toggle(1)}>
                        <div className= {switchSign  & num === 1 ? "plus" : "minus"}>
                        </div>
                    </div>
                </div>
                <div className={`faq-answer ${num === 1? "dis-block" : "dis-none"}`}>{t("block5-question1")} </div>
            <div className="faq-line"></div>
            </div>
            <div className="faq-el">
                <div className="faq-text-block">
                    <span className="faq-text">{t("block5-question2")}</span>
                    <div className="faq-text-swich" onClick={() => toggle(2)}>
                        <div className= {switchSign && num === 2 ? "plus" : "minus"}>
                        
                        </div>
                    </div>
                </div>
                <div className={`faq-answer ${num === 2? "dis-block" : "dis-none"}`}>{t("block5-question1")} </div>
            <div className="faq-line"></div>
            </div>
            
            <div className="faq-el">
                <div className="faq-text-block">
                    <span className="faq-text">{t("block5-question3")}</span>
                    <div className="faq-text-swich" onClick={() => toggle(3)}>
                        <div className= {switchSign  & num === 3 ? "plus" : "minus"}>
                        </div>
                    </div>
                </div>
                <div className={`faq-answer ${num === 3? "dis-block" : "dis-none"}`}>{t("block5-question1")} </div>
            <div className="faq-line"></div>
            </div>
            
            <div className="faq-el">
                <div className="faq-text-block">
                    <span className="faq-text">{t("block5-question4")}</span>
                    <div className="faq-text-swich" onClick={() => toggle(4)}>
                        <div className= {switchSign  & num === 5 ? "plus" : "minus"}>
                        </div>
                    </div>
                </div>
                <div className={`faq-answer ${num === 4 ? "dis-block" : "dis-none"}`}>{t("block5-question1")} </div>
            <div className="faq-line"></div>
            </div>
            
            <div className="faq-el">
                <div className="faq-text-block">
                    <span className="faq-text">{t("block5-question5")}</span>
                    <div className="faq-text-swich" onClick={() => toggle(5)}>
                        <div className= {switchSign  & num === 5 ? "plus" : "minus"}>
                        </div>
                    </div>
                </div>
                <div className={`faq-answer ${num === 5? "dis-block" : "dis-none"}`}>{t("block5-question1")} </div>
            </div>
            
            
            </div>

        </div>
        </div>



      )}
    </>
  );
};




























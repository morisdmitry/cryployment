import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "./IntroPage.css";
import { DemoButton } from "../demo-button/DemoButton";
import { Faq } from "../faq/FAQ";
import { useMediaQuery } from "react-responsive";
import { Popup } from "../Popup/Popup";
import { useSelector, useDispatch } from "react-redux";
import {
  showPopupAsync,
  hidePopupAsync,
} from "../../redux/actions";

export const IntroPage = () => {
  const DefaultIntroPage = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileIntroPage = useMediaQuery({ query: "(max-width: 428px)" });

  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const lang = i18n.language;

  const isActive = useSelector((state) => state.isActive);
  const demo = useSelector((state) => state.demo);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('state', state)
  
  
  return (
    <>
      {MobileIntroPage && (
        <div className="intro-page-mobile">

          <div
            className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
          {isActive === "visible" || "animate" ? <Popup /> : null}


          <div className="block-2-mobile">
            <div className="statistics-mobile">

              <div className="team-engagement-mobile">

              <div className="team-engagement-img-mobile"></div>
                <div className="team-engagement-wrapper-mobile">
                  <span className="header-mobile">{t("block1-header1")}</span>
                  <span className="header-text-mobile">
                  {t("block1-header2")}
                  </span>

                  <DemoButton
                  handlePopup={() => dispatch(showPopupAsync())}
                />
                </div>
              </div>

            </div>
          </div>






          <div className="block-3-mobile">
            <div className="layout">
              <div className="higher-engagment-mobile">
                <div className="higher-engagment-wrapper-mobile">
                  <div className="header-mobile">
                  {t("block2-header1")}
                  </div>
                  <div className="header-text-mobile">
                  {t("block2-header2")}
                  </div>
                </div>

                <div className="indicators-mobile">
                  <div className="indicators-turnover-mobile">
                    <div className="flag-uae-mobile"></div>
                    <span className="el-header-mobile">{t("block2-el1-header")}</span>
                    <span className="el-text-mobile">{t("block2-el1-text")}</span>
                  </div>
                </div>

                <div className="indicators-mobile">
                  <div className="indicators-turnover-mobile">
                    <div className="flag-rus-mobile"></div>
                    <span className="el-header-mobile">{t("block2-el2-header")}</span>
                    <span className="el-text-mobile">{t("block2-el2-text")}</span>
                  </div>
                </div>

                <div className="indicators-mobile">
                  <div className="indicators-turnover-mobile">
                    <div className="flag-person-mobile"></div>
                    <span className="el-header-mobile">{t("block2-el3-header")}</span>
                    <span className="el-text-mobile">{t("block2-el3-text")}</span>
                  </div>
                </div>

                
              </div>
            </div>
          </div>



          <div className="block-4-mobile">
            <div className="block4-wrapper-mobile">
              <div className="higher-engagment-mobile">
                <div className="team-engagement-wrapper-mobile">
                  <span className="header-mobile mb25">{t("block3-header1")}</span>
                </div>

                <div className="team-engagement-wrapper-mobile">
                  <div className="flexibility-el-mobile">
                    <div className="flex-img-wrapper-mobile">
                      <span className="flex-el-img flex-figure1-mobile"></span>
                      <span className="flex-el-num-mobile">01</span>
                    </div>
                    <div className="flex-text-wrapper-mobile">
                      <span className="flex-el-header-mobile">{t("block3-el1-header")}</span>
                      <span className="flex-el-text-mobile">{t("block3-el1-text")}</span>
                    </div>

                  </div>

                  <div className="flexibility-el-mobile">
                    <div className="flex-img-wrapper-mobile">
                      <span className="flex-el-img flex-figure2-mobile"></span>
                      <span className="flex-el-num-mobile">02</span>
                    </div>
                    <div className="flex-text-wrapper-mobile">
                      <span className="flex-el-header-mobile">{t("block3-el2-header")}</span>
                      <span className="flex-el-text-mobile">{t("block3-el2-text")}</span>
                    </div>

                  </div>

                  <div className="flexibility-el-mobile">
                    <div className="flex-img-wrapper-mobile">
                      <span className="flex-el-img flex-figure3-mobile"></span>
                      <span className="flex-el-num-mobile">03</span>
                    </div>
                    <div className="flex-text-wrapper-mobile">
                      <span className="flex-el-header-mobile">{t("block3-el2-header")}</span>
                      <span className="flex-el-text-mobile">{t("block3-el2-text")}</span>
                    </div>

                  </div>



                </div>
              </div>

            </div>
          </div>


          <div className="block-5-mobile">
            <div className="block5-wrapper-mobile">



            <div className="higher-engagment-mobile">

              <div className="team-engagement-wrapper-mobile">
                    <span className="header5-mobile">{t("block4-header1")}</span>
              </div>


              <div className="higher-wrapper-mobile">

              <div className="steps-mobile">
               

               <div className="steps-el-mobile">
                   
                   <div className="steps-text-wrapper-mobile">
                     <span className="steps-el-header-mobile">Cryplo(Payroll)</span>

                     <ul className="steps-ul-mobile">
                       <li>{t("block4-el1-text1")}</li>
                       <li>{t("block4-el1-text2")}</li>
                     </ul>
                   </div>

                 </div>
                 
                 <div className="steps-el-mobile">
                   
                   <div className="steps-text-wrapper-mobile">
                     <span className="steps-el-header-mobile">Crypto(outstaff)</span>

                     <ul className="steps-ul-mobile">
                       <li>{t("block4-el2-text1")}</li>
                       <li>{t("block4-el2-text2")}</li>
                     </ul>
                   </div>

                 </div>




                 <div className="steps-el-mobile">
                   
                   <div className="steps-text-wrapper-mobile">
                     <span className="steps-el-header-mobile">Crypto(outsource)</span>
                     <ul className="steps-ul-mobile">
                       <li>{t("block4-el3-text1")}</li>
                       <li>{t("block4-el3-text2")}</li>
                     </ul>
                   </div>

                 </div>

                 <div className="steps-el-mobile">
                   
                   <div className="steps-text-wrapper-mobile">
                     <span className="steps-el-header-mobile">Crypto(reverse outsource)</span>
                     <ul className="steps-ul-mobile">
                       <li>{t("block4-el4-text1")}</li>
                       <li>{t("block4-el4-text2")}</li>
                       <li>{t("block4-el4-text3")}</li>
                     </ul>
                   </div>

                 </div>
                
              
                
                
             </div>

             <div className="line-bottom-mobile" >
               <div className="header-line-mobile">budget savings</div>
               <div className="left-romb-mobile"></div>
               <div className="line-middle-mobile"></div>
               <div className="right-romb-mobile"></div>

               <div className="left-percent-mobile">-5%</div>
               <div className="right-percent-mobile">-20%</div>
             </div>

              </div>





              
            </div>




            </div>
          </div>


          <Faq/>






          <div className="block-footer-mobile">
            <div className="block-footer-wrapper-mobile">
              <div className="block-footer-content-mobile">
                <div className="footer-engagement-wrapper-mobile">
                  <span className="header-footer-mobile">{t("block-footer-header")}</span>
                </div>
                <DemoButton
                  handlePopup={() => dispatch(showPopupAsync())}
                />
              </div>

            </div>
          </div>












        </div>
      )}

      {DefaultIntroPage && (
        <div className="intro-page">

          <div
            className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
            
          ></div>
          {isActive === "visible" || "animate" ? <Popup /> : null}



          <div className="block-2">
            <div className="statistics">

              <div className="team-engagement">

                <div className="team-engagement-wrapper">
                  <span className="team-engagement-procent">{t("block1-header1")}</span>
                  <span className="team-engagement-text">
                  {t("block2-header2")}
                  </span>

                  <DemoButton
                  handlePopup={() => dispatch(showPopupAsync())}
                />
                </div>
                <div className="team-engagement-img"></div>
              </div>

            </div>
          </div>
          
          <div className="block-3">
            <div className="layout">
              <div className="higher-engagment">
                <div className="higher-engagment-wrapper">
                  <div className="higher-engagment-header">
                    {t("block2-header1")}
                  </div>
                  <div className="higher-engagment-subheader">
                    {t("block2-header2")}
                  </div>
                </div>
                <div className="indicators">
                  <div className="indicators-turnover">
                    <div className="flag-uae"></div>
                    <span className="el-header">{t("block2-el1-header")}</span>
                    <span className="el-text">{t("block2-el1-text")}</span>
                  </div>
                  <div className="indicators-turnover">
                    <div className="flag-rus"></div>
                    <span className="el-header">{t("block2-el2-header")}</span>
                    <span className="el-text">{t("block2-el2-text")}</span>
                  </div>
                </div>
                <div className="indicators">
                <div className="indicators-turnover">
                    <div className="flag-person"></div>
                    <span className="el-header2">{t("block2-el3-header")}</span>
                    <span className="el-text">{t("block2-el3-text")}</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>




          <div className="block-4">
            <div className="block4-wrapper">
              <div className="feature-flexibility">
                <div className="team-engagement-wrapper">
                  <span className="team-engagement-procent">{t("block3-header1")}</span>
                </div>

                <div className="team-engagement-wrapper">
                  <div className="flexibility-el">
                    <div className="flex-img-wrapper">
                      <span className="flex-el-img flex-figure1"></span>
                      <span className="flex-el-num">01</span>
                    </div>
                    <div className="flex-text-wrapper">
                      <span className="flex-el-header">{t("block3-el1-header")}</span>
                      <span className="flex-el-text">{t("block3-el1-text")}</span>
                    </div>

                  </div>
                  <div className="flexibility-el">
                    <div className="flex-img-wrapper">
                      <span className="flex-el-img flex-figure2"></span>
                      <span className="flex-el-num">02</span>
                    </div>
                    <div className="flex-text-wrapper">
                      <span className="flex-el-header">{t("block3-el2-header")}</span>
                      <span className="flex-el-text">{t("block3-el2-text")}</span>
                    </div>
                  </div>
                  <div className="flexibility-el">
                    <div className="flex-img-wrapper">
                      <span className="flex-el-img flex-figure3"></span>
                      <span className="flex-el-num">03</span>
                    </div>
                    <div className="flex-text-wrapper">
                      <span className="flex-el-header">{t("block3-el3-header")}</span>
                      <span className="flex-el-text">{t("block3-el3-text")}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          

          
          <div className="block-5">
            <div className="block5-wrapper">

            <div className="team-engagement-wrapper">
                  <span className="block5-header">{t("block4-header1")}</span>
            </div>


              <div className="steps">
               

                <div className="steps-el">
                    
                    <div className="steps-text-wrapper">
                      <span className="steps-el-header">Cryplo(Payroll)</span>

                      <ul className="steps-ul">
                        <li className="li-steps">{t("block4-el1-text1")}</li>
                        <li className="li-steps">{t("block4-el1-text2")}</li>
                      </ul>
                    </div>

                  </div>
                  
                  <div className="steps-el">
                    
                    <div className="steps-text-wrapper">
                      <span className="steps-el-header">Crypto(outstaff)</span>

                      <ul className="steps-ul">
                        <li className="li-steps">{t("block4-el2-text1")}</li>
                        <li className="li-steps">{t("block4-el2-text2")}</li>
                      </ul>
                    </div>

                  </div>

                  <div className="steps-el">
                    
                    <div className="steps-text-wrapper">
                      <span className="steps-el-header">Crypto(outsource)</span>
                      <ul className="steps-ul">
                        <li className="li-steps">{t("block4-el3-text1")}</li>
                        <li className="li-steps">{t("block4-el3-text2")}</li>
                      </ul>
                    </div>

                  </div>

                  <div className="steps-el">
                    
                    <div className="steps-text-wrapper">
                      <span className="steps-el-header">Crypto(reverse outsource)</span>
                      <ul className="steps-ul">
                        <li className="li-steps">{t("block4-el4-text1")}</li>
                        <li className="li-steps">{t("block4-el4-text2")}</li>
                        <li className="li-steps">{t("block4-el4-text3")}</li>
                      </ul>
                    </div>

                  </div>
                 
               
                 
                 
              </div>

              <div className="line-bottom" >
                <div className="header-line">budget savings</div>
                <div className="left-romb"></div>
                <div className="line-middle"></div>
                <div className="right-romb"></div>

                <div className="left-percent">-5%</div>
                <div className="percent-middle">-13%</div>
                <div className="right-percent">-20%</div>
              </div>
              <div className="line-bottom" >
              </div>

            </div>
          </div>


          <Faq/>



          <div className="block-footer">
            <div className="block-footer-wrapper">
              <div className="block-footer-content">
                <div className="footer-engagement-wrapper">
                  <span className="team-engagement-procent">{t("block-footer-header")}</span>
                </div>
                <DemoButton
                  handlePopup={() => dispatch(showPopupAsync())}
                />
              </div>

            </div>
          </div>





        </div>
      )}
    </>
  );
};

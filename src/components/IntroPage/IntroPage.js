import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "./IntroPage.scss";
import { DemoButton } from "../demo-button/DemoButton";
import { ChangeLanguageButton } from "../changeLanguageButton/ChangeLanguageButton";
import { Faq } from "../faq/FAQ";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
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
  const dispatch = useDispatch();
  console.log('lang', lang)
  
  const refBlock1 = useRef()
  const refBlock2 = useRef()
  const refBlock3 = useRef()
  const refBlock4 = useRef()



  function clickBlock1() {
    refBlock1.current.scrollIntoView({ behavior: 'smooth' })
  }
  function clickBlock2() {
    refBlock2.current.scrollIntoView({ behavior: 'smooth' })
  }
  function clickBlock3() {
    refBlock3.current.scrollIntoView({ behavior: 'smooth' })
  }
  function clickBlock4() {
    refBlock4.current.scrollIntoView({ behavior: 'smooth' })
  }




  const [activeMenu, setActiveMenu] = useState(false)

  const toggle = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <>
      {MobileIntroPage && (

        <div className="main-wrapper-mobile">

          <div className="header-wrapper-mobile">
            <div
              // className={`opacity overlay ${isActive !== "none"  ? "overlay" : ""}`}
            ></div>
            <div className="header-wrapper-mobile">
              <Link to="/">
                <div className="logo-mobile">
                </div>
              </Link>
              <Link to="/menu" className="menu-mobile" >
                <div className="burger-button-mobile" onClick={() => toggle()}></div>
              </Link>
            </div>
          </div>
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
                  <span className={`header-mobile ${lang === "ru" ? "ru-style-mobile" : ""}`}
                  >{t("block1-header1")}</span>
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






          <div className="block-3-mobile" id="testHook">
            <div className="layout">
              <div className="higher-engagment-mobile">
                <div className="higher-engagment-wrapper-mobile">
                  <div className={`header-mobile ${lang === "ru" ? "ru-style-mobile" : ""}`}
                  >
                  {t("block2-header1")}
                  </div>
                  <div className="header-text-mobile">
                  {t("block2-header2")}
                  </div>
                </div>

                <div className="indicators-mobile">
                  <div className="indicators-turnover-mobile">
                    <div className="flag-uae-mobile"></div>
                    <span className={`el-header-mobile ${lang === "ru" ? "ru-style-mobile" : ""}`}
                    >{t("block2-el1-header")}</span>
                    <span className="el-text-mobile">{t("block2-el1-text")}</span>
                  </div>
                </div>

                <div className="indicators-mobile">
                  <div className="indicators-turnover-mobile">
                    <div className="flag-rus-mobile"></div>
                    <span className={`el-header-mobile ${lang === "ru" ? "ru-style-mobile" : ""}`}
                    >{t("block2-el2-header")}</span>
                    <span className="el-text-mobile">{t("block2-el2-text")}</span>
                  </div>
                </div>

                <div className="indicators-mobile">
                  <div className="indicators-turnover-mobile">
                    <div className="flag-person-mobile"></div>
                    <span className={`el-header-mobile ${lang === "ru" ? "ru-style-mobile" : ""}`}
                    >{t("block2-el3-header")}</span>
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
                  <span className={`header-mobile mb25 ${lang === "ru" ? "ru-style-mobile" : ""}`}
                  >{t("block3-header1")}</span>
                </div>

                <div className="team-engagement-wrapper-mobile">
                  <div className="flexibility-el-mobile">
                    <div className="flex-img-wrapper-mobile">
                      <span className="flex-el-img flex-figure1-mobile"></span>
                      <span className={`flex-el-num-mobile ${lang === "ru" ? "ru-style-mobile-num" : ""}`}
                      >01</span>
                    </div>
                    <div className="flex-text-wrapper-mobile">
                      <span className={`flex-el-header-mobile ${lang === "ru" ? "ru-style-mobile" : ""}`}
                      >{t("block3-el1-header")}</span>
                      <span className="flex-el-text-mobile">{t("block3-el1-text")}</span>
                    </div>

                  </div>

                  <div className="flexibility-el-mobile">
                    <div className="flex-img-wrapper-mobile">
                      <span className="flex-el-img flex-figure2-mobile"></span>
                      <span className={`flex-el-num-mobile ${lang === "ru" ? "ru-style-mobile-num" : ""}`}
                      >02</span>
                    </div>
                    <div className="flex-text-wrapper-mobile">
                      <span className={`flex-el-header-mobile ${lang === "ru" ? "ru-style-mobile" : ""}`}
                      >{t("block3-el2-header")}</span>
                      <span className="flex-el-text-mobile">{t("block3-el2-text")}</span>
                    </div>

                  </div>

                  <div className="flexibility-el-mobile">
                    <div className="flex-img-wrapper-mobile">
                      <span className="flex-el-img flex-figure3-mobile"></span>
                      <span className={`flex-el-num-mobile ${lang === "ru" ? "ru-style-mobile-num" : ""}`}
                      >03</span>
                    </div>
                    <div className="flex-text-wrapper-mobile">
                      <span className={`flex-el-header-mobile ${lang === "ru" ? "ru-style-mobile" : ""}`}
                      >{t("block3-el2-header")}</span>
                      <span className="flex-el-text-mobile">{t("block3-el2-text")}</span>
                    </div>

                  </div>



                </div>
              </div>

            </div>
          </div>


          <div className="block-5-mobile" id={'top'}>
            <div className="block5-wrapper-mobile">
            <div className="higher-engagment-mobile">

              <div className="team-engagement-wrapper-mobile">
                    <span className={`header5-mobile ${lang === "ru" ? "ru-style-mobile" : ""}`}
                    >{t("block4-header1")}</span>
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


        </div>

      )}

      {DefaultIntroPage && (

        <div className="main-wrapper">

          <header className="header-wrapper">
              <div className="logo"></div>
              <nav className="nav">
              <a href="#top" className="link-button" >{t('home')}</a>
              <button className="link-button" onClick={clickBlock1}>{t('home')}</button>
              <button className="link-button" onClick={clickBlock2}>{t('how_it_works')}</button>
              <button className="link-button" onClick={clickBlock3}>{t('who_we_are')}</button>
              <button className="link-button" onClick={clickBlock4}>{t('faq')}</button>


              </nav>
              
              <button className="contact-button" onClick={() => dispatch(showPopupAsync())}>{t('contact-us')}</button>

              <ChangeLanguageButton/>

          </header>

          <div className="intro-page">
            
            <div
              className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
              onClick={() => dispatch(hidePopupAsync())}
              
            ></div>
            {isActive === "visible" || "animate" ? <Popup /> : null}



            <div className="block-2"  ref={refBlock1}>
              <div className="statistics">

                <div className="team-engagement">

                  <div className="team-engagement-wrapper">
                    <span 
                      className={`team-engagement-procent ${lang === "ru" ? "ru-style" : ""}`}
                    >{t("block1-header1")}</span>
                    <span className="team-engagement-text">
                    {t("block1-header2")}
                    </span>

                    <DemoButton
                    handlePopup={() => dispatch(showPopupAsync())}
                  />
                  </div>
                  <div className="team-engagement-img"></div>
                </div>

              </div>
            </div>
            
            <div className="block-3" ref={refBlock3}>
              <div className="layout">
                <div className="higher-engagment">
                  <div className="higher-engagment-wrapper">
                    <div className={`higher-engagment-header ${lang === "ru" ? "ru-style" : ""}`}
                    >
                      {t("block2-header1")}
                    </div>
                    <div className="higher-engagment-subheader">
                      {t("block2-header2")}
                    </div>
                  </div>
                  <div className="indicators">
                    <div className="indicators-turnover">
                      <div className="flag-uae"></div>
                      <span className={`el-header ${lang === "ru" ? "ru-style" : ""}`}
                      >{t("block2-el1-header")}</span>
                      <span className="el-text">{t("block2-el1-text")}</span>
                    </div>
                    <div className="indicators-turnover">
                      <div className="flag-rus"></div>
                      <span className={`el-header ${lang === "ru" ? "ru-style" : ""}`}
                      >{t("block2-el2-header")}</span>
                      <span className="el-text">{t("block2-el2-text")}</span>
                    </div>
                  </div>
                  <div className="indicators">
                  <div className="indicators-turnover">
                      <div className="flag-person"></div>
                      <span className={`el-header2 ${lang === "ru" ? "ru-style" : ""}`}
                      >{t("block2-el3-header")}</span>
                      <span className="el-text">{t("block2-el3-text")}</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>




            <div className="block-4" >
              <div className="block4-wrapper">
                <div className="feature-flexibility">
                  <div className="team-engagement-wrapper">
                    <span className={`team-engagement-procent ${lang === "ru" ? "ru-style" : ""}`}
                    >{t("block3-header1")}</span>
                  </div>

                  <div className="team-engagement-wrapper">
                    <div className="flexibility-el">
                      <div className="flex-img-wrapper">
                        <span className="flex-el-img flex-figure1"></span>
                        <span className="flex-el-num">01</span>
                      </div>
                      <div className="flex-text-wrapper">
                        <span className= {`flex-el-header ${lang === "ru" ? "ru-style" : ""}`}
                        >{t("block3-el1-header")}</span>
                        <span className="flex-el-text">{t("block3-el1-text")}</span>
                      </div>

                    </div>
                    <div className="flexibility-el">
                      <div className="flex-img-wrapper">
                        <span className="flex-el-img flex-figure2"></span>
                        <span className="flex-el-num">02</span>
                      </div>
                      <div className="flex-text-wrapper">
                        <span className={`flex-el-header ${lang === "ru" ? "ru-style" : ""}`}
                        >{t("block3-el2-header")}</span>
                        <span className="flex-el-text">{t("block3-el2-text")}</span>
                      </div>
                    </div>
                    <div className="flexibility-el">
                      <div className="flex-img-wrapper">
                        <span className="flex-el-img flex-figure3"></span>
                        <span className="flex-el-num">03</span>
                      </div>
                      <div className="flex-text-wrapper">
                        <span className= {`flex-el-header ${lang === "ru" ? "ru-style" : ""}`}
                        >{t("block3-el3-header")}</span>
                        <span className="flex-el-text">{t("block3-el3-text")}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            

            
            <div className="block-5" ref={refBlock2} id={'top'}>
              <div className="block5-wrapper">

              <div className="team-engagement-wrapper2">
                    <span className={`block5-header ${lang === "ru" ? "ru-style" : ""}`}
                    >{t("block4-header1")}</span>
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
                  <div className="header-line">{t("block4-header-bottom")}</div>
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

            <div ref={refBlock4}>
              <Faq/>
            </div>
            



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
          
        </div>


      )}
    </>
  );
};

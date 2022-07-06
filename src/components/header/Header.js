import "./Header.scss";
import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Link } from "react-router-dom";
import { ChangeLanguageButton } from "../changeLanguageButton/ChangeLanguageButton";
import { useMediaQuery } from "react-responsive";
import { scrollUp } from "../utils/scrollUp";
import { DemoButton } from "../demo-button/DemoButton";

import { showPopupAsync, hidePopupAsync, showPopupDemoAsync } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export const Header = () => {
  const { t } = useTranslation();

  const DefaultHeader = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileHeader = useMediaQuery({ query: "(max-width: 428px)" });


  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();

  const [activeMenu, setActiveMenu] = useState(false)

  const toggle = () => {
    setActiveMenu(!activeMenu)
  }
  console.log('activeMenu', activeMenu)


  return (
    <>
      {MobileHeader && (
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
      )}

      {DefaultHeader && (
        <>
        <header className="header-wrapper">
            <div className="logo"></div>
            <nav className="nav">
              <Link to="/">{t('home')}</Link>
              <Link to="/">{t('how_it_works')}</Link>
              <Link to="/">{t('who_we_are')}</Link>
              <Link to="/">{t('faq')}</Link>

            </nav>
            
            <button class="contact-button" onClick={() => dispatch(showPopupAsync())}>{t('contact-us')}</button>

            <ChangeLanguageButton/>

        </header>
        </>
      )}
  
    </>
  );
};

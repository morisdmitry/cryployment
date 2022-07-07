import "./MenuMobile.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Link } from "react-router-dom";
import { ChangeLanguageButton } from "../changeLanguageButton/ChangeLanguageButton";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Popup } from "../Popup/Popup";
import { showPopupAsync} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
export const MenuMobile = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const MobileMenu = useMediaQuery({ query: "(max-width: 428px)" });

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();



  return (
    <>
      {MobileMenu && (
        <div className="menu-wrapper-mobile">
          <div className="menu-content">
            <div
              // className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            ></div>
            {isActive === "visible" || "animate" ? <Popup /> : null}

            <div
              // className={`opacity ${demo !== "none" ? "overlay" : ""}`}
            ></div>

            <div className="menu-logo-wrapper-mobile">
              <Link to="/">
                <div className="menu-logo-mobile"></div>
              </Link>
              <div
                className="menu-close-button-mobile"
                onClick={() => navigate(-1)}
              ></div>
            </div>
            <div className="menu-nav-wrapper-mobile">
              <nav className={`menu-nav-mobile_${localStorage.getItem('lang')} `}>
              
              {/* <a href="/#top" className="link-button" >{t('test')}</a> */}
              <Link to="#top">{t('home')}</Link>
              <Link to="/">{t('how_it_works')}</Link>
              <Link to="/">{t('who_we_are')}</Link>
              <Link to="/">{t('faq')}</Link>




              </nav>
            </div>

            <div className="menu-footer-wrapper-mobile">
              <ChangeLanguageButton />
              
            <button class="contact-button" onClick={() => dispatch(showPopupAsync())}>{t('contact-us')}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React from "react";
import './Header.scss'
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {ChangeLanguageButton} from '../changeLanguageButton/ChangeLanguageButton'

class Header extends React.Component {

  
  
  
    render() {
      return (
        <header className="header-wrapper">
            <div className="logo"></div>
            <nav className="nav">
              <Link to="/1">{this.props.t('home')}</Link>
              <Link to="/1">{this.props.t('how_it_works')}</Link>
              <Link to="/1">{this.props.t('who_we_are')}</Link>
              <Link to="/1">{this.props.t('faq')}</Link>

            </nav>
            
            
            <button class="contact-button">{this.props.t('contact-us')}</button>
            <ChangeLanguageButton/>

        </header>
      );
    }
  }
  

  
export default withTranslation()(Header);
  
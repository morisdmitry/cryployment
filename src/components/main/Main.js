import React, { useEffect, useState, useCallback } from "react";
import {Header} from "../header/Header"

import { IntroPage } from '../IntroPage/IntroPage';
import './Main.css'

import { useTranslation } from "react-i18next";



import "../../i18n";

import { useMediaQuery } from "react-responsive";

export const Main = () => {
  const { t } = useTranslation();

  const DefaultHeader = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileHeader = useMediaQuery({ query: "(max-width: 428px)" });

  const isActive = false
  const demo = false

 



  return (
    <>
      {MobileHeader && (
                <div className="main-wrapper-mobile">
                <Header></Header>
    
                <IntroPage />
    
    
            </div>
      )}

      {DefaultHeader && (
        <>
          <div className="main-wrapper">
            <Header></Header>

            <IntroPage />


        </div>
        </>
      )}
  
    </>
  );
};

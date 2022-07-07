import React from "react";

import { IntroPage } from '../IntroPage/IntroPage';
import './Main.css'



import "../../i18n";

import { useMediaQuery } from "react-responsive";

export const Main = () => {

  const DefaultHeader = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileHeader = useMediaQuery({ query: "(max-width: 428px)" });


 



  return (
    <>
      {MobileHeader && (
                <div className="main-wrapper-mobile">
               
    
                <IntroPage />
    
    
            </div>
      )}

      {DefaultHeader && (
        <>
          <div className="main-wrapper">
           

            <IntroPage />


        </div>
        </>
      )}
  
    </>
  );
};

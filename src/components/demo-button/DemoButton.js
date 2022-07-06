import "./DemoButton.scss";
import React from "react";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch  } from "react-redux";

export const DemoButton = (props) => {
  const DefaultDemoButton = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileDemoButton = useMediaQuery({ query: "(max-width: 428px)" });


  const { t } = useTranslation();

  return (
    <>
      {MobileDemoButton && (
        <button
          className="demo-button-mobile"
          onClick={() => props.handlePopup()}
        >
          {t("contact-us")}
        </button>
      )}
      {DefaultDemoButton && (
        <button
          className="demo-button"
          onClick={() => props.handlePopup()}
        >
          {t("contact-us")}
        </button>
      )}
    </>
  );
};

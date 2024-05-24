import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./header.module.css";
import "./dropDown.css";
import { useTranslation } from 'react-i18next';

const LowerHeader = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.navbar_panel}>
      {/* All */}
      <button
        className="btn allMenu"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
       <span className={classes.menuIcon}>
        {/* <AiOutlineMenu size={20}/> */}
       </span>
       <span className={classes.menuText}>{t("header.all")}</span>
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
       <div className={classes.menuProfile}>
          <div className={classes.userIcon}></div>
          <div className={classes.userName}>{t("lowerHeader.greeting")}</div>
       </div>
       <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        {/*  */}
        <div className={classes.menuContainer}>
          <ul className={classes.menuSection}>
            <li className={classes.heading}>{t("lowerHeader.trending")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.bestSeller")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.newReleases")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.moversShakers")}</li>
          </ul>
          <hr style={{width:"100%", marginLeft:"0"}}/>
          <ul className={classes.menuSection}>
            <li className={classes.heading}>{t("lowerHeader.digitalContentDevices")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.primeVideo")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.amazonMusic")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.fireTV")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.amazonPhotos")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.amazonAppStore")}</li>
          </ul>
          <hr style={{width:"100%", marginLeft:"0"}}/>
          <ul className={classes.menuSection}>
            <li className={classes.heading}>{t("lowerHeader.shopByDepartment")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.clothingShoesJewelry")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.books")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.moviesMusicGames")}</li>
          </ul>
          <hr style={{width:"100%", marginLeft:"0"}}/>
          <ul className={classes.menuSection}>
            <li className={classes.heading}>{t("lowerHeader.helpSettings")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.yourAccount")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.customerService")}</li>
            <li className={classes.menuContent}>{t("lowerHeader.signOut")}</li>
          </ul>
        </div>
        
      </div>
      <div className={classes.panel_content}>
        <span className={classes.panelText}>{t("panel.sameDayDelivery")}</span>
        <span className={classes.panelText}>{t("panel.medicalCare")}</span>
        <span className={classes.panelText}>{t("panel.liveStreams")}</span>
        <span className={classes.panelText}>{t("panel.audible")}</span>
        <span className={classes.panelText}>{t("panel.amazonBusiness")}</span>
        <span className={classes.panelText}>{t("panel.pharmacy")}</span>
        <span className={classes.panelText}>{t("panel.buyAgain")}</span>
        <span className={classes.panelText}>{t("panel.subscribeSave")}</span>
        <span className={classes.panelText}>{t("panel.amazonBasics")}</span>
        <span className={classes.panelText}>{t("panel.tvVideos")}</span>
      </div>
    </div>
  );
};

export default LowerHeader;

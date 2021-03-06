import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../Assets/logo.png";
import messsageIcon from "../../Assets/messageIcon.png";
import callIcon from "../../Assets/callIcon.png";
import searchIcon from "../../Assets/searchIcon.png";
import menuIcon from "../../Assets/menu.png";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={Logo} className={styles.logo} />
        </div>
        <div className={styles.leftContainer}>
          <div className={styles.leftContent}>
            <div className={styles.box}>
              <img src={messsageIcon} className={styles.icon} />
              <p className={styles.boxText}>info@hepl.com.pk</p>
            </div>

            <div className={styles.box}>
              <img src={callIcon} className={styles.callIcon} />
              <p className={styles.boxText}>0300-011-hepl (4375)</p>
            </div>

            <div className={styles.inputBox}>
              <input
                className={styles.input}
                placeholder="Search Keyword Here"
              />

              <img src={searchIcon} className={styles.searchIcon} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.menuContainer}>
        <div className={styles.menuBox}>
          <div className={styles.menuContainerBox}>
            <a href="/"><p className={styles.menuItem}>HOME</p></a>
            <a href="/about"><p className={styles.menuItem}>ABOUT US</p></a>
            <a href="/Product"><p className={styles.menuItem}>PRODUCT LINE</p></a>
            <a href="/Machine"><p className={styles.menuItem}>MACHINERY AND TOOLS</p></a>
            <a href="/Contact"><p className={styles.menuItem}>CONTACT US</p></a>
          </div>
        </div>
      </div>

      {/* menu for mobile */}
      <div className={styles.mobileMenuContainer}>
        <img
          onClick={() => setMobileMenu(!mobileMenu)}
          src={menuIcon}
          className={styles.menuIcon}
        />
        {mobileMenu ? (
          <div className={styles.dropDown}>
          
            <div className={styles.dopDownMenuBox}>
             <p className={styles.dropdownMenuItem}>HOME</p>
            </div>
            
            <div className={styles.dopDownMenuBox}>
              <p className={styles.dropdownMenuItem}>ABOUT US</p>
            </div>
            <div className={styles.dopDownMenuBox}>
              <p className={styles.dropdownMenuItem}>PRODUCT LINE</p>
            </div>
            <div className={styles.dopDownMenuBox}>
              <p className={styles.dropdownMenuItem}>MACHINERY AND TOOLS</p>
            </div>
            <div className={styles.dopDownMenuBox}>
              <p className={styles.dropdownMenuItem}>CONTACT US</p>
            </div>
          </div>
        ) : null}
      </div>
      {/* menu for mobile */}
    </div>
  );
}

export default Header;

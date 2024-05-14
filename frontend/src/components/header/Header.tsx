import type { FC} from "react";
import  { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logoHeader.png";
import { useTranslation } from "react-i18next";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { FaGlobe, FaUserAlt } from "react-icons/fa";

const Header: FC = () => {
  const { i18n, t } = useTranslation("translation");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "EN", flag: "🇬🇧" },
    { code: "de", name: "DE", flag: "🇩🇪" },
    { code: "ru", name: "RU", flag: "🇷🇺" },
    { code: "ua", name: "UA", flag: "🇺🇦" },
  ];

  useEffect(() => {
    i18n.language && localStorage.setItem("userLanguage", i18n.language);
  }, [i18n.language]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.burgerMenuContainer}>
        <BurgerMenu />
      </div>

      <div className={styles.logoHeader}>
        <img src={logoHeader} alt="logo" />
      </div>

      <div className={styles.navbar}>
        <NavLink to="/" onClick={() => setIsLanguageDropdownOpen(false)}>
          {t("header.home")}
        </NavLink>
        <NavLink
          to="/products"
          onClick={() => setIsLanguageDropdownOpen(false)}
        >
          {t("header.products")}
        </NavLink>
        <NavLink
          to="/services"
          onClick={() => setIsLanguageDropdownOpen(false)}
        >
          {t("header.services")}
        </NavLink>
        <NavLink
          to="/contacts"
          onClick={() => setIsLanguageDropdownOpen(false)}
        >
          {t("header.contacts")}
        </NavLink>
        <NavLink to="/about" onClick={() => setIsLanguageDropdownOpen(false)}>
          {t("header.about")}
        </NavLink>
        <NavLink
          to="/registration"
          onClick={() => setIsLanguageDropdownOpen(false)}
        >
          {t("header.registration")}
        </NavLink>
        <NavLink to="/login" onClick={() => setIsLanguageDropdownOpen(false)}>
          {t("header.login")}
        </NavLink>
       
      </div>
      <div>
      <NavLink to="/personal-page" className={styles.personalPageHeader}> <FaUserAlt /></NavLink>
      </div>
     
      <div
        className={styles.languageIcon}
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
      >
        <FaGlobe />
      </div>
      {isLanguageDropdownOpen && (
        <div ref={menuRef} className={styles.languageDropdown}>
          {languages.map((language) => (
            <div
              key={language.code}
              className={styles.languageOption}
              onClick={() => {
                changeLanguage(language.code);
                setIsLanguageDropdownOpen(false);
              }}
            >
              {language.flag} {language.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
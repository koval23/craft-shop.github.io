import type { FC } from "react"
import { useEffect, useRef, useState } from "react"
import styles from "./BurgerMenu.module.css"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

const BurgerMenu: FC = () => {
  const { t } = useTranslation("translation")
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.icon} onClick={toggleMenu}>
        ☰
      </div>
      {isOpen && (
        <div className={styles.menu} ref={menuRef}>
          <div className={styles.navbar}>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              {t("header.home")}
            </NavLink>
            <NavLink to="/products" onClick={() => setIsOpen(false)}>
              {t("header.products")}
            </NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)}>
              {t("header.services")}
            </NavLink>
            <NavLink to="/contacts" onClick={() => setIsOpen(false)}>
              {t("header.contacts")}
            </NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              {t("header.about")}
            </NavLink>
            <NavLink to="/registration" onClick={() => setIsOpen(false)}>
              {t("header.registration")}
            </NavLink>
            <NavLink to="/login" onClick={() => setIsOpen(false)}>
              {t("header.login")}
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default BurgerMenu

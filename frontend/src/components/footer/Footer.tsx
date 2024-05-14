import type { FC } from "react"
import styles from "./Footer.module.css"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import logoFooter from "../../assets/logoFooter.jpeg";
import EmailForm from "../../features/form/EmailForm";

const Footer: FC = () => {
  const { t } = useTranslation("translation")
  return (
    <div className={styles.bigContainer}>
      <div className={styles.emailFormContainer}>
        <EmailForm />
      </div>
      <div className={styles.footer}>
        <div className={styles.socialLinks}>
          <h3>{t("footer.findUsOn")}</h3>
          <p>
            <a target="_blank" href="https://www.twitter" rel="noreferrer">
              Twitter (X)
            </a>
            <a target="_blank" href="https://www.instagram" rel="noreferrer">
              Instagram
            </a>
            <a
              target="_blank"
              href="https://www.pinterest.com/profile "
              rel="noreferrer"
            >
              Pinterest
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile "
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              target="_blank"
              href="https://www.tik-tok.com/profile "
              rel="noreferrer"
            >
              Tik Tok
            </a>
          </p>
        </div>

        <div className={styles.footerMayHelpYou}>
          <h3>{t("footer.mayHelpYou")}</h3>
          <nav>
            <NavLink to="/about">FAQ`s</NavLink>
            <NavLink to="/contacts">{t("footer.contactUs")}</NavLink>
            <NavLink to="/help">{t("footer.emailUnsubscribe")}</NavLink>
            <NavLink to="/payment-info">{t("footer.paymentOptions")}</NavLink>
            <NavLink to="/shipping-services">
              {t("footer.shippingServices")}
            </NavLink>
          </nav>
        </div>
        <div className={styles.footerAboutCompany}>
          <h3>{t("footer.aboutCompany")}</h3>
          <nav>
            <NavLink to="/about">{t("footer.aboutHarmanCoal")}</NavLink>
            <NavLink to="/careers">{t("footer.careers")}</NavLink>
            <NavLink to="/contacts">{t("footer.contacts")}</NavLink>
          </nav>
        </div>
        <div className={styles.logoFooter}>
          <img src={logoFooter} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer

import type { FC, FormEvent } from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./EmailForm.module.css"
import { FaArrowRight } from "react-icons/fa"

const EmailForm: FC = () => {
  const { t } = useTranslation("translation")
  const [email, setEmail] = useState<string>("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    alert(`${t("footer.subscribing")}: ${email}`)
    setEmail("")
  }

  return (
    <div className={styles.emailFormContainer}>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto my-5 p-5 relative"
      >
        <h3 className="text-lg font-semibold text-center mb-6">
          {t("footer.signUpUpdates")}
        </h3>
        <span className="text text-center mb-6">
          {t("footer.emailFormText")}
        </span>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder={t("footer.emailAddress")}
            required
            className="px-4 py-3  border border-black rounded w-full pl-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-8 top-0 bottom-5 bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-tr rounded-br flex items-center justify-center"
            style={{ outline: "none", transform: "translate(50%, 50%)" }}
          >
            <FaArrowRight
              className="w-6 h-6"
              color="black"
              style={{ transform: "rotate(-45deg)" }}
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default EmailForm

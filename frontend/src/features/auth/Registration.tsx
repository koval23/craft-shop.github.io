import type { FC } from "react"
import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import styles from './styles/Registration.module.css';
import type { RegistrationData } from "./types/RegistrationData";

const Registration: FC = () => {
  const { t } = useTranslation("translation")
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState<RegistrationData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert(t("registration.passwordMismatch"))
      return
    }

    const { confirmPassword, ...registrationData } = formData
    console.log("Registration Data:", registrationData)
    alert("Registration successful!")
  }

  return (
    <div className={styles.bigContainerRegistration}>
      <p>{t("registration.registration")}</p>
      <div className="max-w-md mx-auto my-10 p-4 border rounded shadow-lg">
        <div className={styles.registrationFormContainer}>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder={`${t("contacts.name")} *`}
              value={formData.firstName}
              onChange={handleChange}
              required
              className="px-4 py-2 border-none border-b-2 border-black focus:border-blue-500 focus:outline-none w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder={`${t("contacts.surname")} *`}
              value={formData.lastName}
              onChange={handleChange}
              required
              className="px-4 py-2 border-none border-b border-black-300 focus:border-blue-500 focus:outline-none w-full"
            />
            <input
              type="email"
              name="email"
              placeholder={`${t("contacts.email")} *`}
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 border-none border-b border-gray-300 focus:border-blue-500 focus:outline-none w-full"
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={`${t("registration.password")} *`}
              value={formData.password}
              onChange={handleChange}
              required
              className="px-4 py-2 border-none border-b border-gray-300 focus:border-blue-500 focus:outline-none w-full"
            />

            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder={`${t("registration.repeatPassword")} *`}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="px-4 py-2 border-none border-b border-gray-300 focus:border-b focus:border-blue-500 focus:outline-none w-full"
            />
            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                id="togglePassword"
                className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-transparent focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                onChange={handleTogglePassword}
                checked={showPassword}
              />
              <label
                htmlFor="togglePassword"
                className="text-sm text-gray-700 select-none"
              >
                {t("registration.showPassword")}
              </label>
            </div>
            <div className={styles.requiredFieldsText}>
              <p className="text-sm text-gray-500">
                {t("registration.requiredFields")}
              </p>
            </div>

            <button
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  "
            >
              {t("contacts.send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration

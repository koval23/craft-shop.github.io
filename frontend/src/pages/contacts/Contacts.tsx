import type { FC } from "react"
import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import styles from './Contacts.module.css';
import { useAppDispatch } from "../../app/hooks";
import { toast } from "react-toastify";
import { submitForm } from "./contactsSlice";


const Contacts: FC = () => {
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    question: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.question
      ) {
        alert(t("contacts.fillAllFields"))
        return
      }
      console.log("Contacts: ", formData)
      dispatch(submitForm(formData))
      .unwrap()
      .then(() => {
        toast.success(t('contacts.thankQuestion'));
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          question: "",
        })
      })
      .catch(() => {
        toast.error(t("toasty.noUpdatedContact"));
      });
  
     
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className={styles.bigContactsContainer}>
      <div className={styles.contactsContainer}>
        <div className={styles.formContainer}>
          <div className={styles.textContainer}>
            <h1 className="text-lg font-semibold text-center mb-4">
              {t("contacts.feedbackForm")}
            </h1>
          </div>
          <div className={styles.inputFormContainer}>
            <div className="max-w-md mx-auto my-10 p-4 ">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-3">
                  <p>
                    {t("contacts.name")} {"*"}
                  </p>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-black rounded w-full pl-2"
                  />
                  <p>
                    {t("contacts.surname")} {"*"}
                  </p>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-black rounded w-full pl-2"
                  />
                  <p>
                    {t("contacts.email")} {"*"}
                  </p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-black rounded w-full pl-2"
                  />
                  <p>
                    {t("contacts.yourQuestion")} {"*"}
                  </p>
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-black rounded w-full pl-2"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {t("contacts.send")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialLinkContainer}>
        <h2>{t("contacts.ourSocialMedia")}</h2>
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
        <FaPinterest />
        <FaTiktok />
      </div>{" "}
    </div>
  )
}

export default Contacts;

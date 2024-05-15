export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  question: string
}

export interface ContactFormState {
  formData: ContactFormData
  loading: boolean
  error: string | null
}

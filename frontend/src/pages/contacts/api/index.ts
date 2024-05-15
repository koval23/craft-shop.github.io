import type { ContactFormData } from "../types/ContactFormData"

export async function submitContactForm(
  formData: ContactFormData,
): Promise<void> {
  const res = await fetch("/api/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })

  if (!res.ok) {
    throw new Error("Failed to submit contact form")
  }
}

import type { LoginData } from "../types/LoginData"
import type { User } from "../types/PersonalPageData"
import type { RegistrationData } from "../types/RegistrationData"

export async function personalPageUser(formData: User): Promise<User> {
  const res = await fetch("api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
  if (!res.ok) {
    throw new Error("Failed to update user")
  }
  return res.json()
}

export async function loginUser(formData: LoginData): Promise<User> {
  const res = await fetch("api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
  if (!res.ok) {
    throw new Error("Failed to update user")
  }
  return res.json()
}

export async function registerUser(formData: RegistrationData): Promise<User> {
  const res = await fetch("api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
  if (!res.ok) {
    throw new Error("Failed to update user")
  }
  return res.json()
}

export async function deletePersonalPageUser(): Promise<void> {
  const res = await fetch("api/user", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (!res.ok) {
    throw new Error("Failed to login")
  }
  return res.json()
}

export async function activateAccountUser(validationCode: string): Promise<void> {
  const res = await fetch("/api/activate", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ validationCode }),
  });

  if (!res.ok) {
    throw new Error("Failed to activate account");
  }

  return res.json();
}
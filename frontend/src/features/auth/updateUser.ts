import type { User } from "../../features/auth/types/PersonalPageData"
import { personalPageUser } from "./api"

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (formData: User) => {
    const response = await personalPageUser(formData)
    return response
  },
)

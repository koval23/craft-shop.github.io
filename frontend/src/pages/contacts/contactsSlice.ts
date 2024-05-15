import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { ContactFormData, ContactFormState } from './types/ContactFormData';
import { submitContactForm } from './api';


const initialState: ContactFormState = {
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      question: '',
    },
    loading: false,
    error: null,
  };
  
  export const submitForm = createAsyncThunk(
    'contactForm/submitForm',
    async (formData: ContactFormData) => {
      await submitContactForm(formData);
    }
  );
  
  const contactsSlice = createSlice({
    name: 'contactForm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(submitForm.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(submitForm.fulfilled, (state) => {
          state.loading = false;
          state.formData = initialState.formData; 
        })
        .addCase(submitForm.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to submit contact form';
        });
    },
  });
  
  export const selectedForm = (state: {contactForm:ContactFormState}) => state.contactForm
  export const selectFormLoading = (state: { contactForm: ContactFormState }) => state.contactForm.loading;
  export const selectFormError = (state: { contactForm: ContactFormState }) => state.contactForm.error;
  
  export default contactsSlice.actions;
  
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userData } from '../Data/mockData';

export const userLogin = createAsyncThunk(
  'auth/login',
  ({ email, password }) => (
  // mocking actual API fetch call behavior
  new Promise((resolve, reject) => {
    const validData = userData.find((user) => {
      return email === user.email && password === user.password
    })
    setTimeout(() => {
      if (validData) {
        resolve(validData);
      } else {
        reject();
      }
    }, 1000);
  })
));
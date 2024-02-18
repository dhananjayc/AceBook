// rootReducer.jsx
import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  // Add other reducers as needed
});

export default rootReducer;
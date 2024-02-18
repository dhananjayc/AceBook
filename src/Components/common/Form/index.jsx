import React, { useState, useEffect, useContext } from 'react'
import {useNavigate} from "react-router-dom"
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
// TODO: can be replace or updated by userLogin
// import { aceLogin } from '../../../reducers/loginSlice';
import { userLogin } from '../../../reducers/loginActions';
import ErrorHandlerContext from '../../../Providers/ErrorHandlerContext';


const Form = () => {
  const [ email,setEmail ] = useState('')
  const [ password,setPassword ] = useState('')
  const navigate = useNavigate()
  // const login = useSelector(state => state.user)
  const loggedInUser = useSelector(state => state.loggedInUser)
  const isError = useSelector(state => state.isError);
  const isSuccess = useSelector(state => state.isSuccess);
  const dispatch = useDispatch();
  const { showNotification } = useContext(ErrorHandlerContext);
  
  useEffect(() => {
    // if user authenticated/loggedIn then navigate to Home page
    // or navigate user to login page
    const path = loggedInUser ? '/' : '/login';
    navigate(path);
  }, [navigate, loggedInUser]);
  
  useEffect(() => {
    if (isError) {
      showNotification("Email or Password mismatched!!", isError);
    }
    if (isSuccess) {
      showNotification("Logged in successfully!"); // default 2nd argument is false 
    }
  }, [isError, isSuccess, showNotification]);
  

  function handleLogin(e){
    e.preventDefault()

    dispatch(userLogin({ email, password }));
    // TODO: Following code can be moved in actions after loginActions change
    // const validate = login.find((user) => {
    //   return email === user.email && password === user.password
    // })
    // check for valid user
    // if (validate) {
      // dispatch(aceLogin(validate));
      // showNotification("Logged in successfully")
    // } else {
      // showNotification("Email or Password mismatched!!", true)
    // }
  }

  return (
    <form className='common-form' onSubmit={handleLogin}>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter you email or phone number"
          aria-describedby="emailHelp"
          required={true}
          aria-required={true}
        />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your Password"
          required={true}
          aria-required={true}
        />
    </div>
    <div className="form-group">
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    <div className='col textcenter'>
      <div className="form-group">
    <span>Forgot Password?</span>
    </div>
    <div className="form-group">
    <button className='btn btnsuccess'>Create a New Account</button>
    </div>
    </div>
    </form>
  )
}

export default Form
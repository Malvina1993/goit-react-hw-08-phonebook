import React from 'react';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { selectIsSignIt } from 'redux/author.selectors';
import { loginThunk } from 'redux/userReducer.js';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm()
    
    const authorization = useSelector(selectIsSignIt)

    const dispatch = useDispatch();

  const onSubmit = (data) => {
    
        dispatch(loginThunk(data));
        reset();
    }


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    (!authorization) && (<form onSubmit={handleSubmit(onSubmit)}>


          <label>
              <span>Email</span>
              <input {...register("email",{ required: true })} type = "email" />
              {errors.email && <span>This field is required</span>}

          </label>
          <label>
              <span>Password</span>
              <input {...register("password", { required: true, minLenght: 7 })} type ="password"/>
              {errors.password && <span>This field is required</span>}

          </label>


      <button type="submit">Sign In</button>
    </form>)
  )
};
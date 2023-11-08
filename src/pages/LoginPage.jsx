import React from 'react';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading, selectIsSignIt } from 'redux/author.selectors';
import { loginThunk } from 'redux/userReducer.js';

import css from './Page.module.css'
import { Loader } from 'components/Loader/Loader';

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

    const isLoading = useSelector(selectIsLoading);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    (!authorization) && ( (isLoading && <Loader/>) ||
      <div className={css.formRegister}>
      <form onSubmit={handleSubmit(onSubmit)}>


          <label>
              <span className={css.spanForm}>Email</span>
              <input className={css.inputForm} {...register("email",{ required: true })} type = "email" />
              {errors.email && <span>This field is required</span>}

          </label>
          <label>
              <span className={css.spanForm}>Password</span>
              <input className={css.inputForm} {...register("password", { required: true, minLenght: 7 })} type ="password"/>
              {errors.password && <span>This field is required</span>}

          </label>


      <button type="submit" className={css.btnForm}>Sign Up</button>
      </form>
      </div>)
  )
};
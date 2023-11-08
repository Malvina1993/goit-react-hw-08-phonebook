import React from 'react';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading, selectIsSignIt } from 'redux/author.selectors';
import { registerThunk } from 'redux/userReducer.js';

import css from './Page.module.css';
import { Loader } from 'components/Loader/Loader';

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm()
    
  const dispatch = useDispatch();
  const authorization = useSelector(selectIsSignIt)
  const onSubmit = (data) => {
    
        dispatch(registerThunk(data));
        reset();
    }

    const isLoading = useSelector(selectIsLoading);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
   
    (!authorization) && ((isLoading && <Loader/>) ||
      <div className={css.formRegister}>
      <form  onSubmit={handleSubmit(onSubmit)}>

          <label>
              <span className={css.spanForm}>Name</span>
              <input className={css.inputForm} {...register("name", { required: true })} type="text"/>
              {errors.name && <span>This field is required</span>}

          </label>
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


      <button type="submit" className={css.btnForm}>Sign In</button>
      </form >
      </div>  )
  )
};
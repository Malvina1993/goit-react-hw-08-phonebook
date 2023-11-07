import React from 'react';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { selectIsSignIt } from 'redux/author.selectors';
import { registerThunk } from 'redux/userReducer.js';

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


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    (!authorization) && (
      <form onSubmit={handleSubmit(onSubmit)}>

          <label>
              <span>Name</span>
              <input {...register("name", { required: true })} type="text"/>
              {errors.name && <span>This field is required</span>}

          </label>
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


      <button type="submit">Sign Up</button>
    </form >)
  )
};
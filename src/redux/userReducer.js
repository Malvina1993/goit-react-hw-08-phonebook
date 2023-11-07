import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {requestLoginUser, requestLogOut, requestSignUpUser, setToken, requestRefreshUser} from '../services/app.js'

export const loginThunk = createAsyncThunk(
  'user/login',
  async (userData, thunkAPI) => {
    try {
      const autorUser = await requestLoginUser(userData);
      console.log(autorUser);
      return autorUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  } 
);

export const registerThunk = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    try {
      const autorUser = await requestSignUpUser(userData);
      console.log(autorUser)
      return autorUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const response = await requestLogOut();
      
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.userData.token;
    try {
      setToken(token)
      const response = await requestRefreshUser();
      
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);


const INITIAL_STATE = {
  token: null,
  user: null,
  isSignIt: false,
  isLoading:false,
  error: null,
}

const userDataSlice = createSlice({
  
  name: "userData",
  
  initialState: INITIAL_STATE,
  
  extraReducers: builder => 
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isSignIt = true;
      })
     .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
     })
     .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isSignIt = true;
      })
     .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
     })
      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.token = null;
        state.user = null;
        state.isSignIt = false;
      })
     .addCase(logOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
     })
    .addCase(refreshThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload ;
        state.isSignIt = true;
      })
     .addCase(refreshThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
     }), 
  },
);



export const userReducer = userDataSlice.reducer;

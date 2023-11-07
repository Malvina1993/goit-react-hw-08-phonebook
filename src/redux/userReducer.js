import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {requestLoginUser, requestLogOut, requestDeleteContact} from '../services/app.js'

export const loginThunk = createAsyncThunk(
  'user/login',
  async (userData, thunkAPI) => {
    try {
      const response = await requestLoginUser(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const registerThunk = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    try {
      const response = await requestLogOut(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      
      const contacts = await requestDeleteContact(contactId);
      
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);


const INITIAL_STATE = {
  contacts: {
    items: null,
    isLoading: false,
    error: null,
  },
  filter: '',
}

const contactsSlice = createSlice({
  
  name: "contacts",
  
  initialState: INITIAL_STATE,
  
  extraReducers: builder => 
    builder
    //   .addCase(fetchContacts.pending, state => {
    //     state.contacts.isLoading = true;
    //     state.contacts.error = null;
    //   })
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.items = action.payload;
    //   })
    //  .addCase(fetchContacts.rejected, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.error = action.payload;
    //  })
    //  .addCase(addContact.pending, state => {
    //     state.contacts.isLoading = true;
    //     state.contacts.error = null;
    //   })
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.items.unshift(action.payload);
    //   })
    //  .addCase(addContact.rejected, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.error = action.payload;
    //  })
     .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items= state.contacts.items.filter(contact =>
          contact.id !== action.payload.id);
      })
     .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
     }), 
  
  reducers: {
    
    setFilter: (state, action) => {
  
      state.filter = action.payload;
      
    },
    
  },
});


export const { setFilter} = contactsSlice.actions;

export const userReducer = contactsSlice.reducer;


// export const contactsReducer = (state=INITIAL_STATE, action) => {
//     if (action.type === 'contacts/setContacts') {
//         return action.payload
//     }
//     return state;
// }

// export const  setContacts = (payload) =>  {
//     return {
//         type: 'contacts/setContacts', 
//         payload
//     }
// }
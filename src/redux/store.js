import {configureStore} from "@reduxjs/toolkit"

import {contactsReducer} from './contactsReducer.js'
import {userReducer} from './userReducer.js'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const authorConfirg = {
    key: 'author',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        // contacts: persistReducer(contactsDataConfirg, contactsReducer),
        contacts: contactsReducer,
        userData: persistReducer(authorConfirg,userReducer),
    },

    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
             ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
        }),
    
});

export const persistor = persistStore(store)

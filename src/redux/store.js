import {configureStore} from "@reduxjs/toolkit"

import {contactsReducer} from './contactsReducer.js'

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'

// const contactsDataConfirg = {
//     key: 'contacts',
//     storage,
//     whitelist: ['contactsData']
// }

export const store = configureStore({
    reducer: {
        // contacts: persistReducer(contactsDataConfirg, contactsReducer),
        contacts: contactsReducer,
    },

    // middleware: getDefaultMiddleware => 
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //      },
    //     }),
    
});

// export const persistor = persistStore(store)

import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux'
import { persistor, store} from './redux/store.js'
import { PersistGate } from 'redux-persist/lib/integration/react';

// import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate persistor = {persistor}>
          <App/>
        </PersistGate>
        
    
      
    </Provider>
    </BrowserRouter>
);

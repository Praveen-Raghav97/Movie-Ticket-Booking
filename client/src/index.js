import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import {Provider} from 'react-redux'
import { store } from './store';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "https://movie-ticket-booking-bq7os1ys5-praveen-raghavs-projects.vercel.app"
root.render(
  <React.StrictMode>
 
 
    <BrowserRouter>
    <Provider store={store} > 
    <App />
</Provider>
    
    </BrowserRouter>
  <ToastContainer/>
  </React.StrictMode>
);

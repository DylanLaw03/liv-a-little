import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './pages/home';
import { BrowserRouter, Routes, Route, Redirect} from "react-router-dom";
import { StorePage } from './pages/store';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { NavBar } from './components/navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}>
          <Route path='/' element={<HomePage />} />
          <Route path='store' element={<StorePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.module.scss';

// Components and Pages
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
<>
    <Header/>
    <Main/>
    <Footer/>
</>
)
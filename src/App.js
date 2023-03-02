import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Current from './pages/Current';
import Error404 from './pages/Error404';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <React.StrictMode>
            
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/current-employee' element={<Current />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
  );
}

export default App;

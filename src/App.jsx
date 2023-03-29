import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Home from './pages/Home';
import Current from './pages/Current';
import Error404 from './pages/Error404';
import Footer from './components/Footer';
import store from './utils/redux/store';

import './App.css';

/**
 * Main component of the application that manages the routing of the different pages
 *
 * @returns {JSX.Element} The router component
 */
function App() {
  return (
    <React.StrictMode>
            <Provider store={store} >
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/current-employee' element={<Current />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
                <Footer />
            </Router>
            </Provider>
        </React.StrictMode>
  );
}

export default App;

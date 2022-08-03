import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home';
import Categorydata from './Categorydata';
import Productdata from './Productdata';
import Showproduct from './Showproduct';
import Showcategory from './Showcategory';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
const App = () => {


    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category' element={<Categorydata />} />
                <Route exact path='/showcategory' element={<Showcategory />} />
                <Route path='/product' element={<Productdata />} />
                <Route path='/showproduct' element={<Showproduct />} />
            </Routes>


        </>
    );
}

export default App;
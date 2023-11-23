import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Head, Footer } from '../layouts/index';
import { Home } from '../pages';
import App from '../App';

function Router(props){
    return (
            <Routes>
                <Route path="/" element={<><Head /><Home /></>}/>
            </Routes>
    )
}

export default Router;
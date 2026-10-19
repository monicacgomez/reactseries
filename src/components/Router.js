import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from './Home';
import MenuSeries from './MenuSeries';
import Serie from './Serie';
import CreatePersonaje from './CreatePersonaje';
import UpdateSeriePersonaje from './UpdateSeriePersonaje';

export default class Router extends Component {
    render () {
        return (
        <BrowserRouter>
        <MenuSeries/>
        <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/series" element={<MenuSeries />} />
            <Route path= "/series/:id" element={<Serie />} />
            <Route path= "/createpersonaje/:idSerie" element={<CreatePersonaje />} />
            <Route path= "/updateseriepersonaje/:idPersonaje" element={<UpdateSeriePersonaje />} />
        </Routes>
        </BrowserRouter>
        );
    }
}
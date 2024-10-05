import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MovieDB from './MovieDB';
import ParticularMovie from './pages/ParticularMovie';

const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MovieDB />} />
            <Route path='/moviepage' element={<ParticularMovie />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

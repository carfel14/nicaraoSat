import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import MapPage from '@/pages/Map';

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='map' element ={<MapPage />} />
      </Routes>     
      </BrowserRouter>
  );
};

export default App;

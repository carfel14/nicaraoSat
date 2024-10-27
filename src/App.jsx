import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import Map from '@/components/InteractiveMap';

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='map' element ={<Map />} />
      </Routes>     
      </BrowserRouter>
  );
};

export default App;

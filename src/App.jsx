import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import MapPage from '@/pages/Map';
import MembersPage from '@/pages/MembersPage';
const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='map' element ={<MapPage />} />
        <Route path='members' element={<MembersPage />} />
      </Routes>     
      </BrowserRouter>
  );
};

export default App;

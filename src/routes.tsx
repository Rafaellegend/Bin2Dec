import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Bin2Dec from './pages/Bin2Dec';
import Header from './components/Header';

function AppRouter() {
  const [modo, setModo] = useState('bin2dec');
  return (
    <Router>
      <Header modo={modo} setModo={setModo} />
      <Routes>
        <Route path='/' element={<Bin2Dec modo={modo} />} />
      </Routes>
    </Router>
  );
}


export default AppRouter;
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Bin2Dec from './pages/Bin2Dec';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import { Theme } from './_App';

function AppRouter() {
  return (
    <Router>
      <Theme>
        <RecoilRoot>
          <Header />
          <Routes>
            <Route path='/' element={<Bin2Dec />} />
          </Routes>
        </RecoilRoot>
      </Theme>
    </Router>
  );
}


export default AppRouter;
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './index.css';

const AppRouter = () => {
  const [expiryTime, setExpiryTime] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Route
          path="/"
          exact
          render={(props) => <Home setExpiryTime={setExpiryTime} {...props} />}
        />{' '}
        <Route
          path="/redirect"
          render={(props) => (
            <Dashboard setExpiryTime={setExpiryTime} {...props} />
          )}
        />
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;

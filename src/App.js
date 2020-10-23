import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Home from './components/Home';

const AppRouter = () => {
  const [expiryTime, setExpiryTime] = useState(0);
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Route path="/" component={Home} exact={true} />
        <Route
          path="/redirect"
          render={(props) => (
            <Dashboard setExpiryTime={setExpiryTime} {...props} />
          )}
        />
      </BrowserRouter>
    </>
  );
};
export default AppRouter;

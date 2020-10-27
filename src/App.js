import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Home from './components/Home';
import './index.css';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header className="header"></Header>
        <Route path="/" exact component={Home}></Route>
        <Route path="/redirect" render={(props) => <Dashboard {...props} />} />
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;

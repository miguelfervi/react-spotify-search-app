import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Redirect from './components/Redirect';
import Header from './components/Header';
import Home from './components/Home';

class AppRouter extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <BrowserRouter>
          <div className="main">
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/redirect" component={Redirect} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
export default AppRouter;

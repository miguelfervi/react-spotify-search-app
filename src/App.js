import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;

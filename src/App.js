import react, {Component}from 'react';
import Login from './components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Email from './components/Email';
import AddEmail  from './components/AddEmail';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
      <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/send_email">
          <Email />
        </Route>
        <Route path="/add_email_acount">
          <AddEmail />
        </Route>
       
      </Switch>
    </BrowserRouter>
  </div>
);
}

export default App;

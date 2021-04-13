import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import 'fontsource-roboto';
import Email from './components/Email';
import AddEmail from './components/AddEmail';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Login from './components/login';


ReactDOM.render(
   <React.StrictMode>
    <Router>
       <Switch>
		      <Route exact path="/send_an_email" component={Email}/>
          <Route exact path="/add_email" component={AddEmail}/>
		      <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/sidebar" component={Sidebar}/>
          <Route exact path="/login" component={Login}/>
]	    </Switch>
    </Router>
      </React.StrictMode>,
  document.getElementById('root')
);


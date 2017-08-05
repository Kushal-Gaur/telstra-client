import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreateIncident from './CreateIncident.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <Switch>
        <div>
    			<Route path="/" exact  component={App} />
    			<Route path="/createIncident" component={CreateIncident}/>
        </div>
      </Switch>
    </Router>
	</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();

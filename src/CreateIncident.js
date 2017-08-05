import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class CreateIncident extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <center>
          <div style={{marginTop: '200px'}}><h2 >Create Incident........</h2>
          </div>
        </center>
      </MuiThemeProvider>
      </div>
    );
  }
  }

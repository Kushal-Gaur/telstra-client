import React, { Component } from 'react';
import $ from 'jquery';
import ViewMap from './ViewMap';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import './App.css';
import injectTapEventPlugin  from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incidents: [], dataEmpty: 0, flag: false
    };
  }
  RecallIncident = () =>{
     $.ajax({
       type: 'GET',
       url: 'http://localhost:4000/incidents',
       dataType: 'json',
       success: function(res) {
       this.setState({incidents: res, dataEmpty: res.length, flag: true });
       console.log(res)
       }.bind(this),
       async: true,
       error: function() {
      }
    });
  };
  componentDidMount = () => {
  this.RecallIncident();
  };
  render() {
         return(
           <div>
            {this.state.flag && this.state.dataEmpty === 0 ?
            <div>
              <center>
                <div style={{marginTop: '200px'}}><h2 >You are yet to create a Incident...</h2>
                  <Link to="/createIncident"><RaisedButton label="Create"
                        buttonStyle={{backgroundColor: '#5CA59F  '}}/></Link>
                </div>
              </center>
             </div> :
              <div>
              <Subheader style={{background: '#E1BEE7',
                                fontSize: '28px',
                                color: 'white',
                                marginTop: '1px',
                                marginLeft: '-7px'}}>
                                Incident</Subheader>
             <Link to="/createIncident">
             <IconButton tooltip="Add Incident" style={{float: 'right',
            marginTop: '-47px', marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
          <AddCircleOutline/>
            </IconButton>
             </Link>
             <ViewMap incidents={this.state.incidents} />
          </div>}
           </div>
           );
    }
}
export default App;

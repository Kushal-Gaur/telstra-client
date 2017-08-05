import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';

export default class MoreIncident extends Component{

constructor(props) {
    super(props);
    this.state = {
        opendia: false
    };
}
// functions for opening dialog box
openD = () =>
{
    this.setState({opendia: true});
};
closeD = () =>
{
    this.setState({opendia: false});
};
render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.closeD} />
    ];
    return (
      <MuiThemeProvider>
            <div style={{width: '100%'}}>
                        <List >
                          <ListItem
                            primaryText={this.props.incidents.IncidentId}
                            onTouchTap={this.openD}
                            rightIcon={<IconButton tooltip= "View" style={{marginRight: '20px',
                                      marginTop: '0px'}} iconStyle={{fontSize: '24px'}}>
                                      <RemoveRedEye/>
                                      </IconButton>}
                          />
                          <Divider inset={true} />
                        </List>
                        <Dialog
                            title={this.props.incidents.IncidentId}
                            actions={actions}
                            modal={false}
                            open={this.state.opendia}
                            titleStyle={{background: '#BA6694',
                                         color: 'white',
                                         marginBottom: '20px'}}
                            autoScrollBodyContent={true}>
                            ServiceAcc: {this.props.incidents.ServiceAcc} <br/> <br/>
                            IncidentId: {this.props.incidents.IncidentId} <br/> <br/>
                            IncidentType: {this.props.incidents.IncidentType} <br/> <br/>
                            Status: {this.props.incidents.Status}
                        </Dialog>
            </div>
          </MuiThemeProvider>);
        }
}

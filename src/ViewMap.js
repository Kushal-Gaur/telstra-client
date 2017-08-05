import React, { Component } from 'react';
import MoreIncident from './MoreIncident.js';

class ViewMap extends Component {
  render() {
		let mapping = this.props.incidents.map(function(incidents) {
			return(
				<MoreIncident incidents={incidents}  key={incidents._id}/>
				);
		});
	return(
		<div>
           {mapping}
		</div>
		);
	}
}

export default ViewMap;

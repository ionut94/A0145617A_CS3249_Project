import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Events } from '../imports/api/events.js';

export default class Popup extends Component {

	handleSubmit(event) {

    window.close();
  }

	render() {
		return(
			<div className="container"> 
				<table className="table table-hover">
				    <tbody>
				      <tr>
			      		<td className="col-md-2"></td>
				        <td className="col-md-2">Title:</td>
				        <td className="col-md-7">dsfsd</td>
				      </tr>
				      <tr>
			      		<td className="col-md-2"></td>
				        <td className="col-md-2">Organizer:</td>
				        <td className="col-md-7">dsfadsfasdfas</td>
				      </tr>
				      <tr>
			      		<td className="col-md-2"></td>
				        <td className="col-md-2">Tags:</td>
				        <td className="col-md-7">dsfadsfasdfas</td>
				      </tr>
				      <tr>
			      		<td className="col-md-2"></td>
				        <td className="col-md-2">Dates & Time:</td>
				        <td className="col-md-7">dsfsd</td>
				      </tr>
				      <tr>
			      		<td className="col-md-2"></td>
				        <td className="col-md-2">Venue:</td>
				        <td className="col-md-7">dsfadsfasdfas</td>
				      </tr>
				      <tr>
			      		<td className="col-md-2"></td>
				        <td className="col-md-2">Price:</td>
				        <td className="col-md-7">dsfadsfasdfas</td>
				      </tr>
				      <tr>
			      		<td className="col-md-2"></td>
				        <td className="col-md-2">Agenda:</td>
				        <td className="col-md-7">dsfadsfasdfas</td>
				      </tr>
				      <tr>
			      		<td className="col-md-2"></td>
				        <td className="col-md-2">Contact:</td>
				        <td className="col-md-7">dsfadsfasdfas</td>
				      </tr>
				      <tr>
			      		<td className="col-md-2"></td>
				        <td className="col-md-2">Hits:</td>
				        <td className="col-md-7">dsfadsfasdfas</td>
				      </tr>
				    </tbody>
				</table>
				<div className="col-sm-offset-11 col-sm-1">
				        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>
				        	<span className="glyphicon glyphicon-remove" aria-hidden="true">  </span>
							 Close</button>
				      </div>
			</div>
		)
	}
}

Popup.propTypes = {
  // This component gets the events to display through a React prop.
  // We can use propTypes to indicate it is required
  event_name: PropTypes.object,
};
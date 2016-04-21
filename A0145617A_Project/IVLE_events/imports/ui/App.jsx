import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/events.js';

import Event from './Event.jsx';

class App extends Component {

	
	searchInput(event) {
		event.preventDefault();

		const title = ReactDOM.findDOMNode(this.refs.search).value.trim();

		events.find( {event_name: title});
	}


	sortTable(event) {
		event.preventDefault();

		
	}

	renderEvents() {
		return this.props.events.map((event_name) => (
      		<Event key={event_name._id} event_name={event_name} />
    	));
	}

	render() {
		return(
			<div className="container-fluid">
				<div className="row">
  					<div className="col-md-2">
  						
						<form action="/create">
							<button type="submit" className="btn btn-primary btn-md">
							<span className="glyphicon glyphicon-plus" aria-hidden="true"> </span>
							 Create Event
							</button>
						</form>
					</div>
					<div className="col-md-8"> 
						<div id="custom-search-input">
                           	<div className="input-group col-md-12">
                	            <input type="text" className="search-query form-control" placeholder="Search" ref="search" onSubmit={this.searchInput.bind(this)}/>
                    	        <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <span className=" glyphicon glyphicon-search"></span>
                                    </button>
                                    <button className="btn btn-default" type="button">
                                        <span className="glyphicon glyphicon-repeat"></span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
					<div className="col-md-2">Total {this.props.eventCount} items</div>
				</div>
				<div id="event-table">
					<table className="table table-striped table-hover">
				    <thead>
				      <tr>
				        <th className="col-md-1">View</th>
				        <th className="col-md-5">
				        <a onClick={this.sortTable.bind(this)}>
				        Event Title
				        </a>
				        </th>
				        <th className="col-md-4">
				        <a onClick={this.sortTable.bind(this)}>
				        Event Organizers
				        </a>
				        </th>
   				        <th className="col-md-2">Event date</th>
				      </tr>
				    </thead>
				    	
				     <tbody>
				     	{this.renderEvents()}
				    </tbody>
				  </table>
				</div>
			</div>
		)
	}
}

App.propTypes = {
  events: PropTypes.array.isRequired,
  eventCount: PropTypes.number.isRequired,
};
 
export default createContainer(() => {
  return {
    events: Events.find({}, {sort: {event_title: 1}}).fetch(),
    eventCount: Events.find({}).count(),
  };
}, App);




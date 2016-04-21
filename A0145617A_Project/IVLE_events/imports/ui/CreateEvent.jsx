import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Events } from '../api/events.js';

export default class CreateEvent extends Component {
	
	handleSubmit(event) {
	    event.preventDefault();
	 
	    // Find the text field via the React ref
	    const title = ReactDOM.findDOMNode(this.refs.titles).value.trim();
	    const org = ReactDOM.findDOMNode(this.refs.organiser).value.trim();
	 
	    Events.insert({
	    	event_title: title,
	      	organizer: org,
	    });

	    window.open("/");
  	}

	render() {
		return(
			<div> 
				<form action="/" className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} >
			    	<div className="form-group">
			      		<label className="control-label col-md-3" for="text">Event Title</label>
			     		<div className="col-md-9">
			        		<input type="text" className="form-control" ref="titles" placeholder="" />
			      		</div>
			    	</div>
			    	<div className="form-group">
			      		<label className="control-label col-md-3" for="text">Organiser</label>
			     		<div className="col-md-9">
			        		<input type="text" className="form-control" ref="organiser" placeholder="" />
			      		</div>
			    	</div>
			    	<div className="form-group">
			      		<label className="control-label col-md-3" for="text">Committee</label>
			     		<div className="col-md-3">
			        		<select className="form-control" ref="committee">
							    <option value="one">NUSSU</option>
							    <option value="two">Faculty Clubs</option>
							    <option value="three">Halls of Residence</option>
							    <option value="four">Four</option>
							    <option value="five">Five</option>
							</select>
			      		</div>
			    	</div>
			    	<div className="form-group">
			      		<label className="control-label col-md-3" for="text">Category</label>
			     		<div className="col-md-3">
			        		<select className="form-control" ref="categ">
							    <option value="one">Bashes</option>
							    <option value="two">Bazars</option>
							    <option value="three">Halls of Residence</option>
							    <option value="four">Four</option>
							    <option value="five">Five</option>
							</select>
			      		</div>
			    	</div>
				    <div className="form-group">
				      	<label className="control-label col-md-3" for="text">Tags</label>
				    	<div className="col-md-9">
				     		<input type="text" className="form-control" ref="tag" placeholder="" />
				    	</div>
				    </div>

				    <div className="form-group">
				      	<label className="control-label col-md-3" for="text">Dates & Time</label>
				    	<div className="col-md-9">
				     		<input type="text" className="form-control" ref="dateandtime" placeholder="Specify the actual event schedule here." />
				    	</div>
				    </div>

				    <div className="form-group">
				      	<label className="control-label col-md-3" for="text">Venue</label>
				    	<div className="col-md-9">
				     		<input type="text" className="form-control" ref="venue" placeholder="" />
				    	</div>
				    </div>

				    <div className="form-group">
				      	<label className="control-label col-md-3" for="text">Price</label>
				    	<div className="col-md-9">
				     		<input type="text" className="form-control" ref="price" placeholder="" />
				    	</div>
				    </div>

				    <div className="form-group">
				      	<label className="control-label col-md-3" for="text">Agenda</label>
				    	<div className="col-md-9">
				     		<input type="text" className="form-control" ref="agenda" placeholder="" />
				    	</div>
				    </div>
				    <div className="form-group">
				      	<label className="control-label col-md-3" for="text">Contact</label>
				    	<div className="col-md-9">
				     		<input type="text" className="form-control" ref="tag" placeholder="" />
				    	</div>
				    </div>

				    <div className="form-group">        
				      <div className="col-sm-offset-11 col-sm-1">
				        <button type="submit" className="btn btn-primary">
				        	<span className="glyphicon glyphicon-floppy-save" aria-hidden="true">  </span>
							 Save</button>
				      </div>
				    </div>
			    
			  	</form>
			</div>
		)
	}
}
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Events } from '../imports/events.js';

export default class CreateEvent extends Component {
	
	handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const title = ReactDOM.findDOMNode(this.refs.titles).value.trim();
    const org = ReactDOM.findDOMNode(this.refs.organiser).value.trim();
    // const title = ReactDOM.findDOMNode(this.refs.committee).value.trim();

 
    Events.insert({
      event_title: title,
      organizer: org,

      // createdAt: new Date(), // current time
    });
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
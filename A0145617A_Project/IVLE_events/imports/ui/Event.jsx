import React, {Component, PropTypes} from 'react';

//this represents a single event in the table

export default class Event extends Component {

  getDetails(event) {
    event.preventDefault();

    window.open('/popup', 'name','width=600,height=400');
  }

  render() {
    return (
      <tr>
      	<td><span className="glyphicon glyphicon-eye-open" onClick={this.getDetails}></span></td>
      	<td>{this.props.event_name.event_title}</td>
      	<td>{this.props.event_name.organizer}</td>
      	<td>{this.props.event_name.date}</td>
      </tr>
    );
  }
}
 
Event.propTypes = {
  // This component gets the events to display through a React prop.
  // We can use propTypes to indicate it is required
  event_name: PropTypes.object,
};
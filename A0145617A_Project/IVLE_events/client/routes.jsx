import React from 'react';
import { mount } from 'react-mounter';

import App from '../imports/ui/App.jsx';
import CreateEvent from '../imports/ui/CreateEvent.jsx';
import Popup from './Popup.jsx';


FlowRouter.route('/', {
	name: "Event.page",
	action() {
		mount(App, { main: <App/>
		});
	}
});

FlowRouter.route('/create', {
	name: "Event.create",
	action() {
		mount(CreateEvent, { main: <CreateEvent/>
		});
	}
});

FlowRouter.route('/popup', {
	name: "Event.popup",
	action(params) {
		mount(Popup, { main: <Popup />});
	}
});


import React from 'react';
import { mount } from 'react-mounter';

import App from './App.jsx';
import CreateEvent from './CreateEvent.jsx';

FlowRouter.route('/', {
	name: "Event.page",
	action() {
		mount(App, { main: <App/>
		});
	},
});

FlowRouter.route('/create', {
	name: "Event.create",
	action() {
		mount(CreateEvent, { main: <CreateEvent/>
		});
	},
});


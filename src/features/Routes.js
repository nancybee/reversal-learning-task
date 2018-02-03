import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Trial from './Trial';

export default () => (
	<BrowserRouter>
		<App>
			<Route exact path="/" component={ Home } />
			<Route exact path="/trial" component={ Trial } />
		</App>
	</BrowserRouter>
);

import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '/reducers/root';
import Routes from '/features/Routes';
import './global.scss';
import './app.scss';

const App = () => (
	<Provider store={ createStore(rootReducer, applyMiddleware(thunk)) }>
		<Routes />
	</Provider>
);

render(
	<App />,
	document.getElementById('root')
);

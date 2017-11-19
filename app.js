var $ = React.createElement;
var { HashRouter, Route } = ReactRouterDOM;

var routes = $(Route, {
	path: '/',
	exact: true,
	component: () => $('h1', null, 'yo')
});

var router = $(HashRouter, null, routes);

ReactDOM.render(router, document.getElementById('root'));

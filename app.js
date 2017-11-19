(function (React, ReactRouterDOM, Home) {
  var $ = React.createElement;
  var { HashRouter, Route } = ReactRouterDOM;

  var routes = $(Route, {
  	path: '/',
  	exact: true,
  	component: Home
  });

  var router = $(HashRouter, null, routes);

	ReactDOM.render(router, document.getElementById('root'));

	window.app = {};
}(window.React, window.ReactRouterDOM, window.app.home));

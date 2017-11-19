(function (React, ReactRouterDOM, Home, Trial) {
  var $ = React.createElement;
  var HashRouter = ReactRouterDOM.HashRouter;
  var Route = ReactRouterDOM.Route;

  var routes = [
    $(Route, {
    	path: '/',
    	exact: true,
    	component: Home,
      key: 'home',
    }),

    $(Route, {
      path: '/trial',
      component: Trial,
      key: 'trial'
    })
  ];

  ReactDOM.render(
    $(HashRouter, null, $('div', null, routes)),
    document.getElementById('root')
  );

	window.app = {};
}(window.React, window.ReactRouterDOM, window.app.home, window.app.trial));

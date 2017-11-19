(function (React, ReactRouterDOM, Home, Trial) {
  var $ = React.createElement;
  var BrowserRouter = ReactRouterDOM.BrowserRouter;
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
    $(BrowserRouter, null, $('div', null, routes)),
    document.getElementById('root')
  );
}(window.React, window.ReactRouterDOM, window.app.Home, window.app.Trial));

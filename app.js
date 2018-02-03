(function (React, ReactRouterDOM, Home, Trial) {
  var $ = React.createElement;
  var BrowserRouter = ReactRouterDOM.BrowserRouter;
  var Route = ReactRouterDOM.Route;

  var routes = [
    $(Route, {
    	path: '/',
    	exact: true,
    	component: Home
    }),

    $(Route, {
      path: '/trial',
      component: Trial
    })
  ];

  ReactDOM.render(
    $(BrowserRouter, null, $('div', null, routes)),
    document.getElementById('root')
  );
}(window.React, window.ReactRouterDOM, window.rltApp.Home, window.rltApp.Trial));

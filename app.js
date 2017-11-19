(function (React, ReactRouterDOM, Home, Trial) {
  var $ = React.createElement;
  var BrowserRouter = ReactRouterDOM.BrowserRouter;
  var Route = ReactRouterDOM.Route;

  var routes = [
    $(Route, {
    	path: '/',
    	exact: true,
    	// component: Home,
      component: (function (props) {
        console.log('home props:', props);
        return $(ReactRouterDOM.Link, { to: '/trial' }, 'go to trial')
      })
    }),

    $(Route, {
      path: '/trial',
      // component: Trial,
      component: (function (props) {
        console.log('trial props:', props);
        return $(ReactRouterDOM.Link, { to: '/' }, 'go to Home')
      })
    })
  ];

  ReactDOM.render(
    $(BrowserRouter, null, $('div', null, routes)),
    document.getElementById('root')
  );
}(window.React, window.ReactRouterDOM, window.rltApp.Home, window.rltApp.Trial));

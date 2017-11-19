(function (React, ReactRouterDOM) {
  var $ = React.createElement;

  window.app.home = function (props) {
    var title = $('h1', null, 'Welcome to the experiment');
    var trialLink = $(
      'h1',
      null,
      $(ReactRouterDOM.Link, { to: '/trial' }, 'Click here to begin')
    );

    return $('div', null, [title, trialLink]);
  }
}(window.React, window.ReactRouterDOM));

(function (React) {
  var $ = React.createElement;

  window.app.home = function () {
    return $('h1', null, 'Welcome to the experiment. Press any key to begin');
  }
}(window.React));

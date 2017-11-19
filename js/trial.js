(function (React) {
  var $ = React.createElement;

  var circleA = $('div', { className: 'circleA', key: 'circleA' });
  var circleB = $('div', { className: 'circleB', key: 'circleB' });
  var circleContainer = $(
    'div',
    { className: 'circle-container' },
    ['trial time', circleA, circleB]
  );

  window.app.trial = function () {
    return circleContainer;
  };
}(window.React))

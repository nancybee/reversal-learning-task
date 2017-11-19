(function (React) {
  var $ = React.createElement;

  var circleA = $('div', { className: 'circleA', key: 'circleA' });
  var circleB = $('div', { className: 'circleB', key: 'circleB' });
  var circleContainer = $(
    'div',
    { className: 'circle-container' },
    ['trial time', circleA, circleB]
  );
  var cross = $('div', { className: 'cross' }, '+');

  window.rltApp.Trial = React.createClass({
    getInitialState: function () {
      return { showCross: true };
    },

    render: function () {
      console.log(this.state);
      return cross;
    }
  })
}(window.React))

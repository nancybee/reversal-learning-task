(function (React) {
  var $ = React.createElement;

  var circleA = $('div', { className: 'circleA', key: 'circleA' });
  var circleB = $('div', { className: 'circleB', key: 'circleB' });
  var circleContainer = $(
    'div',
    { className: 'circle-container' },
    [circleA, circleB]
  );
  var cross = $('div', { className: 'cross' }, '+');

  window.rltApp.Trial = React.createClass({
    getInitialState: function () {
      return { showCross: true };
    },

    componentDidMount: function () {
      var me = this;

      setTimeout(function () {
        me.setState({ showCross: false }, function () {
          console.log('showCross is false');
        });
      }, 1500);
    },

    render: function () {
      var showCross = this.state.showCross;

      return showCross ? cross : circleContainer;
    }
  })
}(window.React))

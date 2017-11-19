(function (React) {
  var $ = React.createElement;

  window.rltApp.Trial = React.createClass({
    getInitialState: function () {
      return {
        circleA: {
          baseSuccessRate: 0.75,
          currentSuccessRate: 0.75,
          pointValue: 3,
          timesChosen: 0,
        },
        circleB: {
          baseSuccessRate: 0.25,
          currentSuccessRate: 0.25,
          pointValue: 3,
          timesChosen: 0,
        },
        initials: '',
        limit: 3,
        points: 0,
        showCross: false
      };
    },

    // componentDidMount: function () {
    //   var me = this;
    //   var initials = prompt('Please enter your initials');
    //
    //   this.setState({ initials: initials }, function () {
    //     setTimeout(function () {
    //       me.setState({ showCross: false });
    //     }, 1500);
    //   });
    // },

    render: function () {
      var showCross = this.state.showCross;

      if (showCross) {
        return $('div', { className: 'cross' }, '+');
      } else {
          return $('div', { className: 'circle-container' },
            [
              $('div', {
                className: 'circleA',
                onClick: function () {
                  console.log('circle a clicked');
                }
              }),
              $('div', {
                className: 'circleB',
                onClick: function () {
                  console.log('circleB clicked');
                }
              }),
            ]
          );
      }
    }
  });
}(window.React));

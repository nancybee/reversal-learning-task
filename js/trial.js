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
          pointValue: 9,
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
      console.log('trial state:', this.state);
      var me = this;
      var showCross = this.state.showCross;

      if (showCross) {
        return $('div', { className: 'cross' }, '+');
      } else {
          return $('div', { className: 'circle-container' },
            [
              $('div', {
                className: 'circleA',
                onClick: function () {
                  me.setState(Object.assign(
                    {},
                    me.state,
                    {
                      circleA: Object.assign(
                        {},
                        me.state.circleA,
                        {
                          currentSuccessRate: me.state.circleA.baseSuccessRate,
                          timesChosen: me.state.circleA.timesChosen + 1
                        }
                      )
                    }
                  ));
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

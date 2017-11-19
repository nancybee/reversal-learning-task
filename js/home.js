(function (React, ReactRouterDOM) {
  var $ = React.createElement;
  var styles = { fontSize: '32px' };
  var instructionsText = 'In this experiment, a cross will appear on the center of the screen. When it disappears, choose either the blue circle by pressing F, or the orange circle by pressing J.';
  var instructions = $('p', null, instructionsText);
  var beginPrompt = $('p', null, 'Press any key to begin.');

  window.rltApp.Home = React.createClass({
    componentDidMount: function() {
      var history = this.props.history;

      document.addEventListener('keyup', function listenForBegin () {
        document.removeEventListener('keyup', listenForBegin);
        console.log('navigating to /trial');
        history.push('/trial');
      });
    },

    render: function () {
      return $('div', { style: styles }, [instructions, beginPrompt]);
    }
  });
}(window.React, window.ReactRouterDOM));

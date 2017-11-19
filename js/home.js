(function (React, ReactRouterDOM) {
  var $ = React.createElement;
  var styles = { fontSize: '32px' };
  var instructionsText = 'In this experiment, a cross will appear on the center of the screen. When it disappears, choose either the blue circle by pressing F, or the orange circle by pressing J.';
  var instructions = $('p', null, instructionsText);
  var beginPrompt = $('a', { href: '/trial' }, 'Click here to begin');

  window.rltApp.Home = React.createClass({
    render: function () {
      return $('div', { style: styles }, [instructions, beginPrompt]);
    }
  });
}(window.React, window.ReactRouterDOM));

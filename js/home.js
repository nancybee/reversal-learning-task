(function (React, ReactRouterDOM) {
  var $ = React.createElement;
  var instructionsText = 'In this experiment, a cross will appear on the center of the screen. When it disappears, choose either the blue circle by pressing F, or the orange circle by pressing J.';
  var styles = { fontSize: '32px' };

  window.app.Home = function (props) {
    var instructions = $('p', null, instructionsText);
    var beginPrompt = $('p', null, 'Press any key to begin.');

    // return $('div', null, [title, trialLink]);
    return $('div', { style: styles }, [instructions, beginPrompt]);
  }
}(window.React, window.ReactRouterDOM));

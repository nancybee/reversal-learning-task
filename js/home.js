(function (React, ReactRouterDOM) {
  var $ = React.createElement;
  var styles = { fontSize: '32px' };
  var beginPrompt = $('a', { href: '/trial' }, 'Click here to begin');

  window.rltApp.Home = React.createClass({
    render: function () {
      return $('div', { style: styles }, [
        'In this experiment, a ',
        $('b', null, '+ '),
        'will appear on the screen. When it disappears, ',
        'choose either the ',
        $('b', null, 'blue circle by pressing F'),
        ', ',
        'or the ',
        $('b', null, 'orange circle by pressing J'),
        '.',
        $('br'),
        $('br'),
        beginPrompt
      ]);
    }
  });
}(window.React, window.ReactRouterDOM));

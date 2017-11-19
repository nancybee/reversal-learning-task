(function (React, ReactRouterDOM) {
  var $ = React.createElement;
  var styles = { fontSize: '32px' };
  var beginPrompt = $('a', { href: '/trial' }, 'Click here to begin');

  class Home extends React.Component {
    render() {
      return (
        <div style={ styles }>
          <div>
            In this experiment, a <b>+</b> will appear on the screen. When it disappears, choose either the <b>blue circle by pressing F</b>, or the <b>orange circle by pressing J</b>.
          </div>

          <br />

          <a href="/trial">Click here to begin</a>
        </div>
      );
    }
  }

  window.rltApp.Home = Home;
}(window.React, window.ReactRouterDOM));
(function (React) {
  class Trial extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
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
        showCross: true
      };
    }

    componentDidMount() {
      const initials = prompt('Please enter your initials');

      this.setState({ initials }, () => {
        setTimeout(() => {
          this.setState({ showCross: false });
        }, 1500);
      });
    }

    render() {
      console.log('trial state, boi:', this.props);

      const { showCross } = this.state;

      if (showCross) {
        return (<div className="cross">+</div>);
      }

      return (
        <div>
            <div className="circleA" onClick={ () => console.log('circleA clicked?') }></div>
            <div className="circleB" onClick={ () => console.log('circleB clicked?') }></div>
        </div>
      );
    }
  }

  window.rltApp.Trial = Trial;
}(window.React));

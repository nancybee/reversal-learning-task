(function (React) {
  const increaseCircleSuccessRate = (rate) => rate >= 1 ? rate : rate + 0.05;

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
        // showCross: true
        showCross: false
      };

      this.handleCircleClick = this.handleCircleClick.bind(this);
    }

    // componentDidMount() {
    //   const initials = prompt('Please enter your initials');
    //
    //   this.setState({ initials }, () => {
    //     setTimeout(() => {
    //       this.setState({ showCross: false });
    //     }, 1500);
    //   });
    // }

    handleCircleClick(chosenCircle, otherCircle) {
      const { state } = this;

      this.setState({
        [chosenCircle]: {
          ...state[chosenCircle],
          timesChosen: state[chosenCircle].timesChosen + 1,
          currentSuccessRate: state[chosenCircle].baseSuccessRate
        },
        [otherCircle]: {
          ...state[otherCircle],
          currentSuccessRate: increaseCircleSuccessRate(state[otherCircle].currentSuccessRate)
        }
      });
    }

    render() {
      console.log('trial state, boi:', this.state);

      const { showCross } = this.state;

      if (showCross) {
        return (<div className="cross">+</div>);
      }

      return (
        <div>
            <div
              className="circleA"
              onClick={ () => this.handleCircleClick('circleA', 'circleB') }
            />
            <div
              className="circleB"
              onClick={ () => this.handleCircleClick('circleB', 'circleA') }
            />
        </div>
      );
    }
  }

  window.rltApp.Trial = Trial;
}(window.React));

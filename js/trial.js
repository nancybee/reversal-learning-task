(function (React, Progress) {
  const increaseCircleSuccessRate = (rate) => rate >= 1 ? 1 : rate + 0.05;

  class Trial extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        circleA: {
          baseSuccessRate: 0.75,
          // currentSuccessRate: 0.75,
          currentSuccessRate: 1,
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
        pointsEarned: 0,
        totalPoints: 0,
        showCross: true,
        showProgress: false
      };

      this.handleCircleClick = this.handleCircleClick.bind(this);
    }

    componentDidMount() {
      const initials = prompt('Please enter your initials');

      this.setState({ initials }, () => {
        setTimeout(() => {
          this.setState({ showCross: false });
        }, 1500);
      });
    }

    handleCircleClick(chosenCircle, otherCircle) {
      const { state } = this;
      const success = Math.random() <= state[chosenCircle].currentSuccessRate;
      const pointsEarned = success ? state[chosenCircle].pointValue : 0;
      const newTotalPoints = state.totalPoints + pointsEarned;

      console.log('You have earned', pointsEarned, 'points');
      console.log('Your new total is', newTotalPoints);

      this.setState({
        [chosenCircle]: {
          ...state[chosenCircle],
          timesChosen: state[chosenCircle].timesChosen + 1,
          currentSuccessRate: state[chosenCircle].baseSuccessRate
        },
        [otherCircle]: {
          ...state[otherCircle],
          currentSuccessRate: increaseCircleSuccessRate(state[otherCircle].currentSuccessRate)
        },
        showProgress: true,
        pointsEarned,
        totalPoints: newTotalPoints
      });
    }

    render() {
      console.log('trial state, boi:', this.state);

      const { showCross, showProgress, pointsEarned, totalPoints } = this.state;

      if (showCross) {
        console.log('showing cross');
        return (<div className="cross">+</div>);
      }

      if (showProgress) {
        console.log('showing progress');
        return (
          <Progress
              pointsEarned={ pointsEarned }
              totalPoints={ totalPoints }
          />
        );
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
}(window.React, window.rltApp.Progress));

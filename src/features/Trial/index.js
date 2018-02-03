import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Keyable from 'components/Keyable';
import Progress from 'features/Progress';
import Conclusion from 'features/Conclusion';

const increaseCircleSuccessRate = (rate) => rate >= 1 ? 1 : rate + 0.05;

export default class Trial extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// Initial state for the experiment.
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
			/*
			This is how many trials the experiment runs for.
			You may change this value for more or less trials.
			*/
			limit: 1,

			pointsEarned: 0,
			totalPoints: 0,
			showCross: true,
			showProgress: false,
			trialOver: false,
			history: {}
		};

		this.handleCircleClick = this.handleCircleClick.bind(this);
		this.returnToTrial = this.returnToTrial.bind(this);
	}

	componentDidMount() {
		const initials = prompt('Please enter your initials');

		this.setState({ initials }, () => {
			this.makeNewTrial();
		});
	}

	makeNewTrial() {
		const { circleA, circleB, limit } = this.state;
		const halfwayDone = Math.ceil(limit / 2);
		const trialsRan = circleA.timesChosen + circleB.timesChosen;
		const newState = {
			showCross: true
		};

		if (trialsRan === halfwayDone) {
			newState.circleA = {
				...circleA,
				baseSuccessRate: circleB.baseSuccessRate,
				currentSuccessRate: circleB.currentSuccessRate
			};

			newState.circleB = {
				...circleB,
				baseSuccessRate: circleA.baseSuccessRate,
				currentSuccessRate: circleA.currentSuccessRate
			};

			console.log('the circles are switching!');
		}

		this.setState(newState, () => {
			setTimeout(() => {
				this.setState({ showCross: false });
			}, 1500);
		});
	}

	checkTrialOver() {
		const { circleA, circleB, limit } = this.state;

		return circleA.timesChosen + circleB.timesChosen >= limit;
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
				currentSuccessRate: increaseCircleSuccessRate(
					state[otherCircle].currentSuccessRate
				)
			},
			showProgress: true,
			pointsEarned,
			totalPoints: newTotalPoints,
			history: {
				...state.history,
				[`trial${state.circleA.timesChosen + state.circleB.timesChosen + 1}`]: {
					time: 'coming soon :D',
					pointsEarned,
					circleA: {
						currentSuccessRate: state.circleA.currentSuccessRate
					},
					circleB: {
						currentSuccessRate: state.circleB.currentSuccessRate
					}
				}
			}
		});
	}

	returnToTrial() {
		if (this.checkTrialOver()) {
			console.log('the trial is over');

			this.setState({
				trialOver: true,
				showCross: false,
				showProgress: false
			});

			fetch('/results', {
				method: 'POST',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json',
				}
			})
				.then((res) => res.json())
				.then((json) => console.log('response:', json));

			return;
		}

		this.setState({ showProgress: false }, () => {
			this.makeNewTrial();
		});
	}

	render() {
		console.log('trial state:', this.state);

		const {
			circleA,
			circleB,
			initials,
			showCross,
			showProgress,
			pointsEarned,
			totalPoints,
			trialOver
		} = this.state;

		if (showCross) {
			return (<div className="cross">+</div>);
		}

		if (showProgress) {
			console.log('showing progress');
			return (
				<Keyable handleKeyup={ this.returnToTrial }>
					<Progress
						pointsEarned={ pointsEarned }
						totalPoints={ totalPoints }
					/>
				</Keyable>
			);
		}

		if (trialOver) {
			return (
				<Conclusion
					timesChosenA={ circleA.timesChosen }
					timesChosenB={ circleB.timesChosen }
					totalPoints={ totalPoints }
					initials={ initials }
				/>
			);
		}

		return (
			<div className="trial">
				<Keyable
					acceptedKey="F"
					handleKeyup={
						() => this.handleCircleClick('circleA', 'circleB')
					}
				>
					<div className="circleA" />
				</Keyable>

				<Keyable
					acceptedKey="J"
					handleKeyup={
						() => this.handleCircleClick('circleB', 'circleA')
					}
				>
					<div className="circleB" />
				</Keyable>
			</div>
		);
	}
}

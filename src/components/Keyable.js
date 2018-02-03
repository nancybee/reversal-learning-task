import { Component } from 'react';

export default class Keyable extends Component {
	constructor(props) {
		super(props);

		this.respondToKeyup = this.respondToKeyup.bind(this);
	}

	componentDidMount() {
		console.log('keyup added');
		document.addEventListener('keyup', this.respondToKeyup);
	}

	respondToKeyup({ code }) {
		const { acceptedKey, handleKeyup } = this.props;

		if (acceptedKey && `Key${acceptedKey.toUpperCase()}` !== code) {
			console.log('nope, that is', code, 'I am not listening');
			return;
		}

		console.log('calling handleKeyUp');
		handleKeyup();
	}

	componentWillUnmount() {
		console.log('cleaning up my mess');
		document.removeEventListener('keyup', this.respondToKeyup);
	}

	render() {
		return this.props.children;
	}
}

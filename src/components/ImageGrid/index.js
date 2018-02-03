import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pieces: []
		};
	}

	componentDidMount() {
		const { img } = this.props;
		const image = new Image();
		const width = 500;
		const height = 333.5;
		const pieces = [];

		image.onload = () => {
			for (let x = 0; x < 2; ++x) {
				for (let y = 0; y < 2; ++y) {
					let canvas = document.createElement('canvas');
					let context = canvas.getContext('2d');

					canvas.width = width;
					canvas.height = height;

					context.drawImage(
						image, x * width, y * height, width, height,
						0, 0, width, height
					);

					pieces.push(canvas.toDataURL());
				}
			}

			console.log('pieces:', pieces);
			this.setState({ pieces });
		};

		image.src = img;
	}

	render() {
		const { pieces } = this.state;
		const { tilesToShow } = this.props;

		const lower = Math.min(pieces.length, tilesToShow);

		return Array(lower)
			.fill()
			.map((_, index) => (<img src={ pieces[index] } />));
	}
}

ImageGrid.propTypes = {
	img: PropTypes.string,
	tilesToShow: PropTypes.number
};

export default ImageGrid;

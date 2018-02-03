import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TiledImage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pieces: []
		};
	}

	componentDidMount() {
		const image = new Image();
		const pieces = [];
		const {
			rows, columns,
			image: {
				src,
				width,
				height
			}
		} = this.props;

		image.onload = () => {
			for (let x = 0; x < rows; ++x) {
				for (let y = 0; y < columns; ++y) {
					let canvas = document.createElement('canvas');
					let context = canvas.getContext('2d');

					canvas.width = width / rows;
					canvas.height = height / columns;

					context.drawImage(image,
						x * canvas.width, y * canvas.height,
						canvas.width, canvas.height,
						0, 0,
						canvas.width, canvas.height
					);

					pieces.push(canvas.toDataURL());
				}
			}

			console.log('pieces:', pieces);
			this.setState({ pieces });
		};

		image.src = src;
	}

	render() {
		const { pieces } = this.state;
		const { tiles } = this.props;

		const lower = Math.min(pieces.length, tiles);

		return Array(lower)
			.fill()
			.map((_, index) => (<img src={ pieces[index] } />));
	}
}

TiledImage.propTypes = {
	image: PropTypes.shape({
		src: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number
	}),
	tiles: PropTypes.number,
	rows: PropTypes.number,
	columns: PropTypes.number
};

export default TiledImage;

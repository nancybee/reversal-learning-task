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
				let currentColumn = [];

				for (let y = 0; y < columns; ++y) {
					let canvas = document.createElement('canvas');
					let context = canvas.getContext('2d');

					canvas.width = width / rows;
					canvas.height = height / columns;

					context.drawImage(
						image,
						x * canvas.width, y * canvas.height,

						// width of each tile
						canvas.width, canvas.height,

						// space between each piece
						0, 0,

						canvas.width, canvas.height
					);

					currentColumn.push(canvas.toDataURL());
				}

				pieces.push(currentColumn);
			}

			console.log('will transpose this:', pieces);
			this.setState({
				pieces: pieces[0].map((col, i) => pieces.map(row => row[i]))
			});
		};

		image.src = src;
	}

	render() {
		const { pieces } = this.state;
		const { tiles } = this.props;

		console.log('dem pieces:', pieces);

		return (
			<table>
				<tbody>
					{
						pieces.map((column, columnIndex) => (
							<tr>
								{
									column
										.filter((_, rowIndex) => (
											rowIndex * columnIndex <= tiles
										))
										.map((piece) => (
											<td>
												<img src={ piece } />
											</td>
										))
								}
							</tr>
						))
					}
				</tbody>
			</table>
		);
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

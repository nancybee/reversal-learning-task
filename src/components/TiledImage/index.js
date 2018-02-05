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
		const {
			rows, columns,
			image: {
				src,
				width,
				height
			}
		} = this.props;

		const sliceImage = () => Array(rows)
			.fill()
			.map((_, rowIndex) => (
				Array(columns)
					.fill()
					.map((_, columnIndex) => {
						const canvas = document.createElement('canvas');
						const context = canvas.getContext('2d');

						canvas.width = width / columns;
						canvas.height = height / rows;

						context.drawImage(
							image,
							columnIndex * canvas.width,
							rowIndex * canvas.height,

							// width/height of each tile
							canvas.width, canvas.height,

							// space between each piece
							0, 0,

							canvas.width, canvas.height
						);

						return canvas.toDataURL();
					})
			));

		image.onload = () => {
			const pieces = sliceImage();

			console.log('these pieces:', pieces);

			this.setState({ pieces });
		};

		image.src = src;
	}

	render() {
		const { pieces } = this.state;
		const { tiles, columns } = this.props;

		const rowLimit = Math.ceil((tiles / columns) - 1);
		let columnLimit = (tiles % columns) - 1;

		if (columnLimit === -1) {
			columnLimit = columns;
		}

		return (
			<table>
				<tbody>
					{
						pieces
							.filter((_, rowIndex) => rowIndex <= rowLimit)
							.map((row, rowIndex) => (
								<tr>
									{
										row
											.filter((_, columnIndex) => (
												rowIndex < rowLimit ||
												columnIndex <= columnLimit
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

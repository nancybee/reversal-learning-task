import React from 'react';
import image from '/assets/koi-fish.png';
import TiledImage from '/components/TiledImage';

const imageObj = {
	src: image,
	width: 1000,
	height: 667
};

export default ({ pointsEarned, totalPoints }) => (
	<div className="progress" style={ { fontSize: '32px' } }>
		<p>You have earned { pointsEarned } points!</p>
		<b><p>Total points: { totalPoints }</p></b>
		<p>Press any key to continue</p>

		<TiledImage
			image={ imageObj }
			rows={ 10 }
			columns={ 7 }
			tiles={ totalPoints }
		/>
	</div>
);

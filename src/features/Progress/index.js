import React from 'react';
import image from 'assets/koi-fish.png';
import TiledImage from 'components/TiledImage';

export default ({ pointsEarned, totalPoints }) => (
	<div className="progress" style={ { fontSize: '32px' } }>
		<p>You have earned { pointsEarned } points!</p>
		<b><p>Total points: { totalPoints }</p></b>
		<p>Press any key to continue</p>

		<TiledImage img={ image } tilesToShow={ 100 } />
	</div>
);

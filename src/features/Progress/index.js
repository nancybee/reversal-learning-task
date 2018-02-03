import React from 'react';
import image from 'assets/koi-fish.png';
import ImageGrid from 'components/ImageGrid';

export default ({ pointsEarned, totalPoints }) => (
	<div className="progress" style={ { fontSize: '32px' } }>
		<p>You have earned { pointsEarned } points!</p>
		<b><p>Total points: { totalPoints }</p></b>
		<p>Press any key to continue</p>

		<ImageGrid img={ image } tilesToShow={ 100 } />
	</div>
);

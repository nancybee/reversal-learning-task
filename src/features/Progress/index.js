import React from 'react';

export default ({ pointsEarned, totalPoints }) => (
	<div className="progress" style={ { fontSize: '32px' } }>
		<p>You have earned { pointsEarned } points!</p>
		<b><p>Total points: { totalPoints }</p></b>
		<p>Press any key to continue</p>
	</div>
);

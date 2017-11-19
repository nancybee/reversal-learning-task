(function () {
  const style = { fontSize: '32px' };

  window.rltApp.Progress = ({ pointsEarned, totalPoints }) => (
      <div className="progress" style={ style }>
        <p>You have earned { pointsEarned } points!</p>
        <b><p>Total points: { totalPoints }</p></b>
        <p>Press any key to continue</p>
      </div>
  );
}(React));

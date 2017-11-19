(function () {
  window.rltApp.Progress = ({ pointsEarned, totalPoints }) => (
      <div className="progress">
        <h1>You have earned { pointsEarned } points!</h1>
        <h1>Total points: { totalPoints }</h1>
        <h1>Press any key to continue</h1>
      </div>
  );
}(React));

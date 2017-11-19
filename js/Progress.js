(function () {
  window.rltApp.Progress = ({ pointsEarned, totalPoints, handleClick }) => (
      <div className="progress">
        <h1>You have earned { pointsEarned } points!</h1>
        <h1>Total points: { totalPoints }</h1>
        <button onClick={ handleClick }>Ok</button>
      </div>
  );
}(React));

(function (React) {
  const checkPlural = (num, word) => `${num} ` + (num > 1 ? `${word}s` : word);
  const checkPluralCircle = (num) => checkPlural(num, 'time');

  window.rltApp.Conclusion = ({ timesChosenA, timesChosenB, totalPoints, initials }) => (
    <div className="conclusion">
        <h1>The experiment has concluded.</h1>

        <h3>You pressed the blue circle { checkPluralCircle(timesChosenA) } </h3>
        <h3>You pressed the orange circle { checkPluralCircle(timesChosenB) }</h3>
        <h3>You've earned { totalPoints } total points.</h3>

        <h1>Thank you for your participation, { initials }.</h1>
    </div>
  )
}(window.React))

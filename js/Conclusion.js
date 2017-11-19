(function (React) {
  const checkPlural = (num, word) => `${num} ` + (num !== 1 ? `${word}s` : word);
  const checkPluralCircle = (num) => checkPlural(num, 'time');

  window.rltApp.Conclusion = ({ timesChosenA, timesChosenB, totalPoints, initials }) => (
    <div className="conclusion" style={ { fontSize: '32px' } }>
        <p>The experiment has concluded.</p>

        <p style={ { fontSize: '24px' } }>
          You chose the <b>blue circle { checkPluralCircle(timesChosenA) }</b>
        </p>
        <p style={ { fontSize: '24px' } }>
          You chose the <b>orange circle { checkPluralCircle(timesChosenB) }</b>
        </p>

        <p>
          You've earned <b>{ totalPoints } total points</b>
        </p>
        <p>Thank you for your participation, { initials }.</p>
    </div>
  )
}(window.React))

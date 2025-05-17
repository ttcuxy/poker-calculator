function calculatePotOdds() {
  const pot = parseFloat(document.getElementById('pot').value);
  const bet = parseFloat(document.getElementById('bet').value);
  if (isNaN(pot) || isNaN(bet)) return;

  const totalPot = pot + bet;
  const odds = (bet / totalPot) * 100;

  document.getElementById('potOddsResult').innerText = `Pot Odds: ${odds.toFixed(2)}%`;
}

function calculateSPR() {
  const stack = parseFloat(document.getElementById('stack').value);
  const pot = parseFloat(document.getElementById('sprPot').value);
  if (isNaN(stack) || isNaN(pot) || pot === 0) return;

  const spr = stack / pot;
  document.getElementById('sprResult').innerText = `SPR: ${spr.toFixed(2)}`;
}

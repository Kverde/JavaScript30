const hHand = document.querySelector('.hour-hand');
const mHand = document.querySelector('.min-hand');
const sHand = document.querySelector('.second-hand');

const tick = () => {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  console.log(h, m, s);

  const hDegree = (360 * ((h % 12) / 12)) + 90;
  const mDegree = (360 * (m / 60)) + 90;
  const sDegree = (360 * (s / 60)) + 90;

  hHand.style.transform = `rotate(${hDegree}deg)`;
  mHand.style.transform = `rotate(${mDegree}deg)`;
  sHand.style.transform = `rotate(${sDegree}deg)`;
};

setInterval(tick, 1000);

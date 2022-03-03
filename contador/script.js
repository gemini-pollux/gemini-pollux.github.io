const counter = document.querySelector(".numbers");

/**
 * Pad Zero.
 * @param {number} input número
 * @returns string ou número
 */
function padZero(input) {
  return input < 10 ? "0" + input : input;
}

const params = Object.fromEntries(new URL(location).searchParams.entries());

function getDate(input) {
  const d = new Date(input);
  if (isNaN(+d)) return new Date(Date.now() + 300000);
  return d;
}

const theDate = getDate(params.date || params.data);
console.log(theDate, params.tudo, params.link);

function count() {
  const remaining = theDate - Date.now();

  const seconds  = Math.floor(remaining / 1000)       % 60;
  const minutes  = Math.floor(remaining / 60_000)     % 60;
  const hours    = Math.floor(remaining / 3600_000)   % 24;
  const days     = Math.floor(remaining / 86400_000);

  const finalString = +(days + padZero(hours) + padZero(minutes) + padZero(seconds)) + '';
  counter.textContent = finalString;

  function isEverythingEquals() {
      if (finalString.length < 2) return false;
      return finalString
      .split('')
      .every(i => i === params.tudo);
  }

  if (isEverythingEquals()) {
    console.log('tudo', params.tudo);
  }

  if (remaining <= 11000) document.body.style.background = "black";
  if (remaining <= 999) {
    clearInterval(interval);
    params.link && (window.location = params.link);
  }
}

const interval = setInterval(count, 1000);

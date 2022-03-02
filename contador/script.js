const elements = [".dias", ".horas", ".minutos", ".segundos"].map((s) => document.querySelector(s));
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
console.log(theDate, params.tudo, params.videoID);

function count() {
  const remaining = theDate - Date.now();

  const seconds  = Math.floor(remaining / 1000)       % 60;
  const minutes  = Math.floor(remaining / 60_000)     % 60;
  const hours    = Math.floor(remaining / 3600_000)   % 24;
  const days     = Math.floor(remaining / 86400_000);

  [days, hours, minutes]
    .forEach((i, index) => (elements[index].textContent = i > 0 ? i : ''));
    // regra especial pros segundos
    elements[3].textContent = padZero(seconds);

    function isEverythingEquals() {
      const string_numbers = (+counter.textContent.trim()) + '';
      if (string_numbers.length < 2) return false;
      return string_numbers
      .split('')
      .every(i => i === params.tudo);
  }

  if (isEverythingEquals()) {
    console.log('tudo', params.tudo);
  }


}

setInterval(count, 1000);

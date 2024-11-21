const zipcodeInput = document.querySelector('.selection__zipcode__input');
let zipcode = '';
const minTempInput = document.querySelector('.selection__mintemp__input');
const maxTempInput = document.querySelector('.selection__maxtemp__input');
const plantInstructions = document.querySelector(
  '.plant__instructions__content'
);
const plantInstructionsContainer = document.querySelector(
  '.plant__instructions__container'
);
const forecastContainer = document.querySelector('.forecast__container');
const gridBoxes = document.querySelectorAll('.grid__box');
const form = document.querySelector('.selection__container__form');
const headerCity = document.querySelector('.header__city');
const secondBox = document.getElementById('day__two');

plantInstructionsContainer.style.display = 'none';
forecastContainer.style.display = 'none';
// const athensLatLong = 33.9519, -83.3576
// const madisonLatLong = 33.5957, -83.4679

// const city = form.elements.city.value;

// Individual forecast grid boxes #day__one, day__two, etc.

//Functions

function fetchWeatherData(zipcode) {
  return fetch(
    `https://api.tomorrow.io/v4/weather/forecast?location=${zipcode}%20US&timesteps=1d&units=imperial&apikey=R4Ce0bEsRFRfx90UteM652oaJfkUnQYQ`
  )
    .then((response) => response.json())

    .catch((err) => {
      console.error(err);
      throw err;
    });
}

function setPlantInstructions() {
  if (secondBox.innerHTML.includes('Inside')) {
    plantInstructions.innerHTML = 'bring your plant babies inside ';
  } else if (secondBox.innerHTML.includes('Outside')) {
    plantInstructions.innerHTML = 'leave the plant babies outside ';
  } else {
    plantInstructions.innerHTML = '_______';
  }
  plantInstructionsContainer.style.display = 'block';
  forecastContainer.style.display = 'block';
}

function handleSubmit(e) {
  e.preventDefault();
  console.log('form submitted');

  fetchWeatherData(zipcode)
    .then((data) => {
      updateForecastBoxes(data);
      setPlantInstructions();
    })
    .catch((error) => {
      console.error(error);
    });
}

function updateForecastBoxes(data) {
  console.log(data);
  const dailyData = data.timelines.daily;
  console.log('dailyData', dailyData);
  for (let i = 0; i < gridBoxes.length; i++) {
    const minTemp = Number(form.elements.mintemp.value);
    const maxTemp = Number(form.elements.maxtemp.value);
    const forecastMinTemp = Math.floor(dailyData[i].values.temperatureMin);
    const forecastMaxTemp = Math.floor(dailyData[i].values.temperatureMax);
    const dateString = dailyData[i].time;
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${month.toString()}/${day.toString()}`;
    let instructions = '';

    if (forecastMinTemp < minTemp || forecastMaxTemp > maxTemp) {
      instructions = '🏠 Inside';
    } else {
      instructions = '🌛 Outside';
    }

    console.log(
      'info for box ',
      'formax',
      forecastMaxTemp,
      'max',
      maxTemp,
      'formin',
      forecastMinTemp,
      'min',
      minTemp,
      'instructions',
      instructions
    );

    gridBoxes[i].innerHTML =
      ` ${formattedDate} <p class="day__instructions">${instructions}</p><span class="forecast__minmax">${forecastMinTemp}°–${forecastMaxTemp}°</span>
          `;
  }
}

// Event listeners
zipcodeInput.addEventListener('change', () => {
  zipcode = zipcodeInput.value;
  console.log('zipcode is ', zipcode);
  return zipcode;
});

minTempInput.addEventListener('change', () => {
  let minTemp = minTempInput.value;
  console.log('min temp is ', minTemp);
  return minTemp;
});

maxTempInput.addEventListener('change', () => {
  let maxTemp = maxTempInput.value;
  console.log('max temp is ', maxTemp);
  return maxTemp;
});

form.addEventListener('submit', handleSubmit);

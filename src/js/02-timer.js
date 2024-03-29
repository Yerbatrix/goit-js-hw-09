import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
let timerDays = document.querySelector('[data-days]');
let timerHours = document.querySelector('[data-hours]');
let timerMinutes = document.querySelector('[data-minutes]');
let timerSeconds = document.querySelector('[data-seconds]');
let selectedDate = '';
let currentDate = new Date();
let countdownInterval;

datetimePicker.classList.add('picker');
startButton.classList.add('startbtn');

startButton.setAttribute('disabled', true);

flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    currentDate = new Date();
    selectedDate = new Date(selectedDates[0]);
    if (selectedDate < currentDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startButton.setAttribute('disabled', true);
      clearInterval(countdownInterval);
    } else {
      startButton.removeAttribute('disabled');
      Notiflix.Notify.success('Date accepted. Press Start to countdown.');
    }
  },
});

startButton.addEventListener('click', () => {
  Notiflix.Notify.info('So it begins!');
  startButton.setAttribute('disabled', true);
  countdownInterval = setInterval(() => {
    currentDate = new Date();
    convertMs(selectedDate - currentDate);
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  if (ms <= 0) {
    clearInterval(countdownInterval);
  }
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  timerDays.textContent = addLeadingZero(days);
  timerHours.textContent = addLeadingZero(hours);
  timerMinutes.textContent = addLeadingZero(minutes);
  timerSeconds.textContent = addLeadingZero(seconds);

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(countdownInterval);
    Notiflix.Notify.info('Finally! The time has come!');
  }
}

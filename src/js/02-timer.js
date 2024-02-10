import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const datetimePicker = document.querySelector('#datetime-picker');

const startButton = document.querySelector('[data-start]');
let timerDays = document.querySelector('[data-days]');
let timerHours = document.querySelector('[data-hours]');
let timerMinutes = document.querySelector('[data-minutes]');
let timerSeconds = document.querySelector('[data-seconds]');
let selectedDate = '';
let currentDate = '';
let countdownInterval;

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
      window.alert('Please choose a date in the future');
      startButton.setAttribute('disabled', true);
    } else {
      startButton.removeAttribute('disabled');
    }
  },
});

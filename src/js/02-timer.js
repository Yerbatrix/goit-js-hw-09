import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const datetimePicker = document.querySelector('#datetime-picker');

flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

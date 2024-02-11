const form = document.querySelector('.form');
const delay = form.elements.delay.value;
const step = form.elements.step.value;
const amount = form.elements.amount.value;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  for (let i = 1; i <= amount; i += 1) {
    let furtherDelay = delay + (i - 1) * step;
    createPromise(i, furtherDelayDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

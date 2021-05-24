import '../styles.css';

const refs = {
    timer: document.querySelector('#timer-1'),
    clockDays: document.querySelector('[data-value="days"]'),
  clockHours: document.querySelector('[data-value="hours"]'),
  clockMins: document.querySelector('[data-value="mins"]'),
  clockSecs: document.querySelector('[data-value="secs"]')
};

const timer = {
    finish() {
        const finishTime = new Date('Jul 17, 2021');

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = finishTime - currentTime;
            const time = getTimeComponents(deltaTime);
            // console.log(currentTime - finishTime);
            // console.log(`${days}:${hours}:${mins}:${secs}`);
            updateClockface(time);
        }, 1000);
    },
};

// new CountdownTimer({
// //   selector: '#timer-1',
// //   targetDate: new Date('Jul 17, 2019'),
// // });
    
timer.finish();

// выводит значения таймера в двузначном виде
function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
}

function updateClockface({ days, hours, mins, secs }) {
     refs.clockDays.textContent = `${days}`;
  refs.clockHours.textContent = `${hours}`;
  refs.clockMins.textContent = `${mins}`;
  refs.clockSecs.textContent = `${secs}`;
    // refs.timer.textContent = `${days}:${hours}:${mins}:${secs}`;
}
import '../styles.css';

const refs = {
    // timer: document.querySelector('#timer-1'),
    clockDays: document.querySelector('[data-value="days"]'),
  clockHours: document.querySelector('[data-value="hours"]'),
  clockMins: document.querySelector('[data-value="mins"]'),
  clockSecs: document.querySelector('[data-value="secs"]')
};

class CountdownTimer {
    constructor({ onCheck, targetDate }) {
    this.onCheck = onCheck;
    this.targetDate = targetDate;
    this.finish();
}
    
    finish() {
        // const finishTime = new Date('Jul 17, 2021');

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
            // console.log(currentTime - finishTime);
            // console.log(`${days}:${hours}:${mins}:${secs}`);
            this.onCheck(time);
        }, 1000);
    }
    

getTimeComponents(time) {
    /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
}

// выводит значения таймера в двузначном виде
pad(value) {
    return String(value).padStart(2, '0');
}
}

const Timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2025'),
    onCheck: updateClockface,
});

function updateClockface({ days, hours, mins, secs }) {
     refs.clockDays.textContent = `${days}`;
  refs.clockHours.textContent = `${hours}`;
  refs.clockMins.textContent = `${mins}`;
  refs.clockSecs.textContent = `${secs}`;
    // refs.timer.textContent = `${days}:${hours}:${mins}:${secs}`;
}
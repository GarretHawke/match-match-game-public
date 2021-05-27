import { createDomNode } from '@/common';
import styles from './timer.scss';

export default class Timer {
  timer: HTMLElement;
  stopWatch: NodeJS.Timeout;

  constructor() {
    this.timer = createDomNode(this.timer, 'div', styles['timer']);
    this.timer.innerText = '00:00';

    let milliseconds = 0;

    const startWatch = () => {
      this.stopWatch = setInterval(() => {
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);

        this.timer.innerText =
        ('0' + dateTimer.getMinutes()).slice(-2) + ':' +
        ('0' + dateTimer.getSeconds()).slice(-2);

        let timeOfWin = String(dateTimer.getMinutes() * 60 + dateTimer.getSeconds());
        localStorage.setItem('time-of-win', timeOfWin);
      }, 10);
    }

    const stopButton = document.getElementById('stop-button');

    setTimeout(() => {
      this.timer.classList.add('active');
      startWatch();
    }, 30000);

    stopButton?.addEventListener('click', () => {
      if (this.timer.classList.contains('active')) {
        this.timer.classList.remove('active');
        clearInterval(this.stopWatch);
      } else {
        this.timer.classList.add('active');
        startWatch();
      }
    });
  }

  getTimer(): HTMLElement {
    return this.timer;
  }

  stopGame(): void {
    const newTime = localStorage.getItem('time-of-win');
    const newTimeStr = String(newTime);
    localStorage.clear();
    localStorage.setItem('new-time', newTimeStr);
    clearInterval(this.stopWatch);
  }
}

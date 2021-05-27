import { createDomNode } from '@/common';
import styles from './timer.scss';

export default class Timer {
  timer: HTMLElement;
  stopWatch: NodeJS.Timeout;
  timeOfWin: string;

  constructor() {
    this.timer = createDomNode(this.timer, 'div', styles['timer']);
    this.timer.innerText = '00:00';

    let milliseconds = 0;
    //let stopWatch: NodeJS.Timeout;

    const startWatch = () => {
      this.stopWatch = setInterval(() => {
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);

        this.timeOfWin =
        ('0' + dateTimer.getMinutes()).slice(-2) + ':' +
        ('0' + dateTimer.getSeconds()).slice(-2);

        this.timer.innerText =
        ('0' + dateTimer.getMinutes()).slice(-2) + ':' +
        ('0' + dateTimer.getSeconds()).slice(-2)
      }, 10);
    }

    const stopButton = document.getElementById('stop-button');

    setTimeout(() => {
      this.timer.classList.add('active');
      startWatch();
    }, 5000);

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

  stopGame(): string {
    clearInterval(this.stopWatch);
    return this.timeOfWin;
  }
}

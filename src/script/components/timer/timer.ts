import { createDomNode } from '@/common';
import styles from './timer.scss';

export default class Timer {
  timer: HTMLElement;

  getTimer(): HTMLElement {
    this.timer = createDomNode(this.timer, 'div', styles['timer']);
    this.timer.innerText = '00:00';

    let milliseconds = 0;
    let stopWatch: NodeJS.Timeout;

    const startWatch = () => {
      //this.timer.classList.toggle('active');
      stopWatch = setInterval(() => {
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);
        this.timer.innerText =
        ('0' + dateTimer.getMinutes()).slice(-2) + ':' +
        ('0' + dateTimer.getSeconds()).slice(-2)
      }, 10);
    }

    this.timer.addEventListener('click', () => {
      if (this.timer.classList.contains('active')) {
        this.timer.classList.remove('active');
        clearInterval(stopWatch);
      } else {
        this.timer.classList.add('active');
        startWatch();
      }
    });

    return this.timer;
  }
}

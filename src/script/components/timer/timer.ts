import { createDomNode } from '@/common';
import styles from './timer.scss';

export default class Timer {
  timer: HTMLElement;

  getTimer(): HTMLElement {
    this.timer = createDomNode(this.timer, 'div', styles['timer']);
    this.timer.innerText = '00:00';

    return this.timer;
  }
}

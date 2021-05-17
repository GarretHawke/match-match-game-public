import { createDomNode } from '@/common';
import styles from './start-button.scss';

export class StartButton {
  button: HTMLElement;

  getButton(): HTMLElement {
    this.button = createDomNode(this.button, 'button', styles['start-button']);
    this.button.innerText = 'stop game';

    return this.button;
  }
}

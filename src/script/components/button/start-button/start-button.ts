import { createDomNode } from '@/common';
import styles from './start-button.scss';

export class StartButton {
  button: HTMLElement;

  getButton(): HTMLElement {
    this.button = createDomNode(this.button, 'button', styles['start-button']);
    this.button.id = 'start-button';
    this.button.innerText = 'start game';

    return this.button;
  }
}

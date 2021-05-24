import { createDomNode } from '../../../../../common';
import styles from './start-button.scss';

export class StartButton {
  button: HTMLElement;

  constructor() {
    this.button = createDomNode(this.button, 'button', styles['start-button']);
    this.button.id = 'start-button';
  }

  getButton(): HTMLElement {
    /* this.button = createDomNode(this.button, 'button', styles['start-button']);
    this.button.id = 'start-button'; */
    this.button.innerText = 'register new player';

    return this.button;
  }
}

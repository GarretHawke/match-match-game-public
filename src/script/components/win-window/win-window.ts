import { createDomNode } from '@/common';
import styles from './win-window.scss';
import Timer from '../timer';
import stopGame from '../timer';

export class WinWindow {
  windowContainer: HTMLElement;
  cover: HTMLElement;
  window: HTMLElement;
  closeButton: HTMLElement;
  timeOfWin: string;

  constructor(){
    this.windowContainer = createDomNode(this.windowContainer, 'div', styles['window-container']);
    this.cover = createDomNode(this.cover, 'div', styles['cover']);
    this.window = createDomNode(this.window, 'div', styles['window']);
    this.closeButton = createDomNode(this.closeButton, 'button', styles['close-button']);
    this.closeButton.innerText = 'ok';
    this.window.innerText = `Congratulations! You successfully found all matches`;
    this.window.append(this.closeButton);
    this.windowContainer.append(this.cover, this.window);

    this.closeButton.addEventListener('click', () => this.closeWindow());
  }

  getWindow(): HTMLElement {
    return this.windowContainer;
  }

  showWindow(): void {
    this.windowContainer.style.display = 'block';
  }

  closeWindow(): void {
    this.windowContainer.style.display = 'none';
  }
}

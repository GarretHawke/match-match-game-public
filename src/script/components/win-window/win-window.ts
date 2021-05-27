import { changeUrl, createDomNode } from '@/common';
import customButton from '../button';
import styles from './win-window.scss';

export class WinWindow {
  windowContainer: HTMLElement;
  cover: HTMLElement;
  window: HTMLElement;
  closeButton: HTMLElement;

  constructor(){
    this.windowContainer = createDomNode(this.windowContainer, 'div', styles['window-container']);
    this.cover = createDomNode(this.cover, 'div', styles['cover']);
    this.window = createDomNode(this.window, 'div', styles['window']);
    this.closeButton = createDomNode(this.closeButton, 'button', styles['close-button']);
    this.closeButton.innerText = 'ok';
  }

  getWindow(): HTMLElement {
    return this.windowContainer;
  }

  showWindow(): void {
    const timeOfWin = Number(String(localStorage.getItem('new-time')));
    const clicks = Number(String(localStorage.getItem('clicks')));
    const wrongClicks = Number(String(localStorage.getItem('wrong-clicks')));

    const score = (clicks - wrongClicks) * 100 - timeOfWin * 10;
    this.window.innerText = `Congratulations! You successfully found all matches in ${timeOfWin}s. Your score: ${score} `;
    this.window.append(this.closeButton);
    this.windowContainer.append(this.cover, this.window);
    this.closeButton.addEventListener('click', () => this.closeWindow());
    this.windowContainer.style.display = 'block';
  }

  closeWindow(): void {
    this.windowContainer.style.display = 'none';
  }
}

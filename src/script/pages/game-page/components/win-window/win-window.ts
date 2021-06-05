import { createDomNode } from '@/common';
import customButton from '@/components/button';
import { BestScorePage } from '@/pages';
import DataBase from '@/shared/dataBase';
import delay from '@/shared/delay';

import styles from './win-window.scss';

export default class WinWindow {
  windowContainer: HTMLElement;

  cover: HTMLElement;

  window: HTMLElement;

  textWin: HTMLElement;

  closeButton: HTMLElement;

  bestScorePage: BestScorePage;

  timeOfWin: number;

  clicks: number;

  wrongClicks: number;

  score: number;

  iDB: DataBase;

  private routing: () => void;

  constructor() {
    this.bestScorePage = new BestScorePage();

    this.iDB = new DataBase();
    this.iDB.init('garrethawke');

    this.windowContainer = createDomNode(this.windowContainer, 'div', styles['window-container']);
    this.cover = createDomNode(this.cover, 'div', styles['cover']);
    this.window = createDomNode(this.window, 'div', styles['window']);
    this.textWin = createDomNode(this.textWin, 'span', styles['text-win']);

    this.closeButton = customButton(
      'Score',
      this.clickHandlerScore.bind(this),
      styles['close-button'],
    );

    this.closeButton.innerText = 'ok';

    this.window.append(this.textWin, this.closeButton);
    this.windowContainer.append(this.cover, this.window);
  }

  getWindow(): HTMLElement {
    return this.windowContainer;
  }

  clickHandlerScore(): void {
    this.closeWindow();
  }

  showWindow(): void {
    this.timeOfWin = Number(String(localStorage.getItem('new-time')));
    this.clicks = Number(String(localStorage.getItem('clicks')));
    this.wrongClicks = Number(String(localStorage.getItem('wrong-clicks')));

    this.score = (this.clicks - this.wrongClicks) * 100 - this.timeOfWin * 10;
    if (this.score < 0) {
      this.score = 0;
    }

    const writeToBase = async () => {
      await delay(200);

      const user = {
        firstName: localStorage.getItem('name'),
        lastName: localStorage.getItem('surname'),
        email: localStorage.getItem('email'),
        score: this.score,
        avatar: localStorage.getItem('avatar'),
      };

      await this.iDB.write('scoreCollection', user);
    };

    writeToBase();

    this.textWin.innerText = `Congratulations! You successfully found all matches in ${this.timeOfWin}s. Your score: ${this.score} `;
    this.windowContainer.style.display = 'block';
  }

  closeWindow(): void {
    this.windowContainer.style.display = 'none';
  }
}

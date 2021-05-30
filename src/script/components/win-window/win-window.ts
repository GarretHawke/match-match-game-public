import { changeUrl, createDomNode } from '@/common';
import { BestScorePage } from '@/pages';
import { DataBase } from '@/shared/dataBase';
import customButton from '../button';
import styles from './win-window.scss';

export class WinWindow {
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

  constructor(){

    this.bestScorePage = new BestScorePage();

    this.iDB = new DataBase();
    this.iDB.init('GarretHawke');

    this.windowContainer = createDomNode(this.windowContainer, 'div', styles['window-container']);
    this.cover = createDomNode(this.cover, 'div', styles['cover']);
    this.window = createDomNode(this.window, 'div', styles['window']);
    this.textWin = createDomNode(this.textWin, 'span', styles['text-win']);

    this.closeButton = customButton('Score', this.clickHandlerScore.bind(this), styles['close-button']);
    //this.closeButton = createDomNode(this.closeButton, 'button', styles['close-button']);

    this.closeButton.innerText = 'ok';

    this.window.append(this.textWin, this.closeButton);
    this.windowContainer.append(this.cover, this.window);
  }

  getWindow(): HTMLElement {
    return this.windowContainer;
  }

  clickHandlerScore(): void {
    this.closeWindow();
    //this.rout();
  }

 /*  rout(): void {
    const root = document.getElementById('root');
    if (root) {
      this.bestScorePage.initPage(root, this.rout.bind(this));
    }
  } */

  showWindow(): void {

    this.timeOfWin = Number(String(localStorage.getItem('new-time')));
    this.clicks = Number(String(localStorage.getItem('clicks')));
    this.wrongClicks = Number(String(localStorage.getItem('wrong-clicks')));

    this.score = (this.clicks - this.wrongClicks) * 100 - this.timeOfWin * 10;

    //this.iDB.write('scoreCollection', this.score);
    this.textWin.innerText = `Congratulations! You successfully found all matches in ${this.timeOfWin}s. Your score: ${this.score} `;
    localStorage.setItem('score', String(this.score));
    this.windowContainer.style.display = 'block';
  }

  closeWindow(): void {
    this.windowContainer.style.display = 'none';
  }
}

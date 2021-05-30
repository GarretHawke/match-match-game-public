import { changeUrl, createDomNode } from '@/common';
import { DataBase } from '@/shared/dataBase';
import customButton from '../button';
import styles from './win-window.scss';

export class WinWindow {
  windowContainer: HTMLElement;
  cover: HTMLElement;
  window: HTMLElement;
  textWin: HTMLElement;
  closeButton: HTMLElement;

  timeOfWin: number;
  clicks: number;
  wrongClicks: number;
  score: number;

  iDB: DataBase;

  public routing: () => void;

  constructor(){
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

  getWindow(routing: () => void): HTMLElement {
    this.routing = routing;
    return this.windowContainer;
  }

  clickHandlerScore(): void {
    this.closeWindow();
    //this.navigate('/best-score');
  }

  navigate(pathName: string): void {
    changeUrl(pathName);
    this.routing();
  }

  showWindow(): void {

    this.timeOfWin = Number(String(localStorage.getItem('new-time')));
    this.clicks = Number(String(localStorage.getItem('clicks')));
    this.wrongClicks = Number(String(localStorage.getItem('wrong-clicks')));

    this.score = (this.clicks - this.wrongClicks) * 100 - this.timeOfWin * 10;

    //this.iDB.write('scoreCollection', this.score);
    this.textWin.innerText = `Congratulations! You successfully found all matches in ${this.timeOfWin}s. Your score: ${this.score} `;

    this.windowContainer.style.display = 'block';
  }

  closeWindow(): void {
    this.windowContainer.style.display = 'none';
  }
}

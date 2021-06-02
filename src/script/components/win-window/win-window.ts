import { changeUrl, createDomNode } from '@/common';
import { BestScorePage } from '@/pages';
import { DataBase } from '@/shared/dataBase';
import { MyRecord } from '@/shared/My-record';
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

  private routing: () => void;

  constructor(){

    this.bestScorePage = new BestScorePage();

    this.iDB = new DataBase();
    this.iDB.init('garrethawke');

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
    /* this.bestScorePage = new BestScorePage();

    const rootDiv = document.getElementById('root');
    if (rootDiv) {
      this.bestScorePage.initPage(rootDiv, this.routing.bind(this));
    } */
  }

  showWindow(): void {




    this.timeOfWin = Number(String(localStorage.getItem('new-time')));
    this.clicks = Number(String(localStorage.getItem('clicks')));
    this.wrongClicks = Number(String(localStorage.getItem('wrong-clicks')));

    this.score = (this.clicks - this.wrongClicks) * 100 - this.timeOfWin * 10;

    setTimeout (async () => {
      let arr = await this.iDB.readAll<MyRecord>('scoreCollection');

      let user = {
        firstName: localStorage.getItem('name'),
        lastName: localStorage.getItem('surname'),
        email: localStorage.getItem('email'),
        score: this.score,
      }

      this.iDB.write('scoreCollection', user);
    }, 200);




    this.textWin.innerText = `Congratulations! You successfully found all matches in ${this.timeOfWin}s. Your score: ${this.score} `;
    //localStorage.setItem('score', String(this.score));
    this.windowContainer.style.display = 'block';
  }

  closeWindow(): void {
    this.windowContainer.style.display = 'none';
  }
}

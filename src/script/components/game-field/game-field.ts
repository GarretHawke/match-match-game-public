import { createDomNode } from '@/common';
import { Application } from '../application';
import  { Card } from '../card';
import { CardsField }  from '../cards-field';
import { delay } from '../functions/delay';
import Timer from '../timer';
import styles from './game-field.scss';

export class GameField {
  gameField: HTMLElement;
  appField: HTMLElement;
  timer: HTMLElement;

  getGameField(): HTMLElement {
    this.gameField = createDomNode(this.gameField, 'div', styles['game-field']);
    /* this.timer = new Timer().getTimer();
    this.gameField.append(this.timer); */
    this.appField = createDomNode(this.appField, 'div', styles['app-field']);
    this.appField.id = 'app';
    this.gameField.append(this.appField);

    setTimeout(() => {
      const appElement = document.getElementById('app');

      if (!appElement) {
        throw Error('App root element not found');
      }
      console.log('success');

      new Application(appElement).start();
    }, 1000);

    return this.gameField;
  }
}

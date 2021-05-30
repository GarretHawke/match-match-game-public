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

  private routing: () => void;

  getGameField(routing: () => void): HTMLElement {
    this.routing = routing;
    this.gameField = createDomNode(this.gameField, 'div', styles['game-field']);
    this.appField = createDomNode(this.appField, 'div', styles['app-field']);
    this.appField.id = 'app';
    this.gameField.append(this.appField);

    setTimeout(() => {
      const appElement = document.getElementById('app');

      if (!appElement) {
        throw Error('App root element not found');
      }
      console.log('success');

      new Application(appElement).start(routing);
    }, 1000);

    return this.gameField;
  }
}

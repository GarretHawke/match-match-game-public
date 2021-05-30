import { createDomNode } from '@/common';
import { Application } from '../application';
import styles from './game-field.scss';

export class GameField {
  gameField: HTMLElement;
  appField: HTMLElement;
  timer: HTMLElement;

  getGameField(): HTMLElement {
    this.gameField = createDomNode(this.gameField, 'div', styles['game-field']);
    this.appField = createDomNode(this.appField, 'div', styles['app-field']);
    this.appField.id = 'app';
    this.gameField.append(this.appField);

    setTimeout(() => {
      const appElement = document.getElementById('app');

      if (!appElement) {
        throw Error('App root element not found');
      }

      new Application(appElement).start();
    }, 1000);

    return this.gameField;
  }
}

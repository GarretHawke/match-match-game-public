import { createDomNode } from '@/common';
import delay from '@/shared/delay';

import Application from '../application';

import styles from './game-field.scss';

export default class GameField {
  gameField: HTMLElement;

  appField: HTMLElement;

  timer: HTMLElement;

  getGameField(): HTMLElement {
    this.gameField = createDomNode(this.gameField, 'div', styles['game-field']);
    this.appField = createDomNode(this.appField, 'div', styles['app-field']);
    this.appField.id = 'app';
    this.gameField.append(this.appField);

    async function showCards() {
      await delay(500);
      const appElement = document.getElementById('app');
      await new Application(appElement).start();
    }

    showCards();

    return this.gameField;
  }
}

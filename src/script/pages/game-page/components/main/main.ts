import { createDomNode } from '@/common';

import GameField from '../game-field';

import styles from './main.scss';

export default class Main {
  main: HTMLElement;

  mainContainer: HTMLElement;

  gameField: GameField;

  getMain(): HTMLElement {
    this.main = createDomNode(this.main, 'main', styles['main']);
    this.mainContainer = createDomNode(this.mainContainer, 'div', styles['main-container']);

    this.gameField = new GameField();

    this.mainContainer.append(this.gameField.getGameField());
    this.main.append(this.mainContainer);

    return this.main;
  }
}

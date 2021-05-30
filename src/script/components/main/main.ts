import { createDomNode } from '@/common';
import styles from '@/components/main/main.scss';
import { GameField } from '../game-field';

export default class Main {
  main: HTMLElement;
  mainContainer: HTMLElement;
  gameField: GameField;

  private routing: () => void;

  getMain(routing: () => void): HTMLElement {
    this.routing = routing;
    this.main = createDomNode(this.main, 'main', styles['main']);
    this.mainContainer = createDomNode(this.mainContainer, 'div', styles['main-container']);

    this.gameField = new GameField();

    this.mainContainer.append(this.gameField.getGameField(this.routing));
    this.main.append(this.mainContainer);

    return this.main;
  }
}

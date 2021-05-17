import { createDomNode } from '@/common';
import Card from '../card';
import CardsField from '../cards-field';
import Timer from '../timer';
import styles from './game-field.scss';

export class GameField {
  gameField: HTMLElement;

  getGameField(): HTMLElement {
    this.gameField = createDomNode(this.gameField, 'div', styles['game-field']);
    this.gameField.append(new Timer().getTimer());
    this.gameField.append(new CardsField().getCardsField());

    return this.gameField;
  }
}

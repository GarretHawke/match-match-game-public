import { createDomNode } from '@/common';
import delay from '@/shared/delay';

import Card from '../card';

import styles from './cards-field.scss';

const SHOW_TIME = 30000;

export default class CardsField {
  private cards: Card[] = [];

  cardsField: HTMLElement;

  constructor() {
    this.cardsField = createDomNode(this.cardsField, 'div', styles['cards-field']);
    this.cardsField.id = 'card-field';
  }

  getCardsField(): HTMLElement {
    return this.cardsField;
  }

  clear(): void {
    this.cards = [];
    this.cardsField.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach(card => {
      this.cardsField.append(card.getCard());
    });
    const flipBack = async () => {
      await delay(SHOW_TIME);
      this.cards.forEach(card => card.flipToBack());
    };
    flipBack();
  }
}

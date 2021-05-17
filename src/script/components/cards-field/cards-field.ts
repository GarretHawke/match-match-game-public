import { createDomNode } from '@/common';
import Card from '../card';
import styles from './cards-field.scss';

const SHOW_TIME = 5000;

export default class CardsField {
  cardsField: HTMLElement;
  cards: Card[] = [];

  getCardsField(): HTMLElement {
    this.cardsField = createDomNode(this.cardsField, 'div', styles['cards-field']);
    //this.cardsField.append(new Card().getCard());

    return this.cardsField;
  }

  clearCardsField(): void {
    this.cards = [];
    this.cardsField.innerHTML = '';
  }

  addCardsToField(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => {
      this.cardsField.append(card.getCard());
    });
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME);
  }
}

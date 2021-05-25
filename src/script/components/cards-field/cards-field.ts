//import './cards-field.scss';
import { createDomNode } from '@/common';
import styles from './cards-field.scss';
// import { BaseComponent } from '@/common/base-component';
import { Card }  from '../card';

const SHOW_TIME = 5000;

export class CardsField {
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
    this.cards.forEach((card) => {
      this.cardsField.append(card.getCard());
    });
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME);
  }
}

/* export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => {
      this.element.appendChild(card.element);
    });
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME);
  }
} */

import { createDomNode } from '@/common';
import { BaseComponent } from '@/common/base-component';
import { Card }  from '../card';
import { CardsField }  from '../cards-field';
import { delay } from '../functions/delay';
import './game.scss';

const FLIP_DELAY = 1000;

export class Game extends BaseComponent {
  private cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  /* constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  } */

  initGame(images: string[]): void {
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);

    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}

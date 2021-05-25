import { createDomNode } from '@/common';
// import { BaseComponent } from '@/common/base-component';
import { Card }  from '../card';
import { CardsField }  from '../cards-field';
import { delay } from '../functions/delay';
// import './game.scss';
import styles from './game.scss';

const FLIP_DELAY = 2000;

export class Game {
  private cardsField: CardsField;
  private activeCard?: Card;
  private isAnimation = false;
  game: HTMLElement;

  constructor() {
    this.game = createDomNode(this.game, 'div', styles['game']);
    this.cardsField = new CardsField();
    this.game.append(this.cardsField.getCardsField());
  }

  getGame(): HTMLElement {
    return this.game;
  }

  initGame(images: string[]): void {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.getCard().addEventListener('click', () => {
        console.log('CARD');
        this.cardHandler(card)});
    });

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation)  {
      return;
    }
    if (!card.isFlipped) {
      return;
    }

    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      console.log('NO');

     /*  setTimeout(() => {
        card.highLightRedCard();
        this.activeCard?.highLightRedCard();
      }, 300); */

      await delay(100);
      await Promise.all([card.highLightRedCard(), this.activeCard.highLightRedCard()]);

      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack(), [await delay(200), await Promise.all([this.activeCard.removeCover(), card.removeCover()])]]);



    } else {

      await delay(100);
      await Promise.all([card.highLightGreenCard(), this.activeCard.highLightGreenCard()]);


      /* setTimeout(() => {
        card.highLightGreenCard();
        this.activeCard?.highLightGreenCard();
      }, 300); */

      console.log('YES!!!');
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}

/* export class Game extends BaseComponent {
  private cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

   constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.getCardsField());
  }

  initGame(images: string[]): void {
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.getCardsField());

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
} */

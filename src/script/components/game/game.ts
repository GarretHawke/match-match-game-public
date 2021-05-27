import { createDomNode } from '@/common';
import { Card }  from '../card';
import { CardsField }  from '../cards-field';
import { delay } from '../functions/delay';
import Timer from '../timer';
import { WinWindow } from '../win-window';
import styles from './game.scss';

const FLIP_DELAY = 2000;

export class Game {
  private cardsField: CardsField;
  private activeCard?: Card;
  private isAnimation = false;
  game: HTMLElement;
  window: WinWindow;
  timer: Timer;

  constructor() {
    this.game = createDomNode(this.game, 'div', styles['game']);
    this.cardsField = new CardsField();
    this.timer = new Timer();
    this.window = new WinWindow();
    this.game.append(this.cardsField.getCardsField(), this.timer.getTimer(), this.window.getWindow());
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




    let flippedCardsQuantity;
    setTimeout(() => {
      const gameStatus = setInterval(() => {
        const FLIPPED_CARDS = document.querySelectorAll('.flipped');
        flippedCardsQuantity = FLIPPED_CARDS.length;
        if (flippedCardsQuantity === 0) {
          this.timer.stopGame();
          setTimeout(() => {
            this.window.showWindow();
          }, 500);
          console.log('WIN');
          clearInterval(gameStatus);
          return;
        }
      }, 1000);
    }, 5000);

    cards.forEach((card) => {
      card.getCard().addEventListener('click', () => {
        this.cardHandler(card);
      });
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

      await delay(100);
      await Promise.all([card.highLightRedCard(), this.activeCard.highLightRedCard()]);

      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack(), [await delay(200), await Promise.all([this.activeCard.removeCover(), card.removeCover()])]]);

    } else {

      await delay(100);
      await Promise.all([card.highLightGreenCard(), this.activeCard.highLightGreenCard()])
      console.log('YES!!!');

      /* const FLIPPED_CARDS = document.querySelectorAll('.flipped');
      console.log(FLIPPED_CARDS.length); */
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

import { createDomNode } from '@/common';
import styles from './card.scss';

export default class Card {
  isFlipped = false;

  cardContainer: HTMLElement;
  card: HTMLElement;
  cardFront: HTMLElement;
  cardBack: HTMLElement;

  getCard(): HTMLElement {
    this.cardContainer = createDomNode(this.cardContainer, 'div', styles['card-container']);
    this.card = createDomNode(this.card, 'div', styles['card']);
    this.cardContainer.append(this.card);
    this.cardFront = createDomNode(this.cardFront, 'div', styles['card__front']);
    this.cardBack = createDomNode(this.cardBack, 'div', styles['card__back']);
    this.card.append(this.cardFront, this.cardBack);

    /* this.cardContainer.addEventListener('mouseover', () => {
      this.cardContainer.classList.add('flipped');
    });

    this.cardContainer.addEventListener('mouseleave', () => {
      this.cardContainer.classList.remove('flipped');
    }); */

    return this.cardContainer;
  }

  flip(isFront = false): void {
    this.cardContainer.classList.toggle('flipped', isFront);
  }

  flipToBack(): void {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront(): void {
    this.isFlipped = false;
    return this.flip(false);
  }
}


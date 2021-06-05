import { createDomNode } from '@/common';

import styles from './card.scss';

const FLIP_CLASS = 'flipped';

export default class Card {
  isFlipped = false;

  cardContainer: HTMLElement;

  card: HTMLElement;

  cardCover: HTMLElement;

  cardBack: HTMLElement;

  constructor(readonly image: string) {
    this.cardContainer = createDomNode(this.cardContainer, 'div', styles['card-container']);
    this.card = createDomNode(this.card, 'div', styles['card']);
    this.cardCover = createDomNode(this.cardCover, 'div', styles['card-cover']);
    this.cardBack = createDomNode(this.cardBack, 'div', styles['card__back']);
    this.card.innerHTML = `
      <div class="card__front" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; backface-visibility: hidden; border-radius: inherit; background-image: url('./images/${image}'); background-position: center; background-size: cover;"></div>
    `;
    this.card.append(this.cardBack, this.cardCover);
    this.cardContainer.append(this.card);
  }

  highLightGreenCard(): void {
    this.cardCover.style.backgroundColor = 'rgba(10, 207, 131, 0.5)';
  }

  highLightRedCard(): void {
    this.cardCover.style.backgroundColor = 'rgba(242, 78, 30, 0.5)';
  }

  removeCover(): void {
    this.cardCover.style.backgroundColor = 'transparent';
  }

  getCard(): HTMLElement {
    const sizeOfField = localStorage.getItem('game-difficulty');
    switch (sizeOfField) {
      case '0':
        this.card.style.width = '125px';
        this.card.style.height = '125px';
        break;
      case '1':
        this.card.style.width = '85px';
        this.card.style.height = '85px';
        break;
      default: {
        this.card.style.width = '125px';
        this.card.style.height = '125px';
      }
    }

    return this.cardContainer;
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true;
    this.card.style.transform = 'rotateY(180deg) translateX(-100%)';
    this.card.style.transformOrigin = 'left';
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    this.card.style.transform = '';
    this.card.style.transformOrigin = '';
    this.isFlipped = false;
    return this.flip(false);
  }

  private flip(isFront = false): Promise<void> {
    return new Promise(resolve => {
      this.cardContainer.classList.toggle(FLIP_CLASS, isFront);
      this.cardContainer.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}

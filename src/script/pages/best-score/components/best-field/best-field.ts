import { createDomNode } from '@/common';
import { threadId } from 'worker_threads';
import styles from './best-field.scss';

export class BestField {
  bestField: HTMLElement;
  header: HTMLElement;
  scoreContainer: HTMLElement;
  scoreItem: HTMLElement;
  personContainer: HTMLElement;
  scoreItemImage: HTMLElement;
  dataContainer: HTMLElement;
  dataName: HTMLElement;
  dataEmail: HTMLElement;
  scoreWrapper: HTMLElement;
  scoreText: HTMLElement;
  scoreNumber: HTMLElement;

  constructor(){
    this.bestField = createDomNode(this.bestField, 'div', styles['best-field']);
    this.header = createDomNode(this.header, 'h2', styles['best-header']);
    this.header.innerText = 'Best players';

    this.scoreContainer = createDomNode(this.scoreContainer, 'div', styles['score-container']);
    this.scoreItem = createDomNode(this.scoreItem, 'div', styles['score-item']);
    this.personContainer = createDomNode(this.personContainer, 'div', styles['person-container']);
    this.scoreItemImage = createDomNode(this.scoreItemImage, 'img', styles['score-image']);
    this.scoreItemImage.setAttribute('src', './images/score/image1.png');
    this.dataContainer = createDomNode(this.dataContainer, 'div', styles['data-container']);
    this.dataName = createDomNode(this.dataName, 'span', styles['data-name']);
    this.dataName.innerText = 'Nicci Troiani';
    this.dataEmail = createDomNode(this.dataEmail, 'span', styles['data-email']);
    this.dataEmail.innerText = 'nicci@gmail.com';
    this.personContainer.append(this.scoreItemImage, this.dataContainer);
    this.scoreWrapper = createDomNode(this.scoreWrapper, 'div', styles['score-wrapper']);
    this.scoreText = createDomNode(this.scoreText, 'span', styles['score-text']);
    this.scoreText.innerText = 'Score:';
    this.scoreNumber = createDomNode(this.scoreNumber, 'span', styles['score-number']);
    this.scoreNumber.innerText = '456';
    this.scoreWrapper.append(this.scoreText, this.scoreNumber);
    this.dataContainer.append(this.dataName, this.dataEmail);

    this.scoreItem.append(this.personContainer, this.scoreWrapper);

    this.scoreContainer.append(this.scoreItem);

    this.bestField.append(this.header, this.scoreContainer);
  }

  getBestField(): HTMLElement {
    return this.bestField;
  }
}

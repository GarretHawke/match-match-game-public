import { createDomNode } from '@/common';

import BestField from '../best-field';

import styles from './main.scss';

export default class Main {
  main: HTMLElement;

  mainContainer: HTMLElement;

  bestField: BestField;

  constructor() {
    this.main = createDomNode(this.main, 'main', styles['main']);
    this.mainContainer = createDomNode(this.mainContainer, 'div', styles['main-container']);
    this.bestField = new BestField();
    this.mainContainer.append(this.bestField.getBestField());
    this.main.append(this.mainContainer);
  }

  getMain(): HTMLElement {
    return this.main;
  }
}

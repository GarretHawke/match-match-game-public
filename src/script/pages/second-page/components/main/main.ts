import { createDomNode } from '../../../../common';
import { AboutField } from '../about-field';
import styles from './main.scss';


export default class Main {
  main: HTMLElement;
  mainContainer: HTMLElement;

  constructor() {
    this.main = createDomNode(this.main, 'main', styles['main']);
    this.mainContainer = createDomNode(this.mainContainer, 'div', styles['main-container']);
    this.mainContainer.append(new AboutField().getAboutField());
    this.main.append(this.mainContainer);
  }

  getMain(): HTMLElement {
    /* this.main = createDomNode(this.main, 'main', styles['main']);
    this.mainContainer = createDomNode(this.mainContainer, 'div', styles['main-container']);
    this.mainContainer.append(new AboutField().getAboutField());
    this.main.append(this.mainContainer); */
    return this.main;
  }
}

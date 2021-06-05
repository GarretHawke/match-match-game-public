import { createDomNode } from '@/common';

import styles from './best-score.scss';
import Header from './components/header';
import Main from './components/main';

export default class BestScorePage {
  header: Header;

  main: Main;

  private routing: () => void;

  public bestScorePage: HTMLElement;

  constructor() {
    this.header = new Header();
  }

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';
    rootDiv.append(this.header.getHeader(routing));

    this.bestScorePage = createDomNode(this.bestScorePage, 'div', styles['best-score-page']);

    this.main = new Main();
    this.bestScorePage.append(this.main.getMain());

    rootDiv.append(this.bestScorePage);
  }
}

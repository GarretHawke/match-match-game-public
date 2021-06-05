import { createDomNode } from '@/common';

import Header from './components/header';
import Main from './components/main';
import styles from './game-page.scss';

export default class GameGape {
  header: Header;

  main: Main;

  private routing: () => void;

  public gamePage: HTMLElement;

  constructor() {
    this.header = new Header();
  }

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';
    rootDiv.append(this.header.getHeader(routing));

    this.gamePage = createDomNode(this.gamePage, 'div', styles['game-page']);
    this.main = new Main();
    this.gamePage.append(this.main.getMain());

    rootDiv.append(this.gamePage);
  }
}

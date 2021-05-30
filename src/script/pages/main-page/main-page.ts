import { createDomNode } from '@/common';
import { Header } from '@/components';
import Main from '@/components/main';
import styles from '@/pages/main-page/main-page.scss';

export default class MainPage {
  header: Header;
  main: Main;

  private routing: () => void;

  public mainPage: HTMLElement;

  constructor() {
    this.header = new Header();
  }

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';
    rootDiv.append(this.header.getHeader(routing));

    this.mainPage = createDomNode(this.mainPage, 'div', styles['main-page']);
    this.main = new Main();
    this.mainPage.append(this.main.getMain());

    rootDiv.append(this.mainPage);
  }
}

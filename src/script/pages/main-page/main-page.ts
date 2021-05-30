import { createDomNode, changeUrl } from '@/common';
import { Header, customButton } from '@/components';
import { Application } from '@/components/application';
import { Card } from '@/components/card';
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
    this.mainPage.append(this.main.getMain(this.routing));

    rootDiv.append(this.mainPage);
  }
}

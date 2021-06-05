import { createDomNode } from '@/common';

import Header from './components/header';
import Main from './components/main';
import styles from './settings.scss';

export default class SettingsPage {
  header: Header;

  main: Main;

  private routing: () => void;

  public settingsPage: HTMLElement;

  constructor() {
    this.header = new Header();
  }

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';
    rootDiv.append(this.header.getHeader(routing));

    this.settingsPage = createDomNode(this.settingsPage, 'div', styles['settings-page']);

    this.main = new Main();
    this.settingsPage.append(this.main.getMain());

    rootDiv.append(this.settingsPage);
  }
}

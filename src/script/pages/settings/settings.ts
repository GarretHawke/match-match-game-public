import { changeUrl, createDomNode } from '@/common';
import Header from '../settings/components/header';
import styles from './settings.scss';
import Main  from './components/main';

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

  /* clickHandler(): void {
    this.navigate('/');
  }

  navigate(pathName: string): void {
    changeUrl(pathName);
    this.routing();
  } */
}

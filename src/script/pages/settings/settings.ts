import { changeUrl, createDomNode } from '@/common';
import Header from '../settings/components/header';
import styles from './settings.scss';
import Main  from './components/main';

export default class SettingsPage {
  header: Header;
  main: Main;

  private routing: () => void;

  public settingsPage: HTMLElement;

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';

    this.settingsPage = createDomNode(this.settingsPage, 'div', styles['settings-page']);
    this.header = new Header();
    this.settingsPage.append(this.header.getHeader());

    this.main = new Main();
    this.settingsPage.append(this.main.getMain());

    rootDiv.append(this.settingsPage);
  }

  clickHandler(): void {
    this.navigate('/');
  }

  navigate(pathName: string): void {
    changeUrl(pathName);
    this.routing();
  }
}

import { createDomNode, changeUrl } from '@/common';
import { Header, customButton } from '@/components';
import { Application } from '@/components/application';
import { Card } from '@/components/card';
import Main from '@/components/main';
import styles from '@/pages/main-page/main-page.scss';

export default class MainPage {
  header: Header;
  main: Main;
  //public card: Card;

  private routing: () => void;

  public mainPage: HTMLElement;

  /* constructor() {
    this.header = new Header();
  } */

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';

    this.mainPage = createDomNode(this.mainPage, 'div', styles['main-page']);

    this.header = new Header();
    this.mainPage.append(this.header.getHeader());
    this.main = new Main();
    this.mainPage.append(this.main.getMain());
    /* const buttonSettings = customButton('Settings', this.clickHandler.bind(this), styles['settings-button']);
    this.mainPage.append(buttonSettings); */


    rootDiv.append(this.mainPage);
  }

  clickHandler(): void {
    this.navigate('/');
  }

  navigate(pathName: string): void {
    changeUrl(pathName);
    this.routing();
  }
}

import { createDomNode, changeUrl } from '@/common';
import { Header, customButton } from '@/components';
import Card from '@/components/card';
import Main from '@/components/main';
import styles from '@/pages/main-page/main-page.scss';

export default class MainPage {
  //public header: Header;
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
    //rootDiv.prepend(this.header.getHeader());

    this.mainPage = createDomNode(this.mainPage, 'div', styles['main-page']);

    //this.mainPage.append(customButton('Second Page', this.clickHandler.bind(this)));
    this.mainPage.append(new Header().getHeader());
    // this.mainPage.append(new Card().getCard());
    this.mainPage.append(new Main().getMain());
    rootDiv.append(this.mainPage);
  }

  clickHandler(): void {
    this.navigate('/second-page');
  }

  navigate(pathName: string): void {
    changeUrl(pathName);
    this.routing();
  }
}

import { createDomNode, changeUrl } from '@/common';
import { Header, customButton } from '@/components';
import styles from '@/pages/main-page/main-page.scss';

export default class MainPage {
  public header: Header;

  private routing: () => void;

  public mainPage: HTMLElement;

  constructor() {
    this.header = new Header();
  }

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';
    rootDiv.prepend(this.header.getHeader());

    this.mainPage = createDomNode(this.mainPage, 'div', styles['main-page']);
    this.mainPage.innerHTML = 'Main Page';

    this.mainPage.append(customButton('Second Page', this.clickHandler.bind(this)));
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

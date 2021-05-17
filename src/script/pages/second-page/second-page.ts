import { createDomNode, changeUrl } from '@/common';
import { Header, customButton } from '@/components';
import styles from '@/pages/second-page/second-page.scss';

export default class SecondPage {
  public header: Header;

  private routing: () => void;

  public secondPage: HTMLElement;

  constructor() {
    this.header = new Header();
  }

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';
    rootDiv.prepend(this.header.getHeader());

    this.secondPage = createDomNode(this.secondPage, 'div', styles['second-page']);
    this.secondPage.innerHTML = 'Second Page';
    rootDiv.append(this.secondPage);

    this.secondPage.append(customButton('Main Page', this.clickHandler.bind(this)));
    rootDiv.append(this.secondPage);
  }

  clickHandler(): void {
    this.navigate('/');
  }

  navigate(pathName: string): void {
    changeUrl(pathName);
    this.routing();
  }
}

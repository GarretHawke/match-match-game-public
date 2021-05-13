import { createDomNode } from '@/common';
import styles from '@/components/header/header.scss';

export default class Header {
  header: HTMLElement;

  getHeader(): HTMLElement {
    this.header = createDomNode(this.header, 'div', styles['header']);
    this.header.innerHTML = 'Header';
    this.bindEvents();
    return this.header;
  }

  bindEvents(): void {
    this.header.addEventListener('click', (event) => this.handlerClick(event));
  }

  handlerClick(event: MouseEvent): void {
    if (Header.isClickOnMenu(event)) {
      this.clickOnMenu();
    }
  }

  static isClickOnMenu(event: MouseEvent): boolean {
    const target = event.target as Element;
    return target.classList.contains('header');
  }

  clickOnMenu(): void {
    /* eslint-disable no-console */
    console.log('click', this.header);
  }
}

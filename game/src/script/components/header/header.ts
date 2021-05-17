import { createDomNode } from '@/common';
import styles from '@/components/header/header.scss';
import { StartButton } from '../button/start-button';

export default class Header {
  header: HTMLElement;
  headerContainer: HTMLElement;
  logo: HTMLElement;
  logoTop: HTMLElement;
  logoBottom: HTMLElement;
  nav: HTMLElement;
  navAbout: HTMLElement;
  navScore: HTMLElement;
  navSettings: HTMLElement;
  icon: HTMLElement;
  navTextAbout: HTMLElement;
  navTextScore: HTMLElement;
  navTextSettings: HTMLElement;
  profile: HTMLElement;


  getHeader(): HTMLElement {
    this.header = createDomNode(this.header, 'header', styles['header']);
    this.headerContainer = createDomNode(this.headerContainer, 'div', styles['header-container']);
    this.header.append(this.headerContainer);

    this.logo = createDomNode(this.logo, 'div', styles['logo']);


    this.logoTop = createDomNode(this.logoTop, 'div', styles['logo__top']);
    this.logoTop.innerHTML = 'MATCH';
    this.logoBottom = createDomNode(this.logoTop, 'div', styles['logo__bottom']);
    this.logoBottom.innerHTML = 'MATCH';
    this.logo.append(this.logoTop, this.logoBottom);
    this.headerContainer.append(this.logo);

    this.nav = createDomNode(this.nav, 'nav', styles['navigation']);
    this.navAbout = createDomNode(this.navAbout, 'div', styles['navigation__about']);
    this.navScore = createDomNode(this.navScore, 'div', styles['navigation__score']);
    this.navSettings = createDomNode(this.navSettings, 'div', styles['navigation__settings']);

    this.navTextAbout = createDomNode(this.navTextAbout, 'span', styles['navigation-text']);
    this.navTextScore = createDomNode(this.navTextScore, 'span', styles['navigation-text']);
    this.navTextSettings = createDomNode(this.navTextSettings, 'span', styles['navigation-text']);

    this.navTextAbout.innerHTML = 'About Game';
    this.navTextScore.innerHTML = 'Best Score';
    this.navTextSettings.innerHTML = 'Settings';

    this.navAbout.append(this.navTextAbout);
    this.navScore.append(this.navTextScore);
    this.navSettings.append(this.navTextSettings);

    // this.icon = createDomNode(this.icon, 'img', styles['navigation-icon']);
    this.nav.append(this.navAbout, this.navScore, this.navSettings);
    this.headerContainer.append(this.nav);

    this.headerContainer.append(new StartButton().getButton());

    this.profile = createDomNode(this.profile, 'div', styles['profile']);
    this.headerContainer.append(this.profile);

    //this.bindEvents();
    return this.header;
  }

  /* bindEvents(): void {
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
    // eslint-disable no-console
    console.log('click', this.header);
  } */
}

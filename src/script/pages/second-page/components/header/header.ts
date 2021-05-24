import { createDomNode, changeUrl } from '@/common';
import styles from './header.scss';
import { StartButton } from '../../../second-page/components/button/start-button';
import customButton from '../../../../components/button/';
import { start } from 'repl';
import RegisterForm from '../register-form';
import { revealForm } from '../open-form';
import { removeStyles } from '@/common/common';

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
  iconAbout: HTMLElement;
  iconScore: HTMLElement;
  iconSettings: HTMLElement;
  navTextAbout: HTMLElement;
  navTextScore: HTMLElement;
  navTextSettings: HTMLElement;
  profile: HTMLElement;
  registerForm: HTMLElement;

  private routing: () => void;

  constructor() {
    this.header = createDomNode(this.header, 'header', styles['header']);
    this.headerContainer = createDomNode(this.headerContainer, 'div', styles['header-container']);
    this.header.append(this.headerContainer);

    this.logo = createDomNode(this.logo, 'div', styles['logo']);

    this.logoTop = createDomNode(this.logoTop, 'div', styles['logo__top']);
    this.logoTop.innerHTML = 'MATCH';
    this.logoBottom = createDomNode(this.logoTop, 'div', styles['logo__bottom']);
    this.logoBottom.innerHTML = 'MATCH';
    this.logo.append(this.logoTop, this.logoBottom);

    this.nav = createDomNode(this.nav, 'nav', styles['navigation']);
    this.navAbout = createDomNode(this.navAbout, 'div', styles['navigation__about']);
    this.navScore = createDomNode(this.navScore, 'div', styles['navigation__score']);
    this.navSettings = createDomNode(this.navSettings, 'div', styles['navigation__settings']);

    this.iconAbout = createDomNode(this.iconAbout, 'div', styles['navigation-icon__about']);
    this.iconScore = createDomNode(this.iconScore, 'div', styles['navigation-icon__score']);
    this.iconSettings = createDomNode(this.iconSettings, 'div', styles['navigation-icon__settings']);

    this.navTextAbout = createDomNode(this.navTextAbout, 'span', styles['navigation-text']);
    this.navTextScore = createDomNode(this.navTextScore, 'span', styles['navigation-text']);
    this.navTextSettings = createDomNode(this.navTextSettings, 'span', styles['navigation-text']);

    this.navTextAbout.innerHTML = 'About Game';
    this.navTextScore.innerHTML = 'Best Score';
    this.navTextSettings.innerHTML = 'Game Settings';

    this.navAbout.append(this.iconAbout, this.navTextAbout);
    this.navScore.append(this.iconScore, this.navTextScore);
    this.navSettings.append(this.iconSettings, this.navTextSettings);

    // this.icon = createDomNode(this.icon, 'img', styles['navigation-icon']);
    this.nav.append(this.navAbout, this.navScore, this.navSettings);

    /* this.startButton = new StartButton();
    this.startButton.listener();
    this.headerContainer.append(this.startButton.getButton()); */
    // this.headerContainer.append(new StartButton().getButton());

    const startButton = customButton('start-button', this.clickHandler.bind(this), styles['start-button']);
    startButton.id = 'start-button';
    startButton.innerText = 'register new player';


    this.profile = createDomNode(this.profile, 'div', styles['profile']);
    this.headerContainer.append(this.logo, this.nav, startButton, this.profile);

    // this.registerForm = new RegisterForm().getRegisterForm();
    // this.headerContainer.append(this.registerForm);

    /* const routingButton = customButton('Main Page', this.clickHandler.bind(this), styles['routing-button']);
    this.navAbout.append(routingButton); */
  }

  clickHandler(): void {
    revealForm(this.registerForm);
    console.log('fff');
  }

  /* clickHandler(): void {
    this.navigate('/second-page');
  }

  navigate(pathName: string): void {
    changeUrl(pathName);
    this.routing();
  } */


  getHeader(): HTMLElement {
    /* this.header = createDomNode(this.header, 'header', styles['header']);
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

    this.iconAbout = createDomNode(this.iconAbout, 'div', styles['navigation-icon__about']);
    this.iconScore = createDomNode(this.iconScore, 'div', styles['navigation-icon__score']);
    this.iconSettings = createDomNode(this.iconSettings, 'div', styles['navigation-icon__settings']);

    this.navTextAbout = createDomNode(this.navTextAbout, 'span', styles['navigation-text']);
    this.navTextScore = createDomNode(this.navTextScore, 'span', styles['navigation-text']);
    this.navTextSettings = createDomNode(this.navTextSettings, 'span', styles['navigation-text']);

    this.navTextAbout.innerHTML = 'About Game';
    this.navTextScore.innerHTML = 'Best Score';
    this.navTextSettings.innerHTML = 'Game Settings';

    this.navAbout.append(this.iconAbout, this.navTextAbout);
    this.navScore.append(this.iconScore, this.navTextScore);
    this.navSettings.append(this.iconSettings, this.navTextSettings);

    // this.icon = createDomNode(this.icon, 'img', styles['navigation-icon']);
    this.nav.append(this.navAbout, this.navScore, this.navSettings);
    this.headerContainer.append(this.nav);

    this.headerContainer.append(new StartButton().getButton());

    this.profile = createDomNode(this.profile, 'div', styles['profile']);
    this.headerContainer.append(this.profile); */

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

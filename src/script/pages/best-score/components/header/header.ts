import { changeUrl, createDomNode } from "@/common";
import { customButton } from "@/components";
import { StartButton } from "@/components/button/start-button";
import styles from './header.scss';

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
  startButton: StartButton;

  headerLeft: HTMLElement;
  headerRight: HTMLElement;

  private routing: () => void;

  constructor() {
    this.header = createDomNode(this.header, 'header', styles['header']);
    this.headerContainer = createDomNode(this.headerContainer, 'div', styles['header-container']);
    this.header.append(this.headerContainer);

    this.headerLeft = createDomNode(this.headerLeft, 'div', styles['header-left']);
    this.headerRight = createDomNode(this.headerRight, 'div', styles['header-right']);

    this.logo = createDomNode(this.logo, 'div', styles['logo']);

    this.logoTop = createDomNode(this.logoTop, 'div', styles['logo__top']);
    this.logoTop.innerHTML = 'MATCH';
    this.logoBottom = createDomNode(this.logoTop, 'div', styles['logo__bottom']);
    this.logoBottom.innerHTML = 'MATCH';
    this.logo.append(this.logoTop, this.logoBottom);

    this.nav = createDomNode(this.nav, 'nav', styles['navigation']);
    this.navAbout = customButton('About', this.clickHandlerAbout.bind(this), styles['navigation__about']);
    this.navScore = customButton('Score', this.clickHandlerScore.bind(this), styles['navigation__score']);
    this.navSettings = customButton('Settings', this.clickHandlerSettings.bind(this), styles['navigation__settings']);

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
    this.nav.append(this.navAbout, this.navScore, this.navSettings);

    this.startButton = new StartButton();

    this.profile = createDomNode(this.profile, 'div', styles['profile']);

    this.headerLeft.append(this.logo, this.nav);
    this.headerRight.append(this.startButton.getButton(), this.profile);
    this.headerContainer.append(this.headerLeft, this.headerRight);
  }

  getHeader(routing: () => void): HTMLElement {
    this.routing = routing;
    return this.header;
  }

  clickHandlerAbout(): void {
    this.navigate('/');
  }

  clickHandlerScore(): void {
    this.navigate('/best-score');
  }

  clickHandlerSettings(): void {
    this.navigate('/settings');
  }

  navigate(pathName: string): void {
    changeUrl(pathName);
    this.routing();
  }
}

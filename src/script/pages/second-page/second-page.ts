import { createDomNode } from '@/common';

import Header from './components/header';
import Main from './components/main';
import RegisterForm from './components/register-form';
import styles from './second-page.scss';

export default class SecondPage {
  header: Header;

  main: Main;

  registerForm: RegisterForm;

  private routing: () => void;

  public secondPage: HTMLElement;

  constructor() {
    this.registerForm = new RegisterForm();
    this.header = new Header();
  }

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';
    rootDiv.append(this.header.getHeader(routing));

    this.secondPage = createDomNode(this.secondPage, 'div', styles['second-page']);

    this.main = new Main();
    this.secondPage.append(this.main.getMain());
    this.secondPage.append(this.registerForm.getRegisterForm());

    const registerButton = document.getElementById('start-button');
    registerButton?.addEventListener('click', () => {
      this.registerForm.revealRegisterForm();
    });

    rootDiv.append(this.secondPage);
  }
}

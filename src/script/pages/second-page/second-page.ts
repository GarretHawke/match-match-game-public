import { createDomNode, changeUrl} from '@/common';
import Header from '../second-page/components/header';
import { customButton } from '@/components';
import styles from '@/pages/second-page/second-page.scss';
import Main from '../second-page/components/main';
import RegisterForm from './components/register-form';
import { StartButton } from '@/components/button/start-button';



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



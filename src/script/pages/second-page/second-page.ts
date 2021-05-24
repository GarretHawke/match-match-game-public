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
  }

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';
    // rootDiv.prepend(this.header.getHeader());

    this.secondPage = createDomNode(this.secondPage, 'div', styles['second-page']);

   /*  const routingButton = customButton('Main Page', this.clickHandler.bind(this), styles['routing-button']);
    this.secondPage.append(routingButton); */

    // this.secondPage.innerHTML = 'Second Page';
    // rootDiv.append(this.secondPage);
    this.header = new Header();
    this.secondPage.append(this.header.getHeader());
    // this.secondPage.append(new Header().getHeader());
    this.main = new Main();
    this.secondPage.append(this.main.getMain());
    // this.secondPage.append(new Main().getMain());
    /* this.registerForm = new RegisterForm();
    this.secondPage.append(this.registerForm.getRegisterForm()); */
    // this.secondPage.append(new RegisterForm().getRegisterForm());

    // const registerButton = document.getElementById('start-button');


    this.secondPage.append(this.registerForm.getRegisterForm());

    //this.secondPage.append(customButton('Main Page', this.clickHandler.bind(this)));

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



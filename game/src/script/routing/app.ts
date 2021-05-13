import { MainPage, SecondPage } from '@/pages';

export default class App {
  mainPage: MainPage;

  secondPage: SecondPage;

  constructor() {
    this.mainPage = new MainPage();
    this.secondPage = new SecondPage();
  }

  routing(): void {
    const rootDiv = document.getElementById('root');
    const path = window.location.pathname.slice(1);
    if (rootDiv) {
      switch (path) {
        case '':
          this.mainPage.initPage(rootDiv, this.routing.bind(this));
          break;
        case 'index.html':
          this.mainPage.initPage(rootDiv, this.routing.bind(this));
          break;
        default: {
          this.secondPage.initPage(rootDiv, this.routing.bind(this));
        }
      }
    }
  }
}

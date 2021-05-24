import { MainPage, SecondPage } from '@/pages';
import BestScorePage from '@/pages/best-score/best-score';
import SettingsPage from '@/pages/settings';

export default class App {
  mainPage: MainPage;
  secondPage: SecondPage;
  bestScorePage: BestScorePage;
  settingsPage: SettingsPage;

  constructor() {
    this.mainPage = new MainPage();
    this.secondPage = new SecondPage();
    this.bestScorePage = new BestScorePage();
    this.settingsPage = new SettingsPage();
  }

  routing(): void {
    const rootDiv = document.getElementById('root');
    const path = window.location.pathname.slice(1);
    if (rootDiv) {
      switch (path) {
        case '':
          this.secondPage.initPage(rootDiv, this.routing.bind(this));
          break;
        case 'index.html':
          this.secondPage.initPage(rootDiv, this.routing.bind(this));
          break;
        case 'best-score':
          this.bestScorePage.initPage(rootDiv, this.routing.bind(this));
          break;
        case 'settings':
          this.settingsPage.initPage(rootDiv, this.routing.bind(this));
          break;
        case 'game':
          this.mainPage.initPage(rootDiv, this.routing.bind(this));
          break;
        default: {
          this.secondPage.initPage(rootDiv, this.routing.bind(this));
        }
      }
    }
  }
}

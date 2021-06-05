import {
  GamePage, SecondPage, SettingsPage, BestScorePage,
} from '@/pages';

export default class App {
  gamePage: GamePage;

  secondPage: SecondPage;

  bestScorePage: BestScorePage;

  settingsPage: SettingsPage;

  constructor() {
    this.gamePage = new GamePage();
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
          this.gamePage.initPage(rootDiv, this.routing.bind(this));
          break;
        default: {
          this.secondPage.initPage(rootDiv, this.routing.bind(this));
        }
      }
    }
  }
}

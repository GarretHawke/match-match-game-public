import Header from '../best-score/components/header';
import { changeUrl, createDomNode } from '@/common';
import styles from './best-score.scss';
import Main from '../best-score/components/main';

export default class BestScorePage {
  header: Header;
  main: Main;

  private routing: () => void;

  public bestScorePage: HTMLElement;

  initPage(root: HTMLElement, routing: () => void): void {
    this.routing = routing;
    const rootDiv = root;
    rootDiv.innerHTML = '';

    this.bestScorePage = createDomNode(this.bestScorePage, 'div', styles['best-score-page']);
    this.header = new Header();
    this.bestScorePage.append(this.header.getHeader());

    this.main = new Main();
    this.bestScorePage.append(this.main.getMain());

    rootDiv.append(this.bestScorePage);
  }

  clickHandler(): void {
    this.navigate('/');
  }

  navigate(pathName: string): void {
    changeUrl(pathName);
    this.routing();
  }
}

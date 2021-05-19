import { createDomNode } from '@/common';
import styles from '@/components/main/main.scss';
import { Application } from '../application';
import { GameField } from '../game-field';

export default class Main {
  main: HTMLElement;
  mainContainer: HTMLElement;

  getMain(): HTMLElement {
    this.main = createDomNode(this.main, 'main', styles['main']);
    this.mainContainer = createDomNode(this.mainContainer, 'div', styles['main-container']);
    this.mainContainer.append(new GameField().getGameField());

    this.main.append(this.mainContainer);

    window.onload = () => {
      const appElement = document.getElementById('app');

      if (!appElement) {
        throw Error('App root element not found');
      }
      console.log('success');

      new Application(appElement).start();
    }

    return this.main;
  }
}

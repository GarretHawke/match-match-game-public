import { createDomNode } from "@/common";
import styles from './main.scss';
import { SettingsField } from '../settings-field';

export default class Main {
  main: HTMLElement;
  mainContainer: HTMLElement;
  settingsField: SettingsField;

  constructor() {
    this.main = createDomNode(this.main, 'main', styles['main']);
    this.mainContainer = createDomNode(this.mainContainer, 'div', styles['main-container']);
    this.settingsField = new SettingsField();
    this.mainContainer.append(this.settingsField.getSettingsField());
    this.main.append(this.mainContainer);
  }

  getMain(): HTMLElement {
    return this.main;
  }
}

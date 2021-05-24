import { createDomNode } from "@/common";
import { Http2SecureServer } from "http2";
import styles from './settings-field.scss';

export class SettingsField {
  settingsField: HTMLElement;
  gameCardsHeader: HTMLElement;
  difficultyHeader: HTMLElement;
  gameCardsSelection: HTMLElement;
  gameCardOption: HTMLElement;
  gameCardAnimal: HTMLElement;
  gameCardCars: HTMLElement;
  difficultySelection: HTMLElement;
  difficultyOption: HTMLElement;
  easyDifficulty: HTMLElement;
  mediumDifficulty: HTMLElement;

  constructor(){
    this.settingsField = createDomNode(this.settingsField, 'div', styles['settings-field']);
    this.gameCardsHeader = createDomNode(this.gameCardsHeader, 'h2', styles['header']);
    this.gameCardsHeader.innerText = 'Game cards';
    this.difficultyHeader = createDomNode(this.difficultyHeader, 'h2', styles['header']);
    this.difficultyHeader.innerText = 'Difficulty';

    this.gameCardsSelection = createDomNode(this.gameCardsSelection, 'select', styles['select']);
    this.gameCardsSelection.setAttribute('required', '');
    this.gameCardOption = createDomNode(this.gameCardOption, 'option', styles['option']);
    this.gameCardOption.setAttribute('value', '');
    this.gameCardOption.innerText = 'select game cards type';
    this.gameCardAnimal = createDomNode(this.gameCardAnimal, 'option', styles['option']);
    this.gameCardAnimal.setAttribute('value', '1');
    this.gameCardAnimal.innerText = 'animals';
    this.gameCardCars = createDomNode(this.gameCardCars, 'option', styles['option']);
    this.gameCardCars.setAttribute('value', '2');
    this.gameCardCars.innerText = 'cars';

    this.difficultySelection = createDomNode(this.difficultySelection, 'select', styles['select']);
    this.difficultySelection.setAttribute('required', '');
    this.difficultyOption = createDomNode(this.difficultyOption, 'option', styles['option']);
    this.difficultyOption.setAttribute('value', '');
    this.difficultyOption.innerText = 'select game type';
    this.easyDifficulty = createDomNode(this.easyDifficulty, 'option', styles['option']);
    this.easyDifficulty.setAttribute('value', '1');
    this.easyDifficulty.innerText = '4x4';
    this.mediumDifficulty = createDomNode(this.mediumDifficulty, 'option', styles['option']);
    this.mediumDifficulty.setAttribute('value', '2');
    this.mediumDifficulty.innerText = '6x6';

    this.gameCardsSelection.append(this.gameCardOption, this.gameCardAnimal, this.gameCardCars);
    this.difficultySelection.append(this.difficultyOption, this.easyDifficulty, this.mediumDifficulty);
    this.settingsField.append(this.gameCardsHeader, this.gameCardsSelection, this.difficultyHeader, this.difficultySelection);
  }

  getSettingsField(): HTMLElement {
    return this.settingsField;
  }
}

import { createDomNode } from "@/common";
import styles from './settings-field.scss';

export class SettingsField {
  settingsField: HTMLElement;
  gameCardsHeader: HTMLElement;
  difficultyHeader: HTMLElement;
  gameCardsSelection: HTMLElement;
  gameCardOption: HTMLElement;
  gameCardAnimal: HTMLElement;
  gameCardCars: HTMLElement;
  gameCardProfessions: HTMLElement;
  difficultySelection: HTMLElement;
  difficultyOption: HTMLElement;
  easyDifficulty: HTMLElement;
  mediumDifficulty: HTMLElement;

  selectionTypeValue: number;
  selectionDifficultyValue: number;

  constructor(){
    this.settingsField = createDomNode(this.settingsField, 'div', styles['settings-field']);
    this.gameCardsHeader = createDomNode(this.gameCardsHeader, 'h2', styles['header']);
    this.gameCardsHeader.innerText = 'Game cards';
    this.difficultyHeader = createDomNode(this.difficultyHeader, 'h2', styles['header']);
    this.difficultyHeader.innerText = 'Difficulty';

    this.gameCardsSelection = createDomNode(this.gameCardsSelection, 'select', styles['select']);
    this.gameCardsSelection.setAttribute('required', '');
    this.gameCardsSelection.id = 'select';

    this.gameCardOption = createDomNode(this.gameCardOption, 'option', styles['option']);
    this.gameCardOption.setAttribute('value', '');
    this.gameCardOption.innerText = 'Select game cards type';
    this.gameCardAnimal = createDomNode(this.gameCardAnimal, 'option', styles['option']);
    this.gameCardAnimal.setAttribute('value', '1');
    this.gameCardAnimal.innerText = 'Animals';
    this.gameCardCars = createDomNode(this.gameCardCars, 'option', styles['option']);
    this.gameCardCars.setAttribute('value', '2');
    this.gameCardCars.innerText = 'Cars';
    this.gameCardProfessions = createDomNode(this.gameCardProfessions, 'option', styles['option']);
    this.gameCardProfessions.setAttribute('value', '3');
    this.gameCardProfessions.innerText = 'Professions';

    /* const selectionType = this.gameCardsSelection as HTMLSelectElement;
    this.gameCardsSelection.addEventListener('change', () => {
      this.selectionTypeValue = Number(selectionType.options[selectionType.selectedIndex].value);
      // console.log('type: ', this.selectionTypeValue);
    }); */

    this.difficultySelection = createDomNode(this.difficultySelection, 'select', styles['select']);
    this.difficultySelection.setAttribute('required', '');
    this.difficultyOption = createDomNode(this.difficultyOption, 'option', styles['option']);
    this.difficultyOption.setAttribute('value', '');
    this.difficultyOption.innerText = 'Select game type';
    this.easyDifficulty = createDomNode(this.easyDifficulty, 'option', styles['option']);
    this.easyDifficulty.setAttribute('value', '1');
    this.easyDifficulty.innerText = '4x4';
    this.mediumDifficulty = createDomNode(this.mediumDifficulty, 'option', styles['option']);
    this.mediumDifficulty.setAttribute('value', '2');
    this.mediumDifficulty.innerText = '6x6';

    /* const selectionDifficulty = this.difficultySelection as HTMLSelectElement;
    this.difficultySelection.addEventListener('change', () => {
      this.selectionDifficultyValue = Number(selectionDifficulty.options[selectionDifficulty.selectedIndex].value);
      console.log('difficulty: ', this.selectionDifficultyValue);
    }); */

    this.gameCardsSelection.append(this.gameCardOption, this.gameCardAnimal, this.gameCardCars, this.gameCardProfessions);
    this.difficultySelection.append(this.difficultyOption, this.easyDifficulty, this.mediumDifficulty);
    this.settingsField.append(this.gameCardsHeader, this.gameCardsSelection, this.difficultyHeader, this.difficultySelection);
  }

  getSettingsField(): HTMLElement {
    return this.settingsField;
  }

  getCardCategory(): number {
    const selectionType = this.gameCardsSelection as HTMLSelectElement;
    this.gameCardsSelection.addEventListener('change', () => {
      this.selectionTypeValue = Number(selectionType.options[selectionType.selectedIndex].value);
      console.log(this.selectionTypeValue);
    });
    return this.selectionTypeValue;
  }

  getCardDifficulty(): number {
    const selectionDifficulty = this.difficultySelection as HTMLSelectElement;
    this.difficultySelection.addEventListener('change', () => {
      this.selectionDifficultyValue = Number(selectionDifficulty.options[selectionDifficulty.selectedIndex].value);
      console.log('difficulty: ', this.selectionDifficultyValue);
    });
    return this.selectionDifficultyValue;
  }
}

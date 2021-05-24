import { createDomNode } from '../../../../common';
import styles from './about-field.scss';

export class AboutField {
  aboutField: HTMLElement;
  header: HTMLElement;
  aboutContainer: HTMLElement;
  stepsContainerLeft: HTMLElement;
  stepsContainerRight: HTMLElement;

  stepOneContainer: HTMLElement;
  stepTwoContainer: HTMLElement;
  stepThreeContainer: HTMLElement;
  circleOne: HTMLElement;
  circleTwo: HTMLElement;
  circleThree: HTMLElement;
  stepOneText: HTMLElement;
  stepTwoText: HTMLElement;
  stepThreeText: HTMLElement;

  formContainer: HTMLElement;
  buttonContainer: HTMLElement;
  gameFieldContainer: HTMLElement;

  getAboutField(): HTMLElement {
    this.aboutField = createDomNode(this.aboutField, 'div', styles['about-field']);
    this.header = createDomNode(this.header, 'h2', styles['about-header']);
    this.header.innerText = 'How to play?';


    this.aboutContainer = createDomNode(this.aboutContainer, 'div', styles['about-container']);
    this.stepsContainerLeft = createDomNode(this.stepsContainerLeft, 'div', styles['steps-container-left']);
    this.stepsContainerRight = createDomNode(this.stepsContainerRight, 'div', styles['steps-container-right']);

    this.stepOneContainer = createDomNode(this.stepOneContainer, 'div', styles['step-container-one']);
    this.stepTwoContainer = createDomNode(this.stepTwoContainer, 'div', styles['step-container-two']);
    this.stepThreeContainer = createDomNode(this.stepThreeContainer, 'div', styles['step-container-three']);

    this.circleOne = createDomNode(this.circleOne, 'div', styles['circle']);
    this.circleOne.innerText = '1';
    this.stepOneText = createDomNode(this.stepOneText, 'p', styles['step-text']);
    this.stepOneText.innerText = 'Register new player in game';
    this.stepOneContainer.append(this.circleOne, this.stepOneText);
    this.circleTwo = createDomNode(this.circleTwo, 'div', styles['circle']);
    this.circleTwo.innerText = '2';
    this.stepTwoText = createDomNode(this.stepTwoText, 'p', styles['step-text']);
    this.stepTwoText.innerText = 'Configure your game settings';
    this.stepTwoContainer.append(this.circleTwo, this.stepTwoText);
    this.circleThree = createDomNode(this.circleThree, 'div', styles['circle']);
    this.circleThree.innerText = '3';
    this.stepThreeText = createDomNode(this.stepThreeText, 'p', styles['step-text']);
    this.stepThreeText.innerText = 'Start you new game! Remember card positions and match it before times up.';
    this.stepThreeContainer.append(this.circleThree, this.stepThreeText);
    this.stepsContainerLeft.append(this.stepOneContainer, this.stepTwoContainer, this.stepThreeContainer);

    this.formContainer = createDomNode(this.formContainer, 'div', styles['form-container']);
    this.buttonContainer = createDomNode(this.formContainer, 'div', styles['button-container']);
    this.gameFieldContainer = createDomNode(this.gameFieldContainer, 'div', styles['game-field-container']);
;
    this.stepsContainerRight.append(this.formContainer, this.buttonContainer, this.gameFieldContainer);

    this.aboutContainer.append(this.stepsContainerLeft, this.stepsContainerRight);
    this.aboutField.append(this.header, this.aboutContainer);
    return this.aboutField;
  }
}

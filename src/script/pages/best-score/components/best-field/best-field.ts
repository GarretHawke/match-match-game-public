import { createDomNode } from '@/common';
import { DataBase } from '@/shared/dataBase';
import { MyRecord } from '@/shared/My-record';
import styles from './best-field.scss';

export class BestField {
  bestField: HTMLElement;
  header: HTMLElement;
  scoreContainer: HTMLElement;
  scoreItem: HTMLElement;
  personContainer: HTMLElement;
  scoreItemImage: HTMLElement;
  dataContainer: HTMLElement;
  dataName: HTMLElement;
  dataEmail: HTMLElement;
  scoreWrapper: HTMLElement;
  scoreText: HTMLElement;
  scoreNumber: HTMLElement;
  abs: HTMLElement;

  iDB: DataBase;

  constructor(){
    this.iDB = new DataBase();
    this.iDB.init('GarretHawke');




    this.bestField = createDomNode(this.bestField, 'div', styles['best-field']);
    this.header = createDomNode(this.header, 'h2', styles['best-header']);
    this.header.innerText = 'Best players';

    this.scoreContainer = createDomNode(this.scoreContainer, 'div', styles['score-container']);
    this.scoreItem = createDomNode(this.scoreItem, 'div', styles['score-item']);
    this.personContainer = createDomNode(this.personContainer, 'div', styles['person-container']);
    this.scoreItemImage = createDomNode(this.scoreItemImage, 'img', styles['score-image']);
    this.scoreItemImage.setAttribute('src', '/images/score/image.jpg');
    this.dataContainer = createDomNode(this.dataContainer, 'div', styles['data-container']);
    this.dataName = createDomNode(this.dataName, 'span', styles['data-name']);

    //this.dataName.innerText = 'Nicci Troiani';
    this.dataEmail = createDomNode(this.dataEmail, 'span', styles['data-email']);
    //this.dataEmail.innerText = 'nicci@gmail.com';
    this.personContainer.append(this.scoreItemImage, this.dataContainer);
    this.scoreWrapper = createDomNode(this.scoreWrapper, 'div', styles['score-wrapper']);
    this.scoreText = createDomNode(this.scoreText, 'span', styles['score-text']);
    this.scoreText.innerText = 'Score:';
    this.scoreNumber = createDomNode(this.scoreNumber, 'span', styles['score-number']);
    //this.scoreNumber.innerText = '456';
    this.scoreWrapper.append(this.scoreText, this.scoreNumber);
    this.dataContainer.append(this.dataName, this.dataEmail);

    this.scoreItem.append(this.personContainer, this.scoreWrapper);

    setTimeout(async () => {
      let arr = await this.iDB.readAll<MyRecord>('scoreCollection');
      this.dataName.innerText = `${arr[arr.length - 1].firstName} ${arr[arr.length - 1].lastName}`;
      this.dataEmail.innerText = `${arr[arr.length - 1].email}`;
      this.scoreNumber.innerText = `${arr[arr.length - 1].score}`;

      this.scoreContainer.append(this.scoreItem);
      this.bestField.append(this.header, this.scoreContainer);
    }, 200);





    /* window.onclick = async () => {
      let arr = await this.iDB.readAll<MyRecord>('scoreCollection');
      console.log(arr);
    } */

    /* document.body.addEventListener('load', async () => {
      let arr = await this.iDB.readAll<MyRecord>('scoreCollection');
      console.log(arr);
    }); */
  }

  getBestField(): HTMLElement {
    return this.bestField;
  }
}

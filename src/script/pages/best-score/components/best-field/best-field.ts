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

  firstName: string;
  lastName: string;
  email: string;
  score: number;

  name: string;
  mail: string;

  constructor(){
    this.iDB = new DataBase();
    this.iDB.init('garrethawke');

    /* this.firstName = String(localStorage.getItem('firstName'));
    this.lastName = String(localStorage.getItem('lastName'));
    this.email = String(localStorage.getItem('email'));
    this.score = Number(String(localStorage.getItem('score')));

 */

    this.bestField = createDomNode(this.bestField, 'div', styles['best-field']);
    this.header = createDomNode(this.header, 'h2', styles['best-header']);
    this.header.innerText = 'Best players';

    this.scoreContainer = createDomNode(this.scoreContainer, 'div', styles['score-container']);
    this.scoreItem = createDomNode(this.scoreItem, 'div', styles['score-item']);

    /* this.scoreItem.innerHTML = `
    <div class="score-item"
      style="width: 100%;
      height: 50px;
      padding: 5px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(33, 33, 33, 0.08);">
      <div class="person-container"
        style="display: flex;
        justify-content: space-between;
        align-items: center;">
        <img class="score-image" src="/images/avatar.jpg"
          style="height: 30px;
          width: 30px;
          border-radius: 50%;">
        <div class="data-container"
          style="height: 100%;
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;">
          <span class="data-name"
            styles="font-size: 14px;
            line-height: 128%;
            color: #333333;">${this.name}</span>
          <span class="data-email"
            styles="font-size: 12px;
            line-height: 107%;
            color: #333333;">${this.mail}</span>
        </div>
      </div>
      <div class="score-wrapper"
        style="display: flex;
        justify-content: space-between;
        align-items: center;">
        <span class="score-text"
          style="font-size: 14px;
          line-height: 146%;
          color: #333333;
          font-weight: 500;
          margin-right: 10px;">Score:</span>
        <span class="score-number"
          style="font-size: 14px;
          line-height: 146%;
          color: #2196f3;
          font-weight: 500;">${this.score}</span>
      </div>
    </div>
    `;
    this.scoreContainer.append(this.scoreItem);
    this.bestField.append(this.header, this.scoreContainer); */

    this.personContainer = createDomNode(this.personContainer, 'div', styles['person-container']);
    this.scoreItemImage = createDomNode(this.scoreItemImage, 'img', styles['score-image']);
    this.scoreItemImage.setAttribute('src', '/images/avatar.jpg');
    this.dataContainer = createDomNode(this.dataContainer, 'div', styles['data-container']);
    this.dataName = createDomNode(this.dataName, 'span', styles['data-name']);


    this.dataEmail = createDomNode(this.dataEmail, 'span', styles['data-email']);

    this.personContainer.append(this.scoreItemImage, this.dataContainer);
    this.scoreWrapper = createDomNode(this.scoreWrapper, 'div', styles['score-wrapper']);
    this.scoreText = createDomNode(this.scoreText, 'span', styles['score-text']);
    this.scoreText.innerText = 'Score:';
    this.scoreNumber = createDomNode(this.scoreNumber, 'span', styles['score-number']);

    this.scoreWrapper.append(this.scoreText, this.scoreNumber);
    this.dataContainer.append(this.dataName, this.dataEmail);

    this.scoreItem.append(this.personContainer, this.scoreWrapper);

   /*  let user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      score: this.score,
    } */

    //let newRec = this.iDB.write<MyRecord>('scoreCollection', user);
    //console.log(newRec);



    setTimeout(async () => {

      let arr = await this.iDB.readAll<MyRecord>('scoreCollection');
      console.log(arr);

      this.dataName.innerText = `${arr[arr.length - 1].firstName} ${arr[arr.length - 1].lastName}`;
      this.dataEmail.innerText = `${arr[arr.length - 1].email}`;
      this.scoreNumber.innerText = `${arr[arr.length - 1].score}`;

      this.scoreContainer.append(this.scoreItem);
      this.bestField.append(this.header, this.scoreContainer);
    }, 200);

  }

  getBestField(): HTMLElement {
    return this.bestField;
  }
}

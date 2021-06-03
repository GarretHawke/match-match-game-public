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

    this.bestField = createDomNode(this.bestField, 'div', styles['best-field']);
    this.header = createDomNode(this.header, 'h2', styles['best-header']);
    this.header.innerText = 'Best players';

    this.scoreContainer = createDomNode(this.scoreContainer, 'div', styles['score-container']);
    this.scoreItem = createDomNode(this.scoreItem, 'div', styles['score-item']);

    setTimeout(async () => {

      let arr = await this.iDB.readAll<MyRecord>('scoreCollection');
      let filtered = await this.iDB.readFiltered<MyRecord>('scoreCollection', 'score', (item) => item.score > 0);

      let newElement: HTMLElement;
      let topScore: number;
      let index: number;
      let filteredLength = filtered.length;
      if (filteredLength <= 10) {
        topScore = 0;
      } else {
        topScore = filteredLength - 10;
      }
      console.log(topScore, filteredLength);

      if (filteredLength == 1) {
        index = 0;
      } else {
        index = filteredLength - 1;
      }

      for (let i = index; i >= topScore; i--) {
        newElement = document.createElement('div');
        newElement.innerHTML = `
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
                  color: #333333;">${filtered[i].firstName} ${filtered[i].lastName}</span>
                <span class="data-email"
                  styles="font-size: 12px;
                  line-height: 107%;
                  color: #333333;">${filtered[i].email}</span>
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
              font-weight: 500;">${filtered[i].score}</span>
            </div>
          </div>
          `;
        this.scoreContainer.append(newElement);
      }
    this.bestField.append(this.header, this.scoreContainer);
    }, 200);

  }

  getBestField(): HTMLElement {
    return this.bestField;
  }
}

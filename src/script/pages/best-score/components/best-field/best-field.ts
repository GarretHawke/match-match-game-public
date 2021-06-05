import { createDomNode } from '@/common';
import MyRecord from '@/shared/My-record';
import DataBase from '@/shared/dataBase';
import delay from '@/shared/delay';

import styles from './best-field.scss';

export default class BestField {
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

  constructor() {
    this.iDB = new DataBase();
    this.iDB.init('garrethawke');

    this.bestField = createDomNode(this.bestField, 'div', styles['best-field']);
    this.header = createDomNode(this.header, 'h2', styles['best-header']);
    this.header.innerText = 'Best players';

    this.scoreContainer = createDomNode(this.scoreContainer, 'div', styles['score-container']);
    this.scoreItem = createDomNode(this.scoreItem, 'div', styles['score-item']);

    const drawScore = async () => {
      await delay(200);

      const filtered = await this.iDB.readFiltered<MyRecord>(
        'scoreCollection',
        'score',
        item => item.score >= 0,
      );

      let newElement: HTMLElement;
      let topScore: number;
      let index: number;
      const filteredLength = filtered.length;
      if (filteredLength <= 10) {
        topScore = 0;
      } else {
        topScore = filteredLength - 10;
      }

      if (filteredLength === 1) {
        index = 0;
      } else {
        index = filteredLength - 1;
      }

      for (let i = index; i >= topScore; i -= 1) {
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
              <img class="score-image" src="${filtered[i].avatar}"
                style="height: 30px;
                width: 30px;
                border-radius: 50%;
                object-fit: cover;">
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
    };

    drawScore();
  }

  getBestField(): HTMLElement {
    return this.bestField;
  }
}

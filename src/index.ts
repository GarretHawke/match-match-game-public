import './style/index.scss';
import App from '@/routing';
import { DataBase } from '@/shared/dataBase';
import { MyRecord } from '@/shared/My-record';

const app = new App();
window.onload = () => {
  app.routing();
};

window.onpopstate = () => {
  app.routing();
};

//


/* const iDB = new DataBase();
iDB.init('GarretHawke'); */



/* class Control {
  public node: HTMLElement;
  constructor(parentNode: HTMLElement, tagName: string = 'div', className: string = '', caption: string = 'sdc') {
    let el = document.createElement('button');
    el.textContent = `${caption}`;
    parentNode.append(el);
    this.node = el;
  }
}

class Button extends Control {
  public node: HTMLButtonElement;
  public onClick: () => void;
  constructor(parentNode: HTMLElement, caption: string) {
    super(parentNode, 'button', '', caption);
    this.node.onclick = () => {
      this.onClick && this.onClick()
    }
  }
}

const readAllButton = new Button(document.body, 'list');
const filterButton = new Button(document.body, 'filter');

readAllButton.onClick = async () => {
  let arr = await iDB.readAll<MyRecord>('scoreCollection');
  console.log(arr);
}

let oxi = {
  firstName: 'Oxi',
  lastName: 'Tucci',
  email: 'plaximus@gmail.com',
  score: 765,
}

filterButton.onClick = async () => {
  let result = await iDB.readFiltered<MyRecord>('scoreCollection', 'email', (item) => item.email.length > 8 );

  let newRec = await iDB.write<MyRecord>('scoreCollection', oxi);
  console.log('-->', result);
} */

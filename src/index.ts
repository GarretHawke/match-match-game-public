import './style/index.scss';
import App from '@/routing';
//import { DataBase } from '@/shared/dataBase';
import { MyRecord } from '@/shared/My-record';
import { idText } from 'typescript';

const app = new App();
window.onload = () => {
  app.routing();
};

window.onpopstate = () => {
  app.routing();
};

//


/* const iDB = new DataBase();
iDB.init('garrethawke');



class Control {
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


/* const iDB = window.indexedDB;

let database: IDBDatabase = null!;



const openRequest = iDB.open('garrethawke');
openRequest.onupgradeneeded = () => {
  database = openRequest.result;
  let store = database.createObjectStore('scoreCollection', {keyPath: 'id', autoIncrement: true});
  store.createIndex('name', 'name');
  store.createIndex('surname', 'surname');
  store.createIndex('email', 'email', {unique: true});
  store.createIndex('score', 'score');
}

openRequest.onsuccess = () => {
  database = openRequest.result;

  let transaction = database.transaction('scoreCollection', 'readwrite');
  let store =  transaction.objectStore('scoreCollection');
  //store.add({name: 'iva', surname: 'logan', email: '1@', score: 0, id: 1});
  let result = store.put({name: 'glasha', surname: 'logan', email: '3@', score: 350, id: 3});

  result.onsuccess = () => {
    console.log('complete', result.result);
  }

  result.onerror = () => {
    console.log('error: ', result.error);
  }
}

let el = document.createElement('button');
el.textContent = 'list';
document.body.append(el);
el.onclick = () => {
  let transaction = database.transaction('scoreCollection', 'readonly');
  let store =  transaction.objectStore('scoreCollection');
  let result = store.getAll();

  transaction.oncomplete = () => {
    console.log(result.result);
  }

  transaction.onerror = () => {
    console.log('error: ', transaction.error);
  }

  transaction.onabort = () => {
    console.log('abort');
  }
}

let el1 = document.createElement('button');
el1.textContent = 'filter';
document.body.append(el1);
el1.onclick = () => {
  let transaction = database.transaction('scoreCollection', 'readonly');
  let store =  transaction.objectStore('scoreCollection');
  let result = store.index('score').openCursor(null, 'prev');
  let resData: Array<> = [];
  result.onsuccess = () => {
    let cursor = result.result;
    if (cursor) {
      console.log(cursor.value);
      if (cursor.value.score > 100) {
        resData.push(cursor.value);
      }
      cursor.continue();
    }
  }

  transaction.oncomplete = () => {
    console.log(resData);
  }

  transaction.onerror = () => {
    console.log('error: ', transaction.error);
  }

  transaction.onabort = () => {
    console.log('abort');
  }
} */


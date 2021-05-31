
export class DataBase {
  public database: IDBDatabase;

  init(dbName: string, version?: number) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open(dbName);

    openRequest.onupgradeneeded = () => {
      this.database = openRequest.result;
      let store = this.database.createObjectStore('scoreCollection', {keyPath: 'id', autoIncrement: true});
      store.createIndex('firstName', 'firstName');
      store.createIndex('lastName', 'lastName');
      store.createIndex('email', 'email', {unique: true});
      store.createIndex('score', 'score');
    }

    openRequest.onerror = () => {
      console.log('error: ', openRequest.error);
    }

    openRequest.onsuccess = () => {
      this.database = openRequest.result;
    }
  }

  write<RecordType>(collection: string, data: RecordType): Promise<RecordType> {
    return new Promise((resolve, reject) => {
      let transaction = this.database.transaction(collection, 'readwrite');

      transaction.oncomplete = () => {
        resolve(transResult);
      }

      transaction.onerror = () => {
        reject(transaction.error);  // hz
      }

      let store = transaction.objectStore(collection);
      let res = store.put({});
      let transResult: RecordType;
      res.onsuccess = () => {
        res.result;
        let newRecord: RecordType = { ...data, id: res.result };
        transResult = newRecord;
        let result = store.put(transResult);

        result.onsuccess = () => {
          console.log('complete', result.result);
        }

        result.onerror = () => {
          console.log('error: ', result.error);
        }
      }
    });
  }

  readAll<RecordType>(collection: string): Promise<Array<RecordType>> {
    return new Promise ((resolve, reject) => {
      let transaction = this.database.transaction(collection, 'readonly');
      let store = transaction.objectStore(collection);
      let result = store.getAll();

      transaction.oncomplete = () => {
        resolve(result.result);
      }

      transaction.onerror = () => {
        reject(result.error);
      }
    });
  }

  readFiltered<RecordType>(collection: string, param: string, filter: (item: RecordType) => boolean): Promise<Array<RecordType>> {
    return new Promise((resolve, reject) => {
      let transaction = this.database.transaction(collection, 'readonly');
      let store = transaction.objectStore(collection);
      let result = store.index(param).openCursor(null, 'next');
      let resData: Array<RecordType> = [];

      result.onsuccess = () => {
        let cursor = result.result;
        if (cursor) {
          //console.log(cursor.value);
          let currentValue: RecordType = cursor.value;
          if (filter(currentValue)) {
            resData.push(currentValue);
          }
          cursor.continue();
        }
      }

      transaction.oncomplete = () => {
        //console.log(resData);
        resolve(resData);
      }
    });
  }

}

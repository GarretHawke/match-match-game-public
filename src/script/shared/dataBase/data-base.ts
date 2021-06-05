export default class DataBase {
  public database: IDBDatabase;

  init(dbName: string): void {
    const iDB = window.indexedDB;
    const openRequest = iDB.open(dbName);

    openRequest.onupgradeneeded = () => {
      this.database = openRequest.result;
      const store = this.database.createObjectStore('scoreCollection', {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('firstName', 'firstName');
      store.createIndex('lastName', 'lastName');
      store.createIndex('email', 'email' /* , {unique: true} */);
      store.createIndex('score', 'score');
      store.createIndex('avatar', 'avatar');
    };

    /* openRequest.onerror = () => {
      throw Error(`${openRequest.error}`);
    }; */

    openRequest.onsuccess = () => {
      this.database = openRequest.result;
    };
  }

  write<RecordType>(collection: string, data: RecordType): Promise<RecordType> {
    return new Promise((resolve, reject) => {
      const transaction = this.database.transaction(collection, 'readwrite');

      const store = transaction.objectStore(collection);
      const res = store.add({});
      let transResult: RecordType;
      res.onsuccess = () => {
        const newRes = res.result;
        const newRecord: RecordType = { ...data, id: newRes };
        transResult = newRecord;
        store.put(transResult);

        /* result.onerror = () => {
          throw Error(`${(result.error, res.result)}`);
        }; */
      };

      transaction.oncomplete = () => {
        resolve(transResult);
      };

      transaction.onerror = () => {
        reject(transaction.error);
      };
    });
  }

  readAll<RecordType>(collection: string): Promise<Array<RecordType>> {
    return new Promise((resolve, reject) => {
      const transaction = this.database.transaction(collection, 'readonly');
      const store = transaction.objectStore(collection);
      const result = store.getAll();

      transaction.oncomplete = () => {
        resolve(result.result);
      };

      transaction.onerror = () => {
        reject(result.error);
      };
    });
  }

  readFiltered<RecordType>(
    collection: string,
    param: string,
    filter: (item: RecordType) => boolean,
  ): Promise<Array<RecordType>> {
    return new Promise(resolve => {
      const transaction = this.database.transaction(collection, 'readonly');
      const store = transaction.objectStore(collection);
      const result = store.index(param).openCursor(null, 'next');
      const resData: Array<RecordType> = [];

      result.onsuccess = () => {
        const cursor = result.result;
        if (cursor) {
          const currentValue: RecordType = cursor.value;
          if (filter(currentValue)) {
            resData.push(currentValue);
          }
          cursor.continue();
        }
      };

      transaction.oncomplete = () => {
        resolve(resData);
      };
    });
  }
}

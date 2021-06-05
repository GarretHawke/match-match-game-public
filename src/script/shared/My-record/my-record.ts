export default interface MyRecord {
  firstName: string;
  lastName: string;
  email: string;
  score: number;
  id?: IDBValidKey;
  avatar: string;
}

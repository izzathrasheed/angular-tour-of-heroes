import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Izzath',age: 35, },
      { id: 12, name: 'Hassan',age:35, },
      { id: 13, name: 'Asna',age:27, },
      { id: 14, name: 'Farish', age:36,},
      { id: 15, name: 'Misru' },
      { id: 16, name: 'Ismail' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Mohamed', age:34 ,},
      { id: 19, name: 'Hussain' },
      { id: 20, name: 'Herry',age:33,},
    ];
    return {heroes};
  }
}

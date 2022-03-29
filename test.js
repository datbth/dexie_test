require('@babel/polyfill')
require('fake-indexeddb/auto');
const Dexie = require('dexie');

class TestDexie extends Dexie {
  constructor () {
    super('TestDatabase');

    this.version(1).stores({
      records: 'id',
    });
  }
}

const testDexie = new TestDexie();

describe('Test dexie', () => {
  it('can chain operations', () => {
    return testDexie.records.get('a').then(() => {
      return testDexie.transaction('rw', [testDexie.records], () => {
        return testDexie.records.get('b')
          .then(() => {
            expect(1).toEqual(1);
          });
      });
    });
  });

  it('cannot chain operations', () => {
    return testDexie.records.get('a').then(() => {
      return testDexie.transaction('rw', [testDexie.records], async () => {
        return testDexie.records.get('b')
          .then(() => {
            expect(1).toEqual(1);
          });
      });
    });
  });
});

class LocalStorage {
  constructor(name) {
    this.name = name;
  }
  getStore() {
    return JSON.parse(localStorage.getItem(this.name));
  }
  async setStore(data) {
    return localStorage.setItem(this.name, data);
  }
  async removeStore() {
    return localStorage.removeItem(this.name);
  }
}

const adminStorage = new LocalStorage('admin');
const userStorage = new LocalStorage('user');
export default adminStorage;
export {
  userStorage
};

import { makeAutoObservable } from 'mobx';

class AuthStore {
  isLogin = false;
  authData = [{ email: 'matt@ya.ru', password: '123' }];
  currUserEmail = '';

  constructor() {
    makeAutoObservable(this);
  }

  auth = (email: string, password: string) => {
    this.authData.map((data) => {
      if (data.email === email && data.password === password) {
        this.isLogin = true;
        this.currUserEmail = data.email;
      }
      return null;
    });
  };

  authExit = () => {
    this.isLogin = false;
  };

  registry = (email: string, password: string) => {
    if (!this.authData.find((data) => data.email === email)) {
      this.authData.push({ email, password });
      return true;
    }
    return false;
  };
}

const authStore = new AuthStore();

export { authStore };

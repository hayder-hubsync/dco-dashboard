import instance from './instance';

class Refereces {
  baseUrl = 'references';

  getTestSession(value: string, type: string) {
    return instance.get(`${this.baseUrl}/get-test-session?value=${value}&type=${type}`);
  }

  checkCBStatus() {
    return instance.get('https://dcosync.usada.org/');
  }
}

export const References = new Refereces();

import instance from './instance';

class Refereces {
  baseUrl = 'references';

  getTestSession(value: string, type: string) {
    return instance.get(`${this.baseUrl}/test-session?value=${value}&type=${type}`);
  }
}

export const References = new Refereces();

import instance from './instance';

class Refereces {
  baseUrl = 'references';

  getTestSession(tsId: string) {
    return instance.get(`${this.baseUrl}/test-session-by-id?id=${tsId}`);
  }
}

export const References = new Refereces();

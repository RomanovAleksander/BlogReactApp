import { ROOT_URL } from './config';

class ApiService {
  errObj = (url, status) => {
    return {
      message: `Invalid request: ${url}, status ${status}`,
      status: status
    };
  };

  async fetchData(url, option) {
    const res = await fetch(`${ROOT_URL}${url}`, option);
    if (!res.ok) {
      throw this.errObj(`${ROOT_URL}${url}`, res.status);
    }
    return res.json();
  }

  async get(url) {
    return this.fetchData(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async post(url, body) {
    return this.fetchData(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }

  async delete(url) {
    return this.fetchData(url, {
      method: 'DEL',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export default new ApiService();

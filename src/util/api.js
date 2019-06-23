import axios from 'axios';
import storage from './localStorage';

export const setToken = (token) => {
  return new Promise((resolve, reject) => {
    Promise
      .all([storage.setItem('token', token)])
      .then((results) => {
        resolve(results[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


export const getToken = () => {
  return new Promise((resolve, reject) => {
    Promise
      .all([storage.getItem('token')])
      .then((results) => {
        resolve(results[0]);
      })
      .catch((err) => {
        reject(err);
      })
    ;
  });
};

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 30000
});

const request = (method, url, data) => {
  return new Promise((resolve, reject) => {
    getToken()
      .then((token) => {
        (() => {
          if (method === 'get') {
            return instance.request({
              url, method, params: data, headers: {'auth-token': token}
            });
          } else {
            return instance.request({
              url, method, data, headers: {'auth-token': token}
            });
          }
        })()
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            storage.clear();
            window.location = '/';
          }
          reject(err.response);
        })
      ;
      })
    ;
  });
};

export default {
  get: (endpoint, data) => {
    return request('get', endpoint, data);
  },
  post: (endpoint, data) => {
    return request('post', endpoint, data);
  },
  put: (endpoint, data) => {
    return request('put', endpoint, data);
  },
  del: (endpoint, data) => {
    return request('delete', endpoint, data);
  },
  errorArrayForResponse: (res) => {
    return Object.keys(res.data).reduce((all, key) => {
      return all.concat(res.data[key]);
    }, []);
  }
};
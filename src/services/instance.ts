import axios from 'axios';
import { Constants } from '../utils';

const instance = axios.create({
  baseURL: Constants.Stages.uat,
  timeout: 30000
});

// instance.interceptors.response.use(
//   response => response,
//   function (error) {
//     if (error?.response?.status === 401) {
//       store.dispatch(Actions.logOut());
//     }
//     return Promise.reject(error.response);
//   },
// );

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

export default instance;

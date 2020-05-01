// @flow
import Axios from 'axios';
import {ApiEndPoint} from './ApiConstants';

export default function api(URL, method, params = null, data = null) {
  const options = {};
  if (params) {
    options.params = params;
  }
  if (data) {
    options.data = data;
  }
  return Axios.create({
    baseURL: ApiEndPoint.BASE_URL,
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
    method: method,
    responseType: 'json',
    url: URL,
    ...options,
  });
}

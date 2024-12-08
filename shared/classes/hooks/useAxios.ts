import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 60000,
});

export function useAxios() {
  function makeRequest() {
    return axiosInstance;
  }

  return makeRequest;
}

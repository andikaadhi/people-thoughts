import instance from './instance';
export const GET = (path, callback, setFetch = () => {}, errorCallback = () => {}) => {
  setFetch(true);
  instance.get(path)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      errorCallback(error);
    })
    .finally(() => setFetch(false));
}


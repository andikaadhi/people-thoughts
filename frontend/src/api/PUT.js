import instance from './instance';

export const PUT = (path, body, config, callback, setIsPUTTING = () => {}, errorCallback = () => {}, finalCallback = () => {}) => {
  setIsPUTTING(true);
  instance.put(path, body, config)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      errorCallback(error);
    })
    .finally(() => {
      finalCallback();
      setIsPUTTING(false);
    });
}


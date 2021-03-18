import instance from './instance';

export const POST = (path, body, config, callback, setIsPOSTING = () => {}, errorCallback = () => {}, finalCallback = () => {}) => {
  setIsPOSTING(true);
  instance.post(path, body, config)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      errorCallback(error);
    })
    .finally(() => {
      finalCallback();
      setIsPOSTING(false);
    });
}


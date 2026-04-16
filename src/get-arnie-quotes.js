const { httpGet } = require('./mock-http-interface');

const HTTP_STATUS_OK = 200;
const SUCCESS_KEY = 'Arnie Quote';
const FAILURE_KEY = 'FAILURE';

const getArnieQuotes = async (urls) => {
  return Promise.all(
    urls.map(async (url) => {
      const { status, body } = await httpGet(url);
      const { message } = JSON.parse(body);

      return status === HTTP_STATUS_OK
        ? { [SUCCESS_KEY]: message }
        : { [FAILURE_KEY]: message };
    })
  );
};

module.exports = {
  getArnieQuotes,
};

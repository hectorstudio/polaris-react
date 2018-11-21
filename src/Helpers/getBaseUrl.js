/**
 * Generate base url using current window.location
 * @return {String} String containing the base url
 */

const getBaseUrl = () => {
  return 'http://127.0.0.1:8080';
  // return 'http://192.168.178.21:8080';
  // eslint-disable-next-line
  let path;

  if (typeof window !== 'undefined') {
    path = `${window.location.protocol}//${window.location.host}`;
  } else {
    console.log('Cant Find Base Url');
  }

  return path;
};

export default getBaseUrl;

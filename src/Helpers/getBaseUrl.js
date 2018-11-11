/**
 * Generate base url using current window.location
 * @return {String} String containing the base url
 */

const getBaseUrl = () => {
  let path;

  if (typeof window !== 'undefined') {
    path = `${window.location.protocol}//${window.location.host}`;
  } else {
    console.log('Cant Find Base Url');
  }

  return 'http://atalanta.bysh.me:8080';
};

export default getBaseUrl;

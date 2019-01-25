/**
 * Generate base url using current window.location
 * @return {String} String containing the base url
 */

const getBaseUrl = () => {
  let path;

  if (typeof window !== 'undefined') {
    // path = `${window.location.protocol}//${window.location.host}`;
    path = 'http://atalanta.bysh.me:8080'
  } else {
    console.log('Cant Find Base Url');
  }

  return path;
};

export default getBaseUrl;

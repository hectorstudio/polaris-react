/**
 * Generate base url using current window.location
 * @return {String} String containing the base url
 */

const getBaseUrl = () => {
  let path;

  if (typeof window !== 'undefined') {
    // path = `${window.location.protocol}//${window.location.host}`;
    path = 'http://nereus.bysh.me:8080';
  } else {
    return false;
  }

  return path;
};

export default getBaseUrl;

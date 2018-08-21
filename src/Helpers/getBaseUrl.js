/**
 * Generate base url using current window.location
 * @return {String} String containing the base url
 */

const getBaseUrl = () => {
  // eslint-disable-next-line
    let path;

  // For use when we have it running on servers
  if (typeof window !== 'undefined') {
    path = `${window.location.protocol}//${window.location.host}`;
  } else {
    console.log('Cant Find Base Url');
  }

  return path;
};

export default getBaseUrl;

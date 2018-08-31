/**
 * Get Url Parameters
 * @param {String, String} Url Parameter & Current URL
 * @return {String} String containing param
 */
const getUrlParameter = (name, url) => {
  let nUrl;

  if (!url) nUrl = window.location.href;
  const nName = name.replace(/\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${nName}(=([^&#]*)|&|#|$)`);

  const results = regex.exec(nUrl);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export default getUrlParameter;

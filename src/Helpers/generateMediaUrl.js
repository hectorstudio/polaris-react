/**
 * Generates url for media item
 * @param {string string string} Type of media, UUID and Name
 * @return {String} Returns url string
 */

const generateMediaUrl = (type, uuid) => `/${type.toLowerCase()}/${uuid}`;

export default generateMediaUrl;

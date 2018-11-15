/**
 * Convert Float timestamp to MS
 * @param Float String
 * @return {string} string with Minutes & Hours
 */

/* eslint no-bitwise: ["error", { "allow": ["~"] }] */
const convertFloatMs = (time => `${~~(time / 60)} minutes`);

export default convertFloatMs;

/**
 * Convert Float Timestamp to Minutes
 * @param Float String
 * @return {string} string with Minutes
 */
export const convertToMinutes = (time => `${~~(time / 60)} minutes`);

/**
 * Convert Float Timestamp to Minutes & Seconds
 * @param Float String
 * @return {string} string with Minutes & Seconds
 */

export const convertToMinutesSeconds = (time) => {
  const mins = ~~(time / 60);
  const secs = ~~time % 60;

  return `${(mins > 0 ? `${mins} Minutes` : '')} ${secs} Seconds`;
};

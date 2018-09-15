/**
 * Convert Float timestamp to MS
 * @param Float String
 * @return {string} string with Minutes & Hours
 */

const convertFloatMs = (time) => {
  /* eslint no-bitwise: ["error", { "allow": ["~"] }] */
  const hrs = ~~(time / 3600);
  const mins = ~~((time % 3600) / 60);
  let total;

  if (hrs > 0) {
    total = `${hrs} Hr ${(mins || '0')} Min`;
  } else {
    total = `${mins} Min`;
  }

  return total;
};

export default convertFloatMs;

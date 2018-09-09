/**
 * Convert Float timestamp to MS
 * @param Float String
 * @return {string} string with Minutes & Hours
 */

const convertFloatMs = (time) => {
  /* eslint no-bitwise: ["error", { "allow": ["~"] }] */
  const hrs = ~~(time / 3600);
  const mins = ~~((time % 3600) / 60);
  let ret;

  if (hrs > 0) {
    ret = `${hrs} Hr ${(mins || '0')} Min`;
  } else {
    ret = `${mins} Min`;
  }

  return ret;
};

export default convertFloatMs;

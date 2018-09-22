/**
 * Array of objects filter by key & remove duplicates
 * @param {arr, key, } Array to filter, key to filter by
 * @return {string} Updated array of strings
 */

const streamFilter = (arr, key, value) => {
  const filterS = arr.streams.filter(f => f.streamType.includes(key));
  if (filterS.length === 0) return [];

  if (value in filterS[0]) {
    const mapS = filterS.map(s => s[value]);

    return [...new Set([...mapS])];
  }

  return [];
};

export default streamFilter;

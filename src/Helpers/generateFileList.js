/**
 * Generate file list to select from
 * @param files Array of files
 * @return {array} array with file name & id
 */

const generateFileList = (files) => {
  const arr = [];

  files.forEach((f, i) => {
    const file = {
      value: i,
      label: f.file_name,
    };

    arr.push(file);
  });

  return arr;
};

export default generateFileList;

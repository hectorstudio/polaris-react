const copyToClipboard = (value) => {
  navigator.clipboard.writeText(value).catch((err) => {
    console.error('Could not copy text: ', err);
  });
};

export default copyToClipboard;

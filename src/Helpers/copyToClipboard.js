const copyToClipboard = (value) => {
  navigator.clipboard.writeText(value).catch(err => false);
};

export default copyToClipboard;

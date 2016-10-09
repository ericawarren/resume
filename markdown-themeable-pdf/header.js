// adds header to final output
// @param: passed from markdown-themeable.pdf.js, not super helpful
// INSTEAD, create `contactInfo.json` in same dir as `header.js` and
// this will read that file as the contactInfo object.

module.exports = function (info) {
  var contactInfo = require('./contactInfo.json');
  return {
    height: '1in',
    contents: contactInfo.name
  };
};

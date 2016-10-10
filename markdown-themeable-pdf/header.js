// adds header to final output
// @param: passed from markdown-themeable.pdf.js, not super helpful
// INSTEAD, create `contactInfo.json` in same dir as `header.js` and
// this will read that file as the contactInfo object.

// return object = {height: value, contents: }. This output is specific to my design needs right now but maybe make more general at some point.
// markdown-themeable-pdf adds <header> tags.

module.exports = function (info) {
  var contactInfo = require('./contactInfo.json');
  var name = contactInfo.name;
  var email = contactInfo.email;
  var address1 = contactInfo.address1;
  var address2 = contactInfo.address2;
  var phone = contactInfo.phone;
  return {
    height: '1.25in',
    contents: `<div class="flexContainer" id="resumeInfo">
          <div class="flexLeft flexItem contactItem" id="myName">${name}</div>
            <ul class="flexRight flexItem">
              <li class="contactItem" id="myEmail">${email}</li>
              <li class="contactItem" id="myAddress">${address1}<br />${address2}</li>
              <li class="contactItem" id="myPhoneNumber">${phone}</li>
            </ul>
        </div>`
  };
};

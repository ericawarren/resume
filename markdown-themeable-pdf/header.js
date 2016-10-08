module.exports = function () {
  var headerText = document.querySelector('h1, h1 + ul');
  return {
    height: '1in',
    contents: '<div id="pageHead">' + headerText + '</div>'
  };
};

String.prototype.toJadenCase = function() {
  var result = this;

  //split the statement into each word
  if (this.length !== 0) {
    result = this.split(" ").map(function(word) {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join(" ");
  }

  return result;
};
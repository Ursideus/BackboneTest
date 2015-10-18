function Class(superclass, properties) {
  var prototype;
  if (! properties) {
    // We're creating an object with no superclass
    prototype = superclass;
  } else {
    prototype = Object.create(superclass.prototype);
    for (var prop in properties) {
      if (properties.hasOwnProperty(prop) {
        prototype[prop] = properties[prop];
      }
    }
  }
  var ClassObject = function () {
    var newObject = Object.create(prototype);
    if (newObject.constructor) {
      newObject.constructor.apply(newObject, arguments);
    }
    return newObject;
  };
  ClassObject.prototype = prototype;
  return ClassObject;
}

// Use like:
var Point = Class({
  constructor: function (x, y) {
    this.x = x;
    this.y = y;
  },
  add: function (other) {
    return Point(this.x+other.x, this.y+other.y);
  }
});

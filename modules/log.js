var color = require('cli-color');
var whiteOnBlack = color.bgXterm(236);
var keyArray = [];

color.status = function(msg){
    return whiteOnBlack(msg);
};

color.okay = function(msg){
	return color.green(msg);
};

color.normal = function(msg){
  return color.white(msg);
}

module.exports = color;

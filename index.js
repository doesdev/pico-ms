'use strict'

// setup
var intvls = {s: 1000, m: 60000, h: 3600000}
module.exports = function (str) {
  var num = parseInt(str, 10)
  var intvl = (str + '').replace((num + ''), '').trim().charAt(0)
  return num * (intvls[intvl] || 1)
}

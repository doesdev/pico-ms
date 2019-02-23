'use strict'

var intvls = { s: 1000, m: 60000, h: 3600000, d: 86400000 }
module.exports = function (str) {
  var num = parseFloat(str)
  var intvl = (str + '').replace((num + ''), '').trim().charAt(0)
  return num * (intvls[intvl] || 1)
}

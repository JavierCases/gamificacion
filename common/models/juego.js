'use strict';

module.exports = function(Juego) {
/**
 * Busca un nombre
 * @param {Function(Error, string)} callback
 */

Juego.prototype.getNameInstancia = function(callback) {
  var nombre;
  var juego = this;
  // TODO
  callback(null, juego.nombre);
};


};

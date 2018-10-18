'use strict';

module.exports = function(Juego) {

	Juego.beforeRemote('create', function(context, juego, next) {
    //context.args.data.date = Date.now();
    context.args.data.publisherId = context.req.accessToken.userId;
    next();
  });
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

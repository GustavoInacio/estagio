
// Módulo de configuração do Express
var express = require('express');

module.exports = function() {
 	var app = express();
 	
 	// Seta a variável de ambiente para um nome de chave-valor
 	app.set('port', 3000);

 	// middleware
 	app.use(express.static('./public/'));

 	return app;
};
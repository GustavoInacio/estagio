
// módulo de configuração do Express na aplicação
var express = require('express');
var home = require('../app/routes/home');

module.exports = function() {
 	var app = express();
 	
 	// variáveis de ambiente
 	app.set('port', 3000);

 	// middleware
 	app.use(express.static('./public/'));
 	
 	// template engine
 	app.set('view engine', 'ejs');
 	app.set('views', './app/views');

 	home(app);	

 	return app;
};

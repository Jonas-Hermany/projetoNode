module.exports = function (app) {
	var Schema = require('mongoose').Schema;

	var produto = Schema({
		nome: { type: String, required: true }
		, tipo: { type: String, required: true }
		, valor: { type: Number, required: true }
	});
	return db.model('produtos', produto);
};
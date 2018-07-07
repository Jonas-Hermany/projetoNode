module.exports = function (app) {

	var Produto = app.models.produto;

	var ProdutoController = {
		index: function (req, res) {
			Produto.find({}).exec(function (err, produtos) {
				var resultado = { produtos: produtos };
				res.render('produtos/index', resultado);
			});
		},
		add: function (req, res) {
			res.render('produtos/add', {});
		},
		insert: function (req, res) {
			produto = new Produto(req.body.produto);
			produto.save(function () {
				res.redirect('/');
			});

		},
		view: function (req, res) {
			var _id = req.params.id;
			Produto.findById(_id, function (erro, produto) {
				var resultado = { produto: produto };
				res.render('produtos/view', resultado);
			});
		},
		edit: function (req, res) {
			var _id = req.params.id;
			Produto.findById(_id, function (erro, produto) {
				var resultado = { produto: produto };
				res.render('produtos/edit', resultado);
			});
		},
		update: function (req, res) {
			var _id = req.params.id;
			Produto.findById(_id, function (erro, produto) {
				produto.nome = req.body.produto.nome;
				produto.tipo = req.body.produto.tipo;
				produto.valor = req.body.produto.valor;
				produto.save(function () {
					res.redirect('/');
				});
			});
		},
		delete: function (req, res) {
			var _id = req.params.id
			Produto.findById(_id, function (erro, produto) {
				produto.remove();
				produto.save(function () {
					res.redirect('/');
				});
			});
		}
	}
	return ProdutoController;
};
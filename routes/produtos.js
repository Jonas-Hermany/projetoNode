module.exports = function (app) {
    var produtos = app.controllers.produtos;
    app.get('/', produtos.index);
    app.get('/produto/:id', produtos.view);
    app.get('/produtos/add', produtos.add);
    app.post('/produto', produtos.insert);
    app.get('/produto/:id/edit', produtos.edit);
    app.put('/produto/:id', produtos.update);
    app.delete('/produto/:id', produtos.delete);
};
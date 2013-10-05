
/*
 * GET home page.
 */

exports.carmodels = function(req, res){
	
	res.send(req.query.name);
	//res.send(models);
};



/*step 1*/
exports.carmodel = function(req, res){
	res.render('model', { title: 'Car Configurator', all_models: models.model });
};

/*step 2*/
exports.carpackage = function(req, res){
	res.render('package', { title: 'Car Configurator', all_models: models.model, model_id:1 });
};

/*step 3*/
exports.carcolour = function(req, res){
	res.render('colour', { title: 'Car Configurator', all_models: models.model, model_id:1, package_id:1});
};

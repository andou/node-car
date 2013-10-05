
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
	var car_model_id = 1;
	if (req.query.model!==undefined) {
		car_model_id = req.query.model;
	}
	res.render('package', { title: 'Car Configurator', all_models: models.model, model_id:car_model_id});
};

/*step 3*/
exports.carcolour = function(req, res){
	var car_model_id = 1;
	var car_package_id = 1;
	if (req.query.model!==undefined) {
		car_model_id = req.query.model;
	}
	if (req.query.package!==undefined) {
		car_package_id = req.query.package;
	}
	res.render('colour', { title: 'Car Configurator', all_models: models.model, model_id:car_model_id, package_id:car_package_id});
};

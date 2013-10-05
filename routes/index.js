
/*
 * GET home page.
 */

exports.carmodels = function(req, res){
	
	//res.send(req.query.name);
	res.send(models);
};

/*step 1*/
exports.carmodel = function(req, res){
	var is_mobile = identify(req);
	var car_model_id = 1;
	if (req.query.model!==undefined) {
		car_model_id = req.query.model;
	}

	//running total
	var rtotal = 0;

	res.render('model', { title: 'Car Configurator', all_models: models.model, running_total: rtotal, model_id: car_model_id });

};

/*step 2*/
exports.carpackage = function(req, res){
	var is_mobile = identify(req);
	//default car model id
	var car_model_id = 1;
	//
	var car_package_id = 1;
	//car model object
	var car_model = null;
	//running total
	var rtotal = 0;
	//use id if provided
	if (req.query.model!==undefined) {
		car_model_id = req.query.model;
	}

	if (req.query.package!==undefined) {
		car_package_id = req.query.package;
	}

	//loops through object to retrieve correct model
	for (var i=0 ; i < models.model.length ; i++)
	{
    if (models.model[i].id == car_model_id) {
    	car_model = models.model[i];
    	break;
    }
	}
	if(car_model!==undefined)
		rtotal=car_model.baseCost;

	res.render('package', { title: 'Car Configurator', all_models: models.model, model:car_model,running_total: rtotal, package_id: car_package_id });
};

/*step 3*/
exports.carcolour = function(req, res){
	var is_mobile = identify(req);
	//default car model id
	var car_model_id = 1;
	//car model object
	var car_model = null;
	//default car package id
	var car_package_id = 1;
	//car model object
	var car_package = null;

	if (req.query.model!==undefined) {
		car_model_id = req.query.model;
	}
	if (req.query.package!==undefined) {
		car_package_id = req.query.package;
	}

	//loops through object to retrieve correct model
	for (var i=0 ; i < models.model.length ; i++)
	{
    if (models.model[i].id == car_model_id) {
    	car_model = models.model[i];
    	break;
    }
	}


	if(car_model!==undefined)
	{
		rtotal=car_model.baseCost;

		//loops through retrieved car model to retrieve correct package
		for (var i=0 ; i < car_model.packages.length ; i++)
		{
	    if (car_model.packages[i].id == car_package_id) {
	    	car_package = car_model.packages[i];
	    	break;
	    }
		}
		if(car_package!==undefined){
			rtotal += car_package.accumilativeCost;
		}
	}



	res.render('colour', { title: 'Car Configurator', all_models: models.model, model:car_model, package:car_package,running_total: rtotal });
};




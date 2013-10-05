
/*
 * GET home page.
 */

exports.carmodels = function(req, res){
	
	res.send(req.query.name);
	//res.send(models);
};



exports.carmodel = function(req, res){
	res.render('model', { title: 'Car Configurator', rows : ['aaa','bbb'] });
};

exports.carpackage = function(req, res){
	res.render('package', { title: 'Car Configurator', rows : ['aaa','bbb'] });
};

exports.carcolour = function(req, res){
	res.render('colour', { title: 'Car Configurator', rows : ['aaa','bbb'] });
};

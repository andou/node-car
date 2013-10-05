
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('model', { title: 'pippo', rows : ['aaa','bbb'] });
};


exports.carmodels = function(req, res){
	
	res.send(req.query.name);
	//res.send(models);
};



exports.carmodel = function(req, res){
	res.render('index', { title: 'pippo', rows : ['aaa','bbb'] });
	//res.send(models);
};

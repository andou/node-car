
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'pippo', rows : ['aaa','bbb'] });
};


exports.carmodels = function(req, res){
	res.send(models);
};

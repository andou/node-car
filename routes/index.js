
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Here we are' });
};
exports.pippo = function(req, res){
  res.render('pippo');
};
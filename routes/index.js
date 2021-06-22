var express = require('express');
var fs = require('fs');
var router = express.Router();
var projectlist;
/* GET home page. */
router.get('/', function(req, res, next) {
  var file ='./data.json';// __dirname + 
  
fs.readFile(file, 'utf8', function (err, data) {
if (err) {
  console.log('Error: ' + err);
  return;
}

projectlist=JSON.parse(data).projects;
console.log(projectlist);
res.render('index', { projects:projectlist });
});
});
/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* GET home page. */
router.get('/project', function(req, res, next) {
  var id = req.query.id;
  var file ='./data.json';// __dirname + 
  
fs.readFile(file, 'utf8', function (err, data) {
if (err) {
  console.log('Error: ' + err);
  return;
}

projectlist=JSON.parse(data).projects;
for(i=0;i<projectlist.length;i++){
  if(projectlist[i].id==id){
    
    res.render('project', { title: projectlist[i].projectName, project:projectlist[i] });
    break;
  }
}

});
  
});


module.exports = router;

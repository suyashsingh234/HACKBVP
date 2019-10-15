var express=require('express');
var path=require('path');
var app=express();

var publicpath=path.join(__dirname,"../client");
app.use(express.static(publicpath));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true
});
var db=mongoose.connection;


app.get('/',(req,res)=>{
	res.send(publicpath+'/home.html')
});

app.get('/registration',(req,res)=>{
  res.sendFile(publicpath+'/registration.html');
});


app.post('/signup',(req,res)=>{
  var user=req.body.username;
  var pass=req.body.spass;
  var ad=req.body.address;
    var model1 = require(__dirname+'/saveuser.js');


    var L = mongoose.model('s', model1, 'test');

    // a document instance
    var u = new L({ username:user, password:pass, address:ad });

    // save model to database
    u.save(function (err,L) {
      if (err) return console.error(err);
    });

 res.send(path.join(publicpath,'/user.html'));
});

app.post('/login',(req,res)=>{
  var user=req.body.username;
  var pass=req.body.lpass;
    var model1 = require(__dirname+'/saveuser.js');
  var L = mongoose.model('s', model1, 'test');
  L.findOne({
    'username': user,
    'password':pass}, function(err, us) {

      if (us) {
        res.sendFile(publicpath+'/bvp.html');
      } else {
        res.sendFile(publicpath+'/logerror.html');
      }
   })

})

app.get('/points',(req,res)=>{
  res.sendFile(publicpath+'/points.html')
})

const port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
  console.log("run");
})

var express = require('express');
var app = express();
var jade = require('jade');

var port = process.env.PORT || 8000;

var cities = require('./routes/cities');
app.use('/cities', cities);

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    var mainContent = jade.renderFile('views/index.jade');
    response.send(mainContent);
});
app.delete('cityData', function(req ,res){
    let query = {_myform:req.params.cityData}
    cityData.remove(query,function(err){
        console.log('err');

    })

})

app.listen(port, function(){
    console.log("Listening on port " + port);
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/demo-project', { useMongoClient: true }, function(err, res){
    if(err) throw err;
});

 const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();
 const mongoose = require('mongoose');
 
 require('dotenv/config');


 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());

 const instructorsRoute = require('./routes/instructors');

 app.use('/instructors', instructorsRoute);


 //for routing
app.get('/', (req, res)=> {

    res.sendfile('index.html',instructorsRoute);
});


app.post('/',(req,res) => {
new instructors({

    name : req.body.name,
    car : req.body.car,
    price : req.body.price
})

})

//mongoDB

mongoose.connect('mongodb+srv://pankaj360:Asd123_asd@apipankaj.fpcfi.mongodb.net/apipankaj?retryWrites=true&w=majority', 
{  useNewUrlParser: true },
()=> console.log('connected to DB')

)


 //to start listning

 app.listen(3000);
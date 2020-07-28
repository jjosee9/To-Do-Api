const express = require('express');  //loaded express into project
const bodyParser = require('body-parser'); 

const api = express();                          //__dirname is a global var, gives exact path to public
api.use(express.static(__dirname + '/public')); //use method  //next moving to next middleware
api.use(bodyParser.json()); //parses data and adds to req.body


api.listen(3000, () =>{      //callback function
    console.log('API up and running!');
});

//routes for the API || specific paths/url

// api.get('/', (req, res) =>{
//     //console.log(req);  //to test only, shows data on terminal
//     res.send('Hello World')  //res to send back somthing to the user/browser
// });

api.post('/add', (req, res) =>{
    console.log(req.body);
    res.send('It works!');
});

console.log('server is starting');

const express = require('express');
const app = express();
const server = app.listen(4000, listening);

function listening(){
  console.log("is listening... ");
}


app.use(express.static('./myserver'));

//app.get('/flower', sendFlower);

//function sendFlower(request, response){

//}

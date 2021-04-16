const express = require('express');
const path = require('path');
const port = process.env.PORT || 8081;
const app = express();
var cors = require('cors');
// the __dirname is the current directory from where the script is running
app.use(cors());
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('*',cors(),  (req, res) => {
 header = {"Access-Control-Allow-Methods":"POST,GET, OPTIONS, PUT", "Allow":"POST,GET, OPTIONS, PUT", "Access-Control-Allow-Origin":"*"};
 options = {"headers" : header} 
  res.sendFile(  path.resolve(__dirname, 'index.html'),options );
});

app.listen(port);
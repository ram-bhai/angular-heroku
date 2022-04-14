const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/googlelogin'));
app.get('/', function(req, res) { res.sendFile(path.join(__dirname + 'index.html')); });
app.listen(process.env.PORT || 8080);

// app.listen(port, () => {
//     console.log(`Server listening on the port::${port}`);
// });
import express from "express";

const app = express();
const port = process.env.PORT || 7001;
const path = __dirname + '/server/views/';

app.use(express.static(path));

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

app.get('/api', (req, res) => {
    res.send({
        status: 200,
        message: 'Welcome to TeamHobbes API'
    })
})

app.listen(port, () => {
    console.log('app running on port %s', port);
});
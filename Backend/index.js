const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const models = require('./models');
const User = models.User;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json());

//Set Public Static Folder
app.use(express.static(__dirname + '/public'));

// CORS HEADERS MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

/*
  Table user
 */

// account
app.use('/account', require('./router/accountRouter'));

app.use('/customer', require('./router/customerRouter'));

app.use('/tourguide', require('./router/tourguideRouter'));

// tour
app.use('/tour', require('./router/tourRouter'));

app.use('/blog', require('./router/blogRouter'));

app.use('/registerTrip', require('./router/registerTripRouter'));

app.use('/sort', require('./router/sortRouter'));

app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync()
        .then(() => {
            res.send('Database sync completed!');
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
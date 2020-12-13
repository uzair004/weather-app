const express = require('express');
const app = express();

const router = require('./router');

const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'hbs');


app.use('/', router);


app.listen(port, () => console.log(`listening at port ${port}`));
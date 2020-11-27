const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('index', {
        title: 'express weather finder'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});




app.listen(8080, () => console.log('listening at port 8080'));
const axios = require('axios');

const API_KEY = '1b81feb30ceec1d8a04bcfbc0862728f';


exports.renderHomePage = (req, res) => {
    res.render('index');
}

exports.getWeather = (req, res) => {
    const city = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    axios.get(url).then(response => {
        res.render('index', {
            weather: `It is currently ${response.data.main.temp} in ${response.data.name}.`,
        })
    })
    .catch(error =>{
        console.log(error);
    })

}

exports.renderAboutPage = (req, res) => {
    res.render('about');
}
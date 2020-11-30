const Weather = function(data) {
    this.data = data
    this.errors = []
}

Weather.prototype.validateUserInput = function() {
    if(this.data == '') {
        this.errors.push('please enter name of the city');
    }
}

module.exports = Weather;
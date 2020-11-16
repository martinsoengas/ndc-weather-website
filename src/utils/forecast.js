const request = require('postman-request')
const keys = require('../../keys.js')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/forecast?access_key=${keys.API_KEY_Weather}&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        const current = body.current
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out`
            )
        }
    })
}

module.exports = forecast
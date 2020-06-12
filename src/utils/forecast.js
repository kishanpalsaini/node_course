const request = require('request')

// const forecast = (latitude, longitude, callback) => {

//     const url = 'http://api.weatherstack.com/current?access_key=9697fddffbd9e8c68e6772cfb81849ca&query=New%20York'
//     // const url = 'https://samples.openweathermap.org/data/2.5/weather?lat='+latitude +'&lon='+ longitude +'&appid=439d4b804bc8187953eb36d2a8c26a02'

//     request( {url: url, json: true}, (err, { body }) => {
//         if(err){
//             callback('unable to connect server', undefined)
//         }else if(body.error){
//             callback('Unable to find location! Try different trem', undefined)
//         }else{
//             callback(undefined,body.weather[0])
//         }
//     })

// }

const forecast = (place, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=9697fddffbd9e8c68e6772cfb81849ca&query=' + place
    // const url = 'https://samples.openweathermap.org/data/2.5/weather?lat='+latitude +'&lon='+ longitude +'&appid=439d4b804bc8187953eb36d2a8c26a02'

    request( {url: url, json: true}, (err, { body }) => {
        if(err){
            callback('unable to connect server', undefined)
        }else if(body.error){
            callback('Unable to find location! Try different trem', undefined)
        }else{
            callback(undefined,body)
        }
    })

}

module.exports = forecast
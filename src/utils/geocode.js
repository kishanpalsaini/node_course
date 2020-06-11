
const request = require('request')


const geoCode = (address , callback) =>{

    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoia3BzYWluaTk5IiwiYSI6ImNrYjR1ZGJjMDB4OHEzM285c2gzdnQ0dXUifQ.PdMS4MQt4f5s-SotjT92rQ&limit=1'

    request( {url: url, json:true}, (err, { body }) => {
        if(err){
            callback('Unable to connect', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location! Try different trem', undefined)
        }else{
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                place: body.features[0].place_name 
            })
        }
    })
}

module.exports = geoCode
console.log('client side javascript is loaded !')

// fetch('http://puzzle.mead.io/puzzle')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')


// msg2.textContent = location;

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    var location = search.value;
    msg1.textContent = 'Loading...'
    msg2.textContent = ' '

    // fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    //     response.json().then((data) => {
    //         if (data.error) {
    //             return msg1.textContent = data.error
    //         }
    //         msg1.textContent = data.place
    //         msg2.textContent = data.address
    //     })
    // })

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return msg1.textContent = data.error
            }
            msg1.textContent = data.place
            msg2.textContent = data.address
        })
    })

})
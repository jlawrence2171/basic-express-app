const { default: axios } = require('axios');
const aios = require('axios');

exports.findall = (req, res) => {
// call the jsonplaceholder API
axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(apicall => {
        res.send(apicall.data)
    })
}

exports.findbyid = (req, res) => {
    axios.get("http://jsonplaceholder.typicode.com/posts/" + req.params.id  )
    .then(apicall => {
        res.send(apicall.data)
    })
}
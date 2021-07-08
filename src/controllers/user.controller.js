const axios = require('axios');;

exports.findAll = (req, res) => {
    // call the jsonplaceholder API
    axios.get('http://jsonplaceholder.typicode.com/users')
        .then(apicall => {
            res.send(apicall.data)
        })
    }
    
    exports.findById = (req, res) => {
        axios.get("http://jsonplaceholder.typicode.com/users/" + req.params.id  )
        .then(apicall => {
            res.send(apicall.data)
        })
    }

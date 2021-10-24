const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const port = 2000

app.use(bodyParser.json())


app.use(cors())
app.get('/', (req, res) => {
    res.send('hello form my second node yehhh hmmm!')
})

const users = [{ id: 1, name: "shabana", prof: "actress", number: 12211232112 }, { id: 2, name: "rahima", prof: "actress", number: 12211232112 }, { id: 3, name: "haila", prof: "actress", number: 12211232112 }, { id: 4, name: "sabila", prof: "actress", number: 12211232112 }]

app.get('/user', (req, res) => {
    res.send(users)
})
app.post('/user', (req, res) => {

    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    res.json(newUser)

    nameRef.current.value('')
})
const fruits = [{ name: "mangoe" }, { name: "banana" }, { name: 'orange' }]
app.get('/fruits', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = fruits.filter(fruit => fruit.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(fruits)
    }

})


app.get('/user/:id', (req, res) => {

    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log('My listening port is in', port)
})
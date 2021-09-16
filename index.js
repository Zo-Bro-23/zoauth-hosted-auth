const zoauth = require('zoauth')
const express = require('express')
const mongoclient = require('mongodb').MongoClient
const url = 'mongodb+srv://zohan:zohan@cluster0.fu173.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(url)
const app = express()
const fs = require('fs')
let cached

function connect(){
    if(cached){
        console.log('Using cached')
        return cached
    }
    client.connect(err => {
        if(!err){
            
        }
    })
}

app.get('/', (req, resp) => {
    fs.writeFileSync('config.json', '{"foo": "bar"}')
    resp.send(fs.readFileSync('config.json'))
})

module.exports = app
const express = require('express')
const { addData, getData, deleteData } = require('../controllers/user')
const music_routers = express()

music_routers.post('/addData',addData)
music_routers.get('/getData',getData)
music_routers.delete('/deleteData/:id',deleteData)

module.exports = music_routers
const express = require('express')
const mongoose = require('mongoose')
const questionController = require('../controllers/controller') 
const router = express.Router()

router.get('/questions',questionController.getQuestions)

.post('/question',questionController.postQuestion)


module.exports=router
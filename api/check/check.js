const joi = require('joi')


const username = joi.string().min(3).max(12).required()
const password = joi.string().pattern(/^[\S]{3,20}$/).required()


exports.reg_check = {
    body: { username, password }
}
const catchError = require('../utils/catchError')
const User = require('../models/User')


// Controller of get all users of the DB
const getAllUsers = catchError(async (req, res) => {
    const result = await User.findAll()
    return res.json(result)
})

// Controller of create a new user
const createUser = catchError(async (req, res) => {
    const result = await User.create(req.body)
    return res.status(201).json(result)
})

// Controller of get one user by id
const getOneUser = catchError(async (req, res) => {
    const { id } = req.params
    const result = await User.findByPk(id)

    if (!result) {
        return res.sendStatus(404)
    }

    return res.json(result)
})

// Controller of update a user by id
const updateUser = catchError(async (req, res) => {
    
    const { id } = req.params
    const result = await User.update(req.body, {
        where: { id },
        returning: true
    })

    if(result[0] === 0) {
        return res.sendStatus(404)
    }

    return res.json( result[1][0] )
})

// Controller of remove a user by id
const removeUser = catchError(async (req, res) => {
    const { id } = req.params
    const result = await User.destroy({ where: { id } })
    
    if(!result) {
        return res.sendStatus(404)
    }

    return res.sendStatus(204)
})


module.exports = {
    getAllUsers,
    createUser,
    getOneUser,
    updateUser,
    removeUser,
}
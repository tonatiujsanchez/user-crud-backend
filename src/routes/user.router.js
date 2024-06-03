const { getAllUsers, createUser, getOneUser, updateUser, removeUser } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/')
    .get(getAllUsers)
    .post(createUser)

userRouter.route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(removeUser)


module.exports = userRouter;
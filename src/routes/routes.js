const express = require("express")
const router = express.Router()
const ProductController = require("../Controller/ProductController")
const OrderController = require("../Controller/OrderController")
const UserController = require("../Controller/UserController")
const Middleware = require("../Middelware/auth")

router.post('/product',ProductController.CreateProduct)

router.post('/Order',OrderController.CreateOrder)

router.post('/User',UserController.CreateUser)

router.post('/UserLogin',UserController.UserLogin)

router.put('/user/:UserId',Middleware.authenticate,Middleware.authorise,UserController.UserUpdate)

module.exports=router
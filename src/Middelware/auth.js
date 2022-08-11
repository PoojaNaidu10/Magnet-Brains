const jwt = require("jsonwebtoken")

let authenticate = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"]
        if (!token) {
            return res.status(404).send({ msg: "Token must be Present" })
        }
        next()
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-api-key"];
    let decodetoken = jwt.verify(token, "secret-key");
    console.log(decodetoken)
    let toBeUpdatedUserId= req.params.UserId
    let loggedInUserId= decodetoken.userId;
    if(loggedInUserId !== toBeUpdatedUserId)
    return res.status(403).send({status:false, msg:"you are not authorized to perform this task"})
    else next()
    
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise
const jwt = require ('jsonwebtoken')


module.exports =  (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, 'AZERTY_12345_6789')
        const userId = decodedToken.userId  
        req.auth = {
            userId : userId
        }
    } catch ( error) {
        res.status(401).json({error})
         console.log('erreur post')
        
    }
}
const express = require('express')
const router = express.Router ()
const stuffCtrl = require ('../controllers/stuff')
const auth = require ('../midlleware/auth')
const multer = require ('../midlleware/multer-config')




router.post ('', auth, multer,  stuffCtrl.createThing)
router.put('./:id',auth,  stuffCtrl.modifyThing)
router.delete('/:id', auth,   stuffCtrl.deleteThing)  
router.get('./:id',  stuffCtrl.IdThing)
router.get('/',   stuffCtrl.BibliothequeThing)




  module.exports = router
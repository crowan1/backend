const express = require('express')
const router = express.Router ()
const stuffCtrl = require ('../controllers/stuff')


router.post ('/',  stuffCtrl.createThing)
router.put('./:id', stuffCtrl.modifyThing)
router.delete('/:id', stuffCtrl.deleteThing)
router.get('./:id', stuffCtrl.IdThing)
router.get('/', stuffCtrl.BibliothequeThing)




  module.exports = router
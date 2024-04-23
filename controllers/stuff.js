const BookSchema = require ('../models/Thing')



exports.createThing = (req,res,next)=>{  
    delete req.body.id
    const thing = new Thing(
      {
        ...req.body
      }
    );
    thing.save()
    .then( () => res.status(200).json({message : 'objet crée'}))
    .catch( error => res.status(400).json({ message : 'objets non crée'})) 
  }


  exports.modifyThing = (req,res,next)=>{
    BookSchema.updateOne({id : req.params.id}, {...req.body, id: req.params.id})
    .then(()=> res.status(200).json({message : 'votre objet a était modifié'}))
    .catch(error => res.status(404).json(error))
  }

  exports.BibliothequeThing = (req,res,next)=>{
    BookSchema.find()
    .then(things => res.status(200).json(things))
    .catch( error => res.status(404).json({error}))
  }

  exports.deleteThing = (req,res,next)=>{
    BookSchema.deleteOne({id: req.params.id})
    .then(()=>res.status(200).json({message : 'objets supprimé'}))
    .catch( error => res.status(400).json())
  }

  exports.IdThing =(req, res, next) => {
    BookSchema.findOne({ id : req.params.id})
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(400).json(error));
  }
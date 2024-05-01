const BookSchema = require ('../models/Thing')



exports.createThing =  (req,res,next)=>{  
  console.log('0');
  const bookData = JSON.parse(req.body.book);
  console.log('etape 1');
  delete bookData._id;
  console.log('2');
  delete bookData._userId;
  console.log('3');

  const book = new BookSchema({
      ...bookData,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });

 book.save()
  .then(() => res.status(201).json({message : 'opbjet enregistré'}))
  .catch( (error)  => {res.status(400).json({error})})
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

  

  exports.IdThing = (req, res, next) => {
    const bookId = req.params.id;

    Book.findById(bookId)
        .then((book) => {
            if (!book) {
                return res.status(404).json({
                    message: "Livre non trouvé.",
                    error: error,
                });
            }

            res.status(200).json(book);
        })
        .catch((error) => {
            res.status(500).json({
                message:
                    "Une erreur est survenue lors de la récupération du livre.",
                error: error,
            });
        });
};


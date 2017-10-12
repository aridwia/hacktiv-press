const Articles = require('../models/Article');

var getallArticles = (req,res) => {
  Articles.find({})
  .then(allArticles => {
    res.send(allArticles)
  })
  .catch(err => {
    res.send(err)
  })
}

var createArticle = (req,res) => {
  Articles.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.id
  })
  .then(newArticle => {
    res.send(newArticle)
  })
  .catch(err => {
    res.send(err)
  })
}

var updateArticle = (req,res) => {
  Articles.findOne({_id: req.params.id})
  .then(oneArticle => {
    console.log('masuk sini');
    if(oneArticle.author == req.id){
      Articles.updateOne({_id: req.params.id},{
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author
      })
      .then(updatedArticle => {
        res.send(updatedArticle)
      })
      .catch(err => {
        res.send(err)
      })
    } else {
      res.send('anda tidak punya hak')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

var removeArticle = (req,res) => {
  Articles.findOne({_id: req.params.id})
  .then(oneArticle => {
    if(oneArticle.author == req.id){
      Articles.deleteOne({_id: req.params.id})
      .then(deletedArticle => {
        res.send(deletedArticle)
      })
      .catch(err => {
        res.send(err)
      })
    } else {
      res.send('anda tidak punya hak')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

var getoneArticle = (req,res) => {
  Articles.findOne({_id:req.params.id})
  .then(oneArticle => {
    res.send(oneArticle)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {getallArticles,createArticle,updateArticle,removeArticle,getoneArticle};

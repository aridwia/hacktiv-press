const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Articleschema = new Schema ({
  title: {
    type: String,
    required: [true, 'title harus di isi']
  },
  content: {
    type: String,
    required: [true, 'title harus di isi']
  },
  category: {
    type: String,
    required: [true, 'title harus di isi']
  },
  author: {
    type: Schema.Types.ObjectId, ref: 'User',
    required: [true, 'title harus di isi']
  }
},{
  timestamps: true
})

const articles = mongoose.model('articles', Articleschema)

module.exports = articles;

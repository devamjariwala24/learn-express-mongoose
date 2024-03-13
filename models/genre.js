var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100, minLength: 4},
    // author: {type: Schema.Types.ObjectId, ref: 'Book', required: true}
  }
);


//Export model
module.exports = mongoose.model('Genre', GenreSchema);

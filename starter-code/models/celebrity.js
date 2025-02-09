const { Schema, model } =  require('mongoose');

const celebritySchema = new Schema ({
  name: { type: String },
  occupation: { type: String },
  cathPhrase: { type: String }
})

const Celebrity = model('celebrity', celebritySchema);

module.exports = Celebrity;
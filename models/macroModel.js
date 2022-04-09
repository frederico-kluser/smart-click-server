const { default: mongoose } = require('mongoose');

const MacroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  actived: {
    type: Boolean,
    default: false,
  },
  code: {
    type: String,
    required: [true, 'Code is required'],
    unique: true,
  },
  xml: {
    type: String,
    required: [true, 'XML is required'],
    unique: true,
  },
}, { collection: 'macros' });

module.exports = mongoose.model('macros', MacroSchema);

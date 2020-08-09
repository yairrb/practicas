'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = Schema( {
    name: String,
    descripcion: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});
 

module.exports = mongoose.model('project', projectSchema);

//projects --> guarda los documentos en esa direccion
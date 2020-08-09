'use stict'
var Project = require('../models/project');

var fs = require('fs');
const { exists } = require('../models/project');
var path = require('path');


var controller = {
    home: function (req, res) {
        //logica  
        return res.status(200).send({
            message: 'Respuesta de Home'
        });
    },
    test: function (req, res) {
        //logica
        return res.status(200).send({
            message: 'Respuesta de test Exitosa'
        });
    },
    saveProject: function (req, res) {
        var project = new Project();
        var params = req.body;
        project.name = params.name;
        project.descripcion = params.descripcion;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projecStored) => {
            if (err) {
                return res.status(500).send({
                    message: 'error al guardar'
                })
            }
            if (!projecStored) {
                return res.status(404).send({
                    message: 'No se ha podido guardar. No projec Stored'
                })
            }

            return res.status(200).send({
                message: 'status guardado',
                project: projecStored
            });
        });

    },

    getProject: function (req, res) {
        var projectId = req.params.id;

        if (projectId == null) {
            return res.status(404).send({
                message: "El proyecto no existe"
            });
        }
        Project.findById(projectId, (err, project) => {

            if (err) return res.status(500).send({
                message: "error al recuperar los datos de la base"
            });
            if (!project) return res.status(404).send({
                message: "el projecto buscado no existe"
            });
            return res.status(200).send({
                project
            })
        });
    },

    getProjects: function(req, res) {
        Project.find({}).sort('+year').exec( (err, projects) => {
            if (err) return res.status(500).send({
                message: "error al recuperar los datos de la Base."
            });
            if (!projects) return res.status(404).send({
                message: "no se encontraron datos"
            });
            return res.status(200).send({projects});
        })
    },

    updateProject: function( req, res) {
        var projectId = req.params.id
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update,{new:true}, ( err, projectUpdated) => {
            if (err) return res.status(500).send({
                message: "error al actualizar la Base de datos."
            });
            if (!projectUpdated) return res.status(404).send({
                message: "No se ha podido actualizar el projecto o No existe"
            });

            return res.status(200).send({
                project: projectUpdated
            })
        });
    },

    deleteProject: function(req, res) {
        var projectId = req.params.id;
        Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
            if ( err) return res.status(500).send({
                message: "No se ha podido borrar el projecto"
            });
            if (!projectRemoved) return res.status(404).send({
                message: "No se puede eliminar el projecto"
            });
            return res.status(200).send({
                project: projectRemoved
            })
            
        })
    },
    getImageFile: function(req, res) {
        var file = req.params.image;
        var path_file = './uploads/'+file

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    message: "No existe la imagen buscada"
                })
            }
        })
    },

    uploadImage: function(req, res){
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...'
        
        if (req.files) {

            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var filename = fileSplit[1];

            var extSplit = filename.split('\.');
            var fileExtension = extSplit[1];

            if ( fileExtension == 'png' || fileExtension == 'jpg' || fileExtension == 'png'){

                Project.findByIdAndUpdate(projectId, {image: filename},{new: true}, ( err, projectUpdated) => {
                    if ( err) return res.status(500).send({
                        message: "La imagen no se ha subido correctamente"
                    });
                    if(!projectUpdated) return res.status(404).send({
                        message: "el projecto no existe"
                    });
                    return res.status(200).send({
                        projects: projectUpdated
                    });
                })
            }else {
                fs.unlink(filePath, (err) => {
                    return res.status(500).send({
                        message: "La extension del archivo no es valida"
                    })
                });
            }

            
        }else{
            return res.status(200).send({
               message: fileName
            })
        }
    }
};


module.exports = controller;
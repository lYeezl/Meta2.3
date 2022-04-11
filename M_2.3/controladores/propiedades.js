const propiedades = require("../modelos/propiedades.json");
const _ = require("underscore");

const create = function(req,res){
    const id = propiedades.length + 1;
    const {clave_catastral, descripcion, propietarios} = req.body;
    if (clave_catastral && propietarios && descripcion) 
    {
        const newPropiedad = {...req.body, id}
        propiedades.push(newPropiedad);
        res.json(propiedades);
    }
    else
    {
        res.send("Error");
    }
}

const read = function(req, res)
{
    res.json(propiedades);
}

const update = function(req, res)
{
    const {id} = req.params;
    const {clave_catastral, descripcion, propietarios} = req.body;
    if (clave_catastral && propietarios && descripcion) 
    {
        _.each(propiedades, (propiedad, i) =>
        {
            if (propiedad.id == id) 
            {
                propiedad.clave_catastral = clave_catastral;
                propiedad.descripcion = descripcion;
                propiedad.propietarios = propietarios;
            }
        });
        console.log(JSON.stringify(propiedades));
        res.json(propiedades);
    }
    else
    {
        res.send("Error");
    }
}

const del = function(req, res)
{
    let a = 0;
    const {id} = req.params;
    
    _.each(propiedades, (propiedad, i) =>
    {
        if (propiedad.id == id) 
        {
            a = i;
        }
    });
    propiedades.splice(a, 1);
    res.json(propiedades);
}

module.exports.create = create;
module.exports.read = read;
module.exports.update = update;
module.exports.del = del;
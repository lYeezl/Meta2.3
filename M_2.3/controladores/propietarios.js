const propietarios = require("../modelos/propietarios.json");
const _ = require("underscore");

const create = function(req,res){
    const id = propietarios.length + 1;
    const {rfc, nombre} = req.body;
    if (rfc && nombre) 
    {
        const newPropietario = {...req.body, id}
        propietarios.push(newPropietario);
        res.json(propietarios);
    }
    else
    {
        res.send("Error");
    }
}

const read = function(req, res)
{
    res.json(propietarios);
}

const update = function(req, res)
{
    const {id} = req.params;
    const {rfc, nombre} = req.body;
    if (rfc && nombre) 
    {
        _.each(propietarios, (propietario, i) =>
        {
            if (propietario.id == id) 
            {
                propietario.rfc = rfc;
                propietario.nombre = nombre;
            }
        });
        console.log(JSON.stringify(propietarios));
        res.json(propietarios);
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
    
    _.each(propietarios, (propietario, i) =>
    {
        if (propietario.id == id) 
        {
            a = i;
        }
    });
    propietarios.splice(a, 1);
    res.json(propietarios);
}

module.exports.create = create;
module.exports.read = read;
module.exports.update = update;
module.exports.del = del;
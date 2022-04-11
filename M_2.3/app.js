const express = require("express");
const app = express();
const port = 3000;
const propiedades_routes = require("./routes/propiedades");
const propietarios_routes = require("./routes/propietarios");
const arrendatarios_routes = require("./routes/arrendatarios");

app.use(express.json());
app.use("/propiedades", propiedades_routes);
app.use("/propietarios", propietarios_routes);
app.use("/arrendatarios", arrendatarios_routes);

app.get('/', (req, res) => 
{	
	res.send("Bienvenido al servidor REST de la Meta 2.3");	
});

app.listen(port, () => 
{
    console.log("Server escuchando en el puerto", port);
}).on("Error", (err) => 
{
    console.log("ERROR: ", err);
});
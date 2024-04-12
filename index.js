const express = require("express");
const app = express();
const port = 3001;
const routerUser = require("./routes/routesUser");
const routerTareas = require("./routes/routsTarea");
const mdlw = require("./middlewares/validatePermissions");

app.use(express.json());

app.use("/api", routerUser);

app.use(mdlw.validatePermission);

app.use("/api", routerTareas);

app.listen(port, "localhost", () => {
    console.log(`Se levantó en el puerto ${port}`)
});

module.exports = app;
//npm start
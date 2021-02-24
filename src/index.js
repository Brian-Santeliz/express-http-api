const express = require("express");
const morgan = require("morgan");
const router = require("./routes");

const app = express();

app.set("port", 5000);

app.use(express.json());
app.use(morgan("dev"));

app.use("/propiedades", router);

app.listen(app.get("port"), () =>
  console.log(`Servido en el puerto ${app.get("port")}`)
);

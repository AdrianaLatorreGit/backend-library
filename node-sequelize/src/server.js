const express = require("express");
const dotenv = require("dotenv");
const { router: userRouter } = require("./routes/UserRoutes");
dotenv.config();
const morgan = require("morgan");

const app = express();
const port = process.env.PORT;

require("./database/database");

app.use(express.json());
app.use("/users", userRouter);
app.use(morgan("tiny"));

app.listen(port, () => {
    console.log("Servidor rodando 😃");
});

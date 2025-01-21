const express = require("express");
const app = express();
const cors = require("cors");

const bookHandler = require("./routers/bookRouter");
const userHandler = require("./routers/userRouter");
const errorHandler = require("./controllers/errorController");
const AppError = require("./utils/AppError");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4040", // Allow only this origin
    methods: "GET,POST,PATCH,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, // Allow cookies
  })
);

app.use("/book", bookHandler);
app.use("/auth", userHandler);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler); //Global Error Handler

module.exports = app;

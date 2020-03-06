const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authentication = require("./middleware/authenticator");
const emailjob = require("./middleware/emailsender");
const heroes = require("./routes/heroes");
const home = require("./routes/home");
const users = require("./routes/users");
const auth = require("./routes/auth");

const PORT = process.env.PORT;
//const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(emailjob);
app.use(authentication);
app.use("/", home);
app.use("/api/heroes", heroes); // custom middleware
app.use("/api/users",users);
app.use("/api/auth",auth);

mongoose
  .connect("mongodb+srv://Yanik:<yanik>@cluster0-lw3uy.mongodb.net/herodb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to db successfully"))
  .catch(ex => console.log(ex));

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});



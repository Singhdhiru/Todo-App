const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const todo = require("./controllers/createTodo");
const PORT = process.env.PORT || 3000;
//* connect mongo db
connectDB();

//* Add these two lines to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//* import routes

const todoRoutes = require("./Routes/todos");
//* mount the todo Api routes
app.use("/api/v1", todoRoutes);

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Server is working!');
  });
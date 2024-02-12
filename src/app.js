const express = require("express");
const cors = require("cors");
// const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();



const app = express();

// import startserver file
const server = require("./database/startserver");

// import rotes-create_books.js

const createBookRouter = require("./routes/create_books")


// app.use(cors());  // Middleware : Enable CORS

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the actual origin of your React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  






app.use(express.json());
app.use(bodyParser.json({limit:"1000mb"}));
app.use(bodyParser.urlencoded({limit:"1000mb",extended:true}));
// app.use(morgan("combined",{stream}));  // Middleware : Logging withMorgan


// use createrouter to craete database

app.use("/api",createBookRouter);


// Routes
app.get("/",(req,res) => {
    try{
        let data=null;
        let newdata=data.name;
        logger.info("Hello, World requested!");
        res.send("Hello World!").status(200);
    } catch (err) {
        logger.error(`Error : ${err.message}`);
        res.send("error occured!").status(500)
    }
});



// const port = 5000;

// app.listen(port,() => {
//     console.log(`server is running on http://localhst : ${port}`)
// } )




server.startServer(app);
const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router)

mongoose.connect("mongodb+srv://admin:2fvmAlQdLovqOJM7@cluster0.wf37r.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("Connected Successfully!"))
    .then(() => {
        app.listen(5000)
    })
    .catch((err) => console.log(err))


/*DB_PW-2fvmAlQdLovqOJM7*/
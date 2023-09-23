const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require("./router");
const cors = require("cors");


const app = express();
const PORT = 3000;


dotenv.config();
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
        w: 'majority',
        wtimeout: 5000
    }
})
    .then(() => {
        console.log(`Connected to MongoDB`);

    })
    .catch((err) => {
        console.log(`this is ${err}`)
    });
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);



app.listen(PORT, async () => {

    console.log(`App is running on port ${PORT}`)

});
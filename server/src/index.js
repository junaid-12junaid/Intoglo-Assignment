const express = require('express');
const route = require('./routes/route');
const mongoose = require('mongoose');
const app = express();


const cors=require('cors')

app.use(express.json());

app.use(cors())

mongoose.connect("mongodb+srv://Junaid619-DB:oS4jO8pwUnVaE0Fu@cluster0.4ufpuyj.mongodb.net/Intoglo-Assignment?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route)


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});
const express = require('express');
const routes = require('./routes/api') // importing the routes 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { username, password, database } = require('./config'); // Import username, password, and databasename from config

// Connect to MongoDB Atlas using URI
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.boarbds.mongodb.net/${database}`)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        mongoose.connection.db.admin().listDatabases(function(err, result) {
            console.log(result.databases.map(db => db.name));
            mongoose.connection.close();
        });
    })
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.json());
// initialize routes
app.use('/api',routes); // using the routes 

//error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message})
})

const port = process.env.PORT || 5510;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const loginRoutes = require('./routes/login');
const todoRoutes = require('./routes/todo');

const app = express(); 

//mongoDB connection
const connectionString = 'mongodb+srv://lianshuangpucheu:mongodbtest2023@cluster0.eviezi0.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log('MongoDB connected')
})
.catch((err) =>{
    console.error('MongoDB connection error', err)
});


// middleware

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// routes
app.use('/', authRoutes);
app.use('/login', loginRoutes);
app.use('/todo', todoRoutes);



//server

app.listen(3000,() => console.log("Server started listening on port: 3000"))

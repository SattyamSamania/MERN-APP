const express = require('express');
require('dotenv').config();

const workoutRoutes = require('./routes/workouts')

const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes 

app.use('/api/workouts', workoutRoutes);



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
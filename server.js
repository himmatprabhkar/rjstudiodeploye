require('dotenv').config();
const express = require('express');
const morgan = require('morgan'); 
const helmet = require('helmet');
const cors = require('cors');
const db = require('./src/config/database');

const apiRoutes = require('./src/routes/authRoutes/authRoutes');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());


app.use('/api', apiRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

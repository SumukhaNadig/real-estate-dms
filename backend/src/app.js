const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const propertiesRouter = require('./routes/properties');
const userRoutes = require('./routes/users');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

app.use('/properties', propertiesRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

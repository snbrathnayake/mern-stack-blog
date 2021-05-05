require('dotenv/config');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dbconnect = require('./configs/dbcon');

// Import routes
const index = require('./routes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

//** Connect to database
dbconnect();

const app = express();


//**middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//**route middleware */
app.use('/', index);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/blogs', blogRoutes);


const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
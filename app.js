const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const auth = require('./middlewares/auth');

const app = express();
const port = process.env.PORT || 3000;

mongoose.set("strictQuery", false);

mongoose.connect('mongodb+srv://ashishmohapatra240:zairza123@cluster0.jzbr5aw.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
    console.log(`Database connection error: ${err}`);
});


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use('/users', auth, userRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

import express from 'express';

const app = express();

// Configure ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/' , (req, res) => {
    res.render('index', {
        names: ['Ram', 'Hitesh', 'Rupa'],
        title: 'My Website',
        message: 'Hello from EJS my friend!',
    });
});

app.listen(8000, () => console.log('Server started'));
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Witaj w aplikacji Express!');
});

app.get('/contact', (req, res) => {
    res.send('Strona kontaktowa');
});

app.get('/api/info', (req, res) => {
    res.json({
        application: 'Express LAB4',
        version: '1.0'
    });
});


app.get('/api/users/search', (req, res) => {
    const { name, page = 1 } = req.query;
    res.json({ name, page });
});

// Zadanie 4.2a: Parametry ścieżki
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        message: 'Pobrano użytkownika',
        id: id
    });
});

app.post('/api/users', (req, res) => {
    res.status(201).json({ message: 'Utworzono nowego użytkownika' });
});

app.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `Zaktualizowano użytkownika o ID: ${id}` });
});

app.delete('/api/users/:id', (req, res) => {
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});
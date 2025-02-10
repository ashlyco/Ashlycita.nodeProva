const express = require('express');
const app = express();
const port = 8080;


app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Benvingut al servidor!`);
})



app.get('/usuaris', (req, res) => {
    res.send(`Llistat d'usuaris`);
})

app.post('/usuaris', (req, res) => {
    res.send(`Nou usuari creat`);
})

app.put('/usuaris/:id', (req, res) => {
    res.send(`Ususari actualitzat`);
})

app.patch('/usuaris/:id', (req, res) => {
    res.send(`Usuari parcialment editat`);
})

app.delete('/usuaris/:id', (req, res) => {
    res.send(`Usuari eliminat`);
})




app.get('/productes', (req, res) => {
    res.send(`Llistat de productes disponibles`);
})

app.post('/productes', (req, res) => {
    res.send(`Nou producte afegit`);
})

app.put('/productes/:id', (req, res) => {
    res.send(`producte actualitzat`);
})

app.delete('/productes/:id', (req, res) => {
    res.send(`Producte eliminat`);
})






app.get('/comandes', (req, res) => {
    res.send(`Llistat de comandes realitzades`);
})

app.post('/comandes', (req, res) => {
    res.send(`Nova comanda creada`);
})

app.patch('/comandes/:id', (req, res) => {
    res.send(`Estat de la comanda actualizat`);
})






app.get('/serveis', (req, res) => {
    res.send(`Llistat de serveis oferts`);
})

app.post('/serveis', (req, res) => {
    res.send(`Nou servei afegit`);
})





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
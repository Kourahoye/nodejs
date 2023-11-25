const express = require('express');
const multer = require('multer');
const axios = require('axios');
const path = require('path')
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "public/index.html"))
    })
    // Récupérer la liste des pays depuis une API (par exemple, https://restcountries.eu/rest/v2/all)
app.get('/pays', (req, res) => {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            const countries = response.data;
            res.json(countries);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des pays.' });
        });
});

// Récupérer les auteurs depuis https://openlibrary.org/authors/OL33421A.json en utilisant Axios
app.get('/auteurs', (req, res) => {
    axios.get('https://openlibrary.org/authors/OL33421A.json')
        .then(response => {
            const authors = response.data;
            res.json(authors);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des auteurs.' });
        });
});

// Gérer l'envoi du formulaire
app.post('/confirmation', upload.fields([{ name: 'cv', maxCount: 1 }, { name: 'images', maxCount: 10 }]), (req, res) => {
    const { nom, prenom, genre, pays, auteurs } = req.body;
    const cvFile = req.files['cv'][0];
    const imageFiles = req.files['images'];

    // Faire quelque chose avec les données du formulaire et les fichiers téléchargés
    // Par exemple, enregistrer les informations dans une base de données

    res.json({ message: 'Formulaire soumis avec succès !' });
});

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Le serveur est démarré sur le port 3000');
    console.log("http://127.0.0.1:3000")
});
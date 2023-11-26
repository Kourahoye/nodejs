const express = require('express');
const multer = require('multer');
const axios = require('axios');
const path = require('path')
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

// Gérer l'envoi du formulaire

// ...

app.post('/confirmation', upload.fields([{ name: 'cv', maxCount: 1 }, { name: 'images', maxCount: 10 }]), (req, res) => {
    const { nom, prenom, genre, pays, auteurs } = req.body;
    const cvFile = req.files['cv'][0];
    const imageFiles = req.files['images'];

    // Déplacez le fichier du CV vers un répertoire de destination
    const cvDestination = 'public/uploads/cv';
    const cvPath = path.join(cvDestination, cvFile.originalname);


    // Déplacez les fichiers d'images vers un répertoire de destination
    const imageDestination = 'public/uploads/images';
    const imagePaths = [];
    imageFiles.forEach((file) => {
        const imagePath = path.join(imageDestination, file.originalname);
        file.mv(imagePath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Une erreur s\'est produite lors du téléchargement des images.' });
            }
        });
        imagePaths.push(imagePath);
    });

    // Faites quelque chose avec les données du formulaire et les chemins des fichiers téléchargés
    // Par exemple, enregistrez les informations dans une base de données en utilisant les chemins des fichiers

    res.json({ message: 'Formulaire soumis avec succès !' });
});
// Démarrer le serveur
app.listen(3000, () => {
    console.log('Le serveur est démarré sur le port 3000');
    console.log("http://127.0.0.1:3000")
});
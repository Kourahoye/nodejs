function addAutors() {
    axios.get('https://openlibrary.org/authors/OL33421A.json')
        .then(response => {
            const author = response.data;
            let select = document.querySelector('#auteur');
            const option = document.createElement('option');
            option.value = author.name;
            option.textContent = author.personal_name;
            select.appendChild(option);
        })
        .catch(error => {
            console.log(error);
            console.log("Une erreur s'est produite lors de la récupération de l'auteur.");
        });
    axios.get('https://openlibrary.org/authors/OL2479609A.json')
        .then(response => {
            const author = response.data;
            let select = document.querySelector('#auteur');
            const option = document.createElement('option');
            option.value = author.name;
            option.textContent = author.personal_name;
            select.appendChild(option);
        })
        .catch(error => {
            console.log(error);
            console.log("Une erreur s'est produite lors de la récupération de l'auteur");
        });
    axios.get('https://openlibrary.org/authors/OL11513223A.json')
        .then(response => {
            const author = response.data;
            let select = document.querySelector('#auteur');
            const option = document.createElement('option');
            option.value = author.name;
            option.textContent = author.personal_name;
            select.appendChild(option);
        })
        .catch(error => {
            console.log(error);
            console.log("Une erreur s'est produite lors de la récupération de l'auteur");
        });
}

document.addEventListener('DOMContentLoaded', addAutors);
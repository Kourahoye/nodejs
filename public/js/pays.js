function addCountries() {
    axios.get('https://restcountries.com/v3.1/all?lang=fr')
        .then(response => {
            const countries = response.data;
            const countriesByContinent = {};

            // Regrouper les pays par continent
            countries.forEach(pays => {
                const continent = pays.region;

                if (!countriesByContinent[continent]) {
                    countriesByContinent[continent] = [];
                }

                countriesByContinent[continent].push(pays.name.common);
            });

            // Afficher les pays par continent dans le select
            const select = document.querySelector('#pays');
            for (const continent in countriesByContinent) {
                const optgroup = document.createElement('optgroup');
                optgroup.label = continent;

                countriesByContinent[continent].forEach(pays => {
                    const option = document.createElement('option');
                    option.value = pays;
                    option.text = pays;
                    optgroup.appendChild(option);
                });

                select.appendChild(optgroup);
            }
        })
        .catch(error => {
            console.error(error);
            console.log("Une erreur s'est produite lors de la récupération des pays.");
        });
}

document.addEventListener('DOMContentLoaded', addCountries);
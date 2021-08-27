const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

loadCountries();
const displayCountries = countries => {
    console.log(countries);
    const container = document.getElementById('countries');
    countries.forEach(country => { //multiline functions
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h1>${country.name}</h1>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')" class="button-change">Detail</button>
        `;
        // const p = document.createElement('p');
        // const h1 = document.createElement('h1');
        // p.innerText = country.capital;
        // h1.innerText = country.name;
        // div.appendChild(h1);
        // div.appendChild(p);
        container.appendChild(div);
    });
}

const loadCountryByName = countryName => {
    const url = `//restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
        .then(respone => respone.json())
        .then(data => displayCountryData(data[0]))

}

const displayCountryData = data => {
    const countryDiv = document.getElementById('country-detail');
    //innerHTML USE korle ar appendchild kora lagena.
    countryDiv.innerHTML = `
    <h4>${data.name}</h4> 
    <p>Population: ${data.population}</p>
    <img width="20%" src="${data.flag}">
    `;
}
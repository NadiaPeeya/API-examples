const loadQoutes = () => { //multiline function 
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQoute(data))
}
const displayQoute = quotes => {
    const qouteElement = document.getElementById('qoute');
    qouteElement.innerText = quotes.quote;
}
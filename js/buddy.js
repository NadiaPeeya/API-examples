const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = data => {
    console.log(data); // data directly deinai tai buddies banaisi 

    //buddies theke result nisi 
    const buddies = data.results;
    const container = document.getElementById('buddies')
    //result near por prottekta loop korsi
    for (const buddy of buddies) {
        // console.log(buddy.name.first);
        const p = document.createElement('P')
        p.innerText = ` Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}
        `;
        container.appendChild(p)
    }
}
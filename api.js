const randomApi = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => displayData(data.results))
}
randomApi();

const displayData = info => {
    // console.log(info)
    const users = document.getElementById('users');
    for (const user of info) {
        // console.log(users.gender)
        const p = document.createElement('p');
        p.innerText = `Name : ${user.name.title} ${user.name.first} ${user.name.last}`;
        users.appendChild(p);
    }
}
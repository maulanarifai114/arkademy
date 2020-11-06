const displayName = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => response.map(index => console.log(index.name)))
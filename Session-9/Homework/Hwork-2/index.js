const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR2eKzX-V1OGTb089mSH5Fsneu8cQRento_R1cyj3paO8IOokRgqK15-H90");
fetchPromise.then(connection => {
    console.log('Connected');
    console.log(connection);
    const jsonPromise = connection.json();
    show(jsonPromise);
});
function show(jsonPromise) {
    console.log(jsonPromise);
};


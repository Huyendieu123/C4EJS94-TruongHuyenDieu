//Cách đọc API cơ bản nhất
async function load() {
    const conn = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR2eKzX-V1OGTb089mSH5Fsneu8cQRento_R1cyj3paO8IOokRgqK15-H90");
    const data = await conn.json();
    show(data);
console.log(data)
}

load();

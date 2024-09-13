const obtenerValorInput = () => {
    let inputTexto = document.getElementById("input_pokemon")
    let valor = inputTexto.value
    peticionApi(valor)
    console.log(valor)
}

const peticionApi = (valor) => {
    const baseURL = 'https://pokeapi.co/api/v2/'
    const endpoint = `pokemon/${valor}/`
    const url = `${baseURL}${endpoint}`

    axios.get(url)
    .then(response => printData(response.data))
    .catch(error => console.log(error))
}

const printData = (data) => {
    console.log(data)
    let respuesta = document.getElementById('show_information')
    respuesta.innerHTML = `
            <h2><b>Nombre:</b> ${data.name}</h2>
            <p><b>N.Pokedex:</b> ${data.id}</p>
            <p><b>Estatura en dm:</b> ${data.height}</p>
            <p><b>Peso en hectogramos:</b> ${data.weight}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}" style="width: 200px">
    `
}
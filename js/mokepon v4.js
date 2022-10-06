const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
sectionSeleccionarAtaque.style.display = 'none'
const sectionReiniciar = document.getElementById('reiniciar')
sectionReiniciar.style.display = 'none'
const botonMascotaJugador = document.getElementById("boton-mascota")

const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionMensajes = document.getElementById('mensajes')
const result = document.getElementById('resultado')
const registro = document.getElementById('registro-resultado')
const ataqueDelJugador = document.getElementById('ataque-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-enemigo')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const spanAtaqueJugador = document.getElementById('ataque-jugador')
const spanAtaqueEnemigo = document.getElementById('ataque-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let opcionDeMokepones
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let inputHipodoge = document.getElementById('Charizard')
let inputCapipepo = document.getElementById('Blastoise')
let inputRatigueya = document.getElementById('Volvasour')
let mascotaJugador

let mokepones = []

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataque = []
    }
}

let Charizard = new Mokepon('Charizard','./assets/252-2525219_charizard-pokken-png-transparent-png.png',5)
let Blastoise = new Mokepon('Blastoise','./assets/400px-Pokken_Blastoise.png',5)
let Volvasour = new Mokepon('Volvasour','./assets/1200px-Ivysaur_SSBU.png',5)

Charizard.ataque.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'}
)

Blastoise.ataque.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra'}
)

Volvasour.ataque.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'}
)

mokepones.push(Charizard,Blastoise,Volvasour)

function iniciarJuego() {
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
            <p>${mokepon.nombre}</p>
            <img src="${mokepon.foto}" alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Charizard')
        inputCapipepo = document.getElementById('Blastoise')
        inputRatigueya = document.getElementById('Volvasour')
    })

    botonMascotaJugador.addEventListener("click",selecionarMascotaJugador)
    botonReiniciar.addEventListener('click',reiniciarJuego)
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    }
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    }
    else {
        ataqueEnemigo = 'TIERRA'
    }
    crearMensaje()
}

function crearMensaje(){
    nuevoAtaqueJugador = document.createElement('p')
    nuevoResultado = document.createElement('p')
    nuevoAtaqueEnemigo = document.createElement('p')

    combate()
    result.innerHTML = decisionCombate
    nuevoResultado.innerHTML = decisionCombate.split(" ")[0]
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    registro.appendChild(nuevoResultado)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)

    actualizarVidas()
    revisarVidas()
}

function selecionarMascotaJugador(){
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }
    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }
    else {alert('Debes seleccionar una mascota')}

    extraerAtaques(mascotaJugador)

    seleccionarMascotaEnemigo()    
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
}

function extraerAtaques(mascotaJugador) {
    let ataques = []
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataques = mokepones[i].ataque
        }
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque"> ${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')

    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
}

function seleccionarMascotaEnemigo() {
    let inputMascotaEnemigo = aleatorio(0,mokepones.length - 1)
    spanMascotaEnemigo.innerHTML = mokepones[inputMascotaEnemigo].nombre
}

function combate() {
    if (ataqueEnemigo == ataqueJugador) {
        decisionCombate = 'EMPATE 🤜🏼🤛🏼'
    }
    else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') || (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')) {
        decisionCombate = 'GANASTE ✅'
    }
    else {
        decisionCombate = 'PERDISTE ❌'
    }
}

function actualizarVidas() {

    if (decisionCombate == 'GANASTE ✅') {
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (decisionCombate == 'PERDISTE ❌') {
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    else {
    }
}

function revisarVidas() {
    if (vidasEnemigo==0) {
        crearMensajeFinal("WINNER! 🏆")
    }
    else if (vidasJugador == 0) {
        crearMensajeFinal("PERDISTE 😟")
    }
}

function crearMensajeFinal(ultimoMensaje) {
    result.innerHTML = ultimoMensaje
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load',iniciarJuego)
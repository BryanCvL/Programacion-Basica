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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let ataqueJugador = []
let ataqueEnemigo = []
let vidasJugador = 0
let vidasEnemigo = 0
let opcionDeMokepones
let ataquesMokepon
let ataqueMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones
let indexAtaqueJugador = []
let indexAtaqueEnemigo = []
let resultados = []
let inputCharizard = document.getElementById('Charizard')
let inputBlastoise = document.getElementById('Blastoise')
let inputVolvasour = document.getElementById('Volvasour')
let inputLucario = document.getElementById('Lucario')
let inputMewtwo = document.getElementById('Mewtwo')
let mascotaJugador
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
let objetoMascotaJugador
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximodelMapa = 800

if (anchoDelMapa > anchoMaximodelMapa ) {
    anchoDelMapa = anchoMaximodelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

let mokepones = []

class Mokepon {
    constructor(nombre, foto, vida, mapaFoto) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataque = []
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = mapaFoto
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let Charizard = new Mokepon('Charizard','./assets/252-2525219_charizard-pokken-png-transparent-png.png',5,'./assets/images.jpg')
let Blastoise = new Mokepon('Blastoise','./assets/400px-Pokken_Blastoise.png',5,'./assets/Blastoise.png')
let Volvasour = new Mokepon('Volvasour','./assets/1200px-Ivysaur_SSBU.png',5,'./assets/png-transparent-bulbasaur-venusaur-pokemon-smiley-yellow-others.png')
let Lucario = new Mokepon('Lucario','./assets/1200px-Lucario_SSBU.png',5,'./assets/d5t40gf-911b242f-5990-4043-92ea-356a77c7c358.png')
let Mewtwo = new Mokepon('Mewtwo','./assets/250px-Mewtwo_SSBU.png',5,'./assets/87461698-0fcb1d00-c60f-11ea-89a5-592a59fc6e26.png')

let CharizardEnemigo = new Mokepon('Charizard','./assets/252-2525219_charizard-pokken-png-transparent-png.png',5,'./assets/images.jpg')
let BlastoiseEnemigo = new Mokepon('Blastoise','./assets/400px-Pokken_Blastoise.png',5,'./assets/Blastoise.png')
let VolvasourEnemigo = new Mokepon('Volvasour','./assets/1200px-Ivysaur_SSBU.png',5,'./assets/png-transparent-bulbasaur-venusaur-pokemon-smiley-yellow-others.png')
let LucarioEnemigo = new Mokepon('Lucario','./assets/1200px-Lucario_SSBU.png',5,'./assets/d5t40gf-911b242f-5990-4043-92ea-356a77c7c358.png')
let MewtwoEnemigo = new Mokepon('Mewtwo','./assets/250px-Mewtwo_SSBU.png',5,'./assets/87461698-0fcb1d00-c60f-11ea-89a5-592a59fc6e26.png')

Charizard.ataque.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'}
)

CharizardEnemigo.ataque.push(
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

BlastoiseEnemigo.ataque.push(
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

VolvasourEnemigo.ataque.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'}
)

Lucario.ataque.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'}
)

LucarioEnemigo.ataque.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'}
)

Mewtwo.ataque.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'}
)

MewtwoEnemigo.ataque.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'}
)

mokepones.push(Charizard,Blastoise,Volvasour,Lucario,Mewtwo)

function iniciarJuego() {
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
            <p>${mokepon.nombre}</p>
            <img src="${mokepon.foto}" alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputCharizard = document.getElementById('Charizard')
        inputBlastoise = document.getElementById('Blastoise')
        inputVolvasour = document.getElementById('Volvasour')
        inputLucario = document.getElementById('Lucario')
        inputMewtwo = document.getElementById('Mewtwo')
    })

    botonMascotaJugador.addEventListener("click",selecionarMascotaJugador)
    botonReiniciar.addEventListener('click',reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function (res){
            // console.log(res)
            if (res.ok) {
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta)
                    })
            }
        })
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}

function seleccionarMascotaEnemigo(enemigo) {
    // let inputMascotaEnemigo = aleatorio(0,mokepones.length - 1)
    // spanMascotaEnemigo.innerHTML = mokepones[inputMascotaEnemigo].nombre
    // ataqueMokeponEnemigo = mokepones[inputMascotaEnemigo].ataque
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataqueMokeponEnemigo = enemigo.ataque
    sequenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataqueMokeponEnemigo.length - 1)
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    }
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo.push('AGUA')
    }
    else {
        ataqueEnemigo.push('TIERRA')
    }
    // console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5 ) {
        combate()
    }
}

function crearMensaje(resultados){
    nuevoAtaqueJugador = document.createElement('p')
    nuevoResultado = document.createElement('p')
    nuevoAtaqueEnemigo = document.createElement('p')
    
    nuevoResultado.innerHTML = resultados
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    registro.appendChild(nuevoResultado)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)

    revisarVidas()
}

function selecionarMascotaJugador(){
    
    if (inputCharizard.checked) {
        spanMascotaJugador.innerHTML = inputCharizard.id
        mascotaJugador = inputCharizard.id
    }
    else if (inputBlastoise.checked) {
        spanMascotaJugador.innerHTML = inputBlastoise.id
        mascotaJugador = inputBlastoise.id
    }
    else if (inputVolvasour.checked) {
        spanMascotaJugador.innerHTML = inputVolvasour.id
        mascotaJugador = inputVolvasour.id
    }
    else if (inputLucario.checked) {
        spanMascotaJugador.innerHTML = inputLucario.id
        mascotaJugador = inputLucario.id
    }
    else if (inputMewtwo.checked) {
        spanMascotaJugador.innerHTML = inputMewtwo.id
        mascotaJugador = inputMewtwo.id
    }
    else {alert('Debes seleccionar una mascota')}

    extraerAtaques(mascotaJugador)

    sectionSeleccionarMascota.style.display = 'none'
    
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
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
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')

    botones = document.querySelectorAll('.BAtaque')
}

function sequenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click',(e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                boton.style.background = 'white'
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                boton.style.background = 'white'
            } else {
                ataqueJugador.push('TIERRA')
                boton.style.background = 'white'
            }
            boton.disabled = true
            // console.log(ataqueJugador)
            ataqueAleatorioEnemigo()
        })
    })
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let a = 0; a < ataqueJugador.length; a++) {
        if (ataqueJugador[a] == ataqueEnemigo[a]) {
            decisionCombate = 'EMPATE 🤜🏼🤛🏼'
        } else if ((ataqueJugador[a] == 'FUEGO' && ataqueEnemigo[a] == 'TIERRA') || (ataqueJugador[a] == 'AGUA' && ataqueEnemigo[a] == 'FUEGO') || (ataqueJugador[a] == 'TIERRA' && ataqueEnemigo[a] == 'AGUA')) {
            decisionCombate = 'GANASTE ✅'
            vidasJugador++
            spanVidasJugador.innerHTML = vidasJugador
        } else {
            decisionCombate = 'PERDISTE ❌'
            vidasEnemigo++
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }
        indexAmbosOponente(a,a)
        crearMensaje(decisionCombate.split(" ")[0])
    }

}

function revisarVidas() {
    if (vidasEnemigo < vidasJugador) {
        crearMensajeFinal("WINNER! 🏆")
    } else if (vidasJugador == vidasEnemigo) {
        crearMensajeFinal("EMPATE 💪🏼")
    }
    else {
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

function pintarCanvas() {
    objetoMascotaJugador.x = objetoMascotaJugador.x + objetoMascotaJugador.velocidadX
    objetoMascotaJugador.y = objetoMascotaJugador.y + objetoMascotaJugador.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    objetoMascotaJugador.pintarMokepon()
    CharizardEnemigo.pintarMokepon()
    BlastoiseEnemigo.pintarMokepon()
    VolvasourEnemigo.pintarMokepon()
    LucarioEnemigo.pintarMokepon()
    MewtwoEnemigo.pintarMokepon()

    if (objetoMascotaJugador.velocidadX !== 0 || objetoMascotaJugador.velocidadY !== 0 ) {
        revisarColision(VolvasourEnemigo)
        revisarColision(CharizardEnemigo)
        revisarColision(BlastoiseEnemigo)
        revisarColision(LucarioEnemigo)
        revisarColision(MewtwoEnemigo)
    }
}

function detenerMovimiento() {
    objetoMascotaJugador.velocidadX = 0
    objetoMascotaJugador.velocidadY = 0
}

function moverArriba() {
    objetoMascotaJugador.velocidadY = - 5
}

function moverAbajo() {
    objetoMascotaJugador.velocidadY = 5
}

function moverIzquierda() {
    objetoMascotaJugador.velocidadX = - 5
}

function moverDerecha() {
    objetoMascotaJugador.velocidadX = 5
}

function sePresionounaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'ArrowRight':
            moverDerecha()
            break;
        default:
            break;
    }
}

function seSoltounaTecla() {
    detenerMovimiento()
}

function iniciarMapa() {
    // mapa.width = 800
    // mapa.height = 600
    objetoMascotaJugador = obtenerObjetoMascota()
    intervalo = setInterval(pintarCanvas,50)

    window.addEventListener('keydown',sePresionounaTecla)

    window.addEventListener('keyup',seSoltounaTecla)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaMascota = objetoMascotaJugador.y
    const abajoMascota = objetoMascotaJugador.y + objetoMascotaJugador.alto
    const derechaMascota = objetoMascotaJugador.x + objetoMascotaJugador.ancho
    const izquierdaMascota = objetoMascotaJugador.x

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquerdaEnemigo = enemigo.x

    if (abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquerdaEnemigo ||
        izquierdaMascota > derechaEnemigo) {
        return
    }
    clearInterval(intervalo)
    detenerMovimiento()
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load',iniciarJuego)
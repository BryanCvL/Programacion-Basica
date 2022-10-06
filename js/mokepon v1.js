let ataqueJugador
let ataqueEnemigo
let spanAtaqueJugador = document.getElementById('ataque-jugador')
let spanAtaqueEnemigo = document.getElementById('ataque-enemigo')
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",selecionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    // spanAtaqueJugador.innerHTML = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    // spanAtaqueJugador.innerHTML = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    // spanAtaqueJugador.innerHTML = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
        // spanMascotaEnemigo.innerHTML = 'FUEGO'
    }
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
        // spanMascotaEnemigo.innerHTML = 'AGUA'
    }
    else {
        ataqueEnemigo = 'TIERRA'
        // spanMascotaEnemigo.innerHTML = 'TIERRA'
    }
    crearMensaje()
}

function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    combate()
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', las mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + decisionCombate
    sectionMensajes.appendChild(parrafo)
    actualizarVidas()
    revisarVidas()
}

function selecionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipoge').checked
    let inputCapipepo = document.getElementById('Capipepo').checked
    let inputRatigueya = document.getElementById('Ratigueya').checked
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    // alert("Seleccionaste tu mascota")
    if (inputHipodoge) {
        // alert('Seleccionaste a Hipodoge')
        spanMascotaJugador.innerHTML = 'Hipodogue'
    }
    else if (inputCapipepo) {
        // alert('Seleccionaste a Capipepo')
        spanMascotaJugador.innerHTML = 'Capipepo'
    }
    else if (inputRatigueya) {
        // alert('Seleccionaste a Ratigueya')
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }
    else {alert('Debes seleccionar una mascota')}
    seleccionarMascotaEnemigo()

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
}

function seleccionarMascotaEnemigo() {
    let inputMascotaEnemigo = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if (inputMascotaEnemigo == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodogue'
    }
    else if (inputMascotaEnemigo == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }
    else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }

}

function combate() {
    // let decisionCombate
    if (ataqueEnemigo == ataqueJugador) {
        decisionCombate = 'EMPATE'
    }
    else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') || (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')) {
        decisionCombate = 'GANASTE'
    }
    else {
        decisionCombate = 'PERDISTE'
    }
}

function actualizarVidas() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if (decisionCombate == 'GANASTE') {
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (decisionCombate == 'PERDISTE') {
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    else {
    }
}

function revisarVidas() {
    if (vidasEnemigo==0) {
        alert('Ganaste!!')
        crearMensajeFinal()
    }
    else if (vidasJugador == 0) {
        alert('Perdiste')
        crearMensajeFinal()
    }
}

function crearMensajeFinal() {
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)

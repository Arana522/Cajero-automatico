let cuentaAutenticada = null; // variable para almacenar la cuenta autenticada 

const loginForm = document.querySelector('#loginForm')
const inputUser = document.querySelector('#userName')
const inputPass = document.querySelector('#userPass')
const accountCard = document.querySelector('#accountCard')

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    
    for(let i = 0; i < cuentas.length; i++){
        //console.log(cuentas[i])
        if(cuentas[i].nombre === inputUser.value && cuentas[i].pass === parseInt(inputPass.value)){
            // Mostrar la tarjeta de la cuenta del usuario
            //mostrarCuenta(cuentas[i]);
            cuentaAutenticada = cuentas[i]
            mostrarCuenta(cuentaAutenticada);
            return;
        } 
    }
    console.log('no existes'); 

})

function mostrarCuenta(cuenta) {
    const accountNameSpan = document.querySelector('#accountName')
    const accountBalanceSpan = document.querySelector('#accountBalance');
   
    // Mostrar el nombre y saldo del usuario en la tarjeta
    accountNameSpan.textContent = cuenta.nombre;
    accountBalanceSpan.textContent = cuenta.saldo;

    // Mostrar la tarjeta de la cuenta y ocultar el formulario de sesión 
    accountCard.style.display = "block";
    loginForm.style.display = "none";
}

function salir() {
    //Restablecer el formulario de inicio de sesión y ocultar la tarjeta de cuenta
    loginForm.reset ();
    loginForm.style.display = "block";
    accountCard.style.display = "none"; 
}

// function retirar() {
//     const montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
//     if (montoRetiro <= 0 || isNaN(montoRetiro)){
//         alert("por favor, ingrese un monto valido.");
//         return
//     }
//     cuentaUsuario.saldo = montoRetiro; 
//     mostrarInformacionCuenta();
// }

function retirar() {
    if (!cuentaAutenticada) {
        console.log('No hay cuenta autenticada');
        return;
    }

    const montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
    if (montoRetiro <= 0 || isNaN(montoRetiro)){
        alert("Por favor, ingrese un monto válido.");
        return;
    }
    cuentaAutenticada.saldo -= montoRetiro;
    mostrarCuenta(cuentaAutenticada)

    
}

function depositar() {
    if (!cuentaAutenticada) {
        console.log('No hay cuenta autenticada');
        return;
    }

    const montoDeposito = parseFloat(prompt("Ingrese el monto a depositar:"));
    if (montoDeposito <= 0 || isNaN(montoDeposito)){
        alert("Por favor, ingrese un monto válido.");
        return;
        
    }
    cuentaAutenticada.saldo += montoDeposito;
    mostrarCuenta(cuentaAutenticada);
}
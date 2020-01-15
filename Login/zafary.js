const boton = window.document.querySelector('#button');
boton.addEventListener('click', mostrarDatos);

function mostrarDatos() {
    const option = window.document.querySelector('#option');
    const option2 = window.document.querySelector('#secreta');
    const textValue1 = option.value;
    const textValue2 = option2.value;
    console.log(textValue1);
    console.log(textValue2);
    option.value = '';
    option2.value = "";
    option.focus();
    if (textValue1 === 'ejemplo@gmail.com' && textValue2 === '123456') {
        console.log('Permiso concedido para ingresar al sistema');
    } else {

        console.log('Permiso denegado- credenciales incorrectas');
    }
}

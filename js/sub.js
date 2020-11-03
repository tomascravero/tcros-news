/*
VALIDAR CADA CAMPO
Nombre completo: Debe tener más de 6 letras y al menos un espacio entre medio.
Email: debe tener un formato de email válido.
Contraseña: Al menos 8 caracteres, formados por letras y números.
Edad: Número entero mayor o igual a 18.
Teléfono: Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.
Dirección: Al menos 5 caracteres, con letras, números y un espacio en el medio.
Ciudad: Al menos 3 caracteres.
Código Postal: Al menos 3 caracteres.
DNI: Número de 7 u 8 dígitos
*/
/*
window.onload = function (){

// VALIDAR NOMBRE
document.getElementById('name').addEventListener('blur', validaName);

function validaName() {
    var cont = 0;
    var nombre = document.getElementById('name').value;
    var largo = nombre.length;
    if (largo > 6) {
        for (var i = 0; i < largo; i++){
            if (nombre[i] == " "){
                cont++;
                console.log(cont); // funciona
            }
        }
        if (cont >= 1){
                document.getElementById('new-name').innerHTML = 'Valid';
                document.getElementById('new-name').style.color = 'green';
        }else {
            document.getElementById('new-name').innerHTML = "Invalid Name.";
            document.getElementById('new-name').style.color = 'red';
            }
    }else { 
        document.getElementById('new-name').innerHTML = "Invalid Name.";
        document.getElementById('new-name').style.color = 'red';
    }
    // COMPARA SI HAY MAS DE 1 ESPACIO
    cont = 0;
    console.log(nombre); //VERIFICO QUE SE TOME EL VALOR
}

// MIENTRAS ESCRIBE EL NOMBRE SE ESCRIBRE EN HTML

document.getElementById('name').addEventListener('keyup', writeName);

function writeName(){
    var $tag = document.getElementById('name').value;
    document.getElementById('tag').innerHTML = $tag;
    console.log($tag);
}

// VALIDAR EMAIL

document.getElementById('email').addEventListener('blur', validaEmail);

function validaEmail(){
    var $email = document.getElementById('email').value; // guardo el valor
    console.log($email);
    var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if ($email.search(regex) == 0){
        document.getElementById('new-email').innerHTML = 'Valid';
        document.getElementById('new-email').style.color = 'green';
    }else {
        document.getElementById('new-email').innerHTML = 'Invalid Email';
        document.getElementById('new-email').style.color = 'red';
    }
}

// VALIDAR PASSWORD

document.getElementById('pass').addEventListener('blur', validaPass);

function validaPass(){
    var alfan = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    var $pass = document.getElementById('pass').value;
    if ($pass.search(alfan) == 0){
        document.getElementById('new-pass').innerHTML = 'Valid Pass.';
        document.getElementById('new-pass').style.color = 'green';
    }else{
        document.getElementById('new-pass').innerHTML = 'Invalid Pass.';
        document.getElementById('new-pass').style.color = 'red';
    }
}

// VALIDAR EDAD

document.getElementById('age').addEventListener('blur', validaAge);

function validaAge(){
    var $age = document.getElementById('age').value;
    if (isNaN($age)){
        document.getElementById('new-age').style.fontWeight = '600';
        document.getElementById('new-age').innerHTML = 'Invalid age.';
        document.getElementById('new-age').style.color = 'red';
    }else{
        if (($age % 1 == 0) && ($age >= 18)){
            document.getElementById('new-age').innerHTML = 'Valid Age.';
            document.getElementById('new-age').style.color = 'green';
        }else{
            document.getElementById('new-age').innerHTML = 'Invalid age.';
            document.getElementById('new-age').style.color = 'red';
        }
    }
}

// VALIDAR NUMERO

document.getElementById('phone').addEventListener('blur', validaPhone);

function validaPhone(){
    var $phone = document.getElementById('phone').value;
    var $phoneLarge = $phone.length;
    var $noValido = / /;
    if (isNaN($phone)){
        document.getElementById('new-phone').innerHTML = 'NOT A NUMBER.';
        document.getElementById('new-phone').style.color = 'red';
    }else{
        if (($noValido.test($phone)) || $phoneLarge < 7){
            document.getElementById('new-phone').innerHTML = 'Invalid Phone';
            document.getElementById('new-phone').style.color = 'red';
        }else{
            document.getElementById('new-phone').innerHTML = 'Valid Phone';
            document.getElementById('new-phone').style.color = 'green';
        }
    }
}

// VALIDAR CITY
document.getElementById('city').addEventListener('blur', validaCity);

function validaCity() {
    var $city = document.getElementById('city').value;
    var largeCity = $city.length;
    if ( largeCity < 3){
        document.getElementById('new-city').innerHTML = 'Invalid City.';
        document.getElementById('new-city').style.color = 'red';
    }else{
        document.getElementById('new-city').innerHTML = 'Valid City.';
        document.getElementById('new-city').style.color = 'green';
    }
}

// VALIDAR CODIGO POSTAL

document.getElementById('postal').addEventListener('blur', validaPostal);

function validaPostal(){
    var $postal = document.getElementById('postal').value;
    var $postalLarge = $postal.length;
    if ($postalLarge >= 3 ){
        document.getElementById('new-postal').style.color = 'green';
        document.getElementById('new-postal').innerHTML = 'Valid Postal.'
    }else{
        document.getElementById('new-postal').style.color = 'red';
        document.getElementById('new-postal').innerHTML = 'Invalid Postal.'
    }
}

// VALIDAR DNI

document.getElementById('dni').addEventListener('blur', validaDni);

function validaDni(){
    var $dni = document.getElementById('dni').value;
    var $dniLarge = $dni.length;
    if ($dniLarge == 7 || $dniLarge == 8){
        document.getElementById('new-dni').style.color = 'green';
        document.getElementById('new-dni').innerHTML = 'Valid DNI.'
    }else{
        document.getElementById('new-dni').style.color = 'red';
        document.getElementById('new-dni').innerHTML = 'Invalid DNI.'
    }
}

// ENVIAR FORMULARIO

document.getElementById('submit').addEventListener('click', mostrarForm);

function mostrarForm(){
    var nombre = document.getElementById('name').value;
    var $dni = document.getElementById('dni').value;
    var $email = document.getElementById('email').value;
    var $age = document.getElementById('age').value;
    var $phone = document.getElementById('phone').value;
    var $postal = document.getElementById('postal').value;
    alert('Name: ' + nombre + 'Dni: ' + $dni + 'Email: ' + $email +  'Age: ' + $age + 'Phone: ' + $phone + 'Postal: ' + $postal);
}

// CORRECCION


}*/
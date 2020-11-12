
function validateName(event) {
    var name = document.getElementById('name').value;
    let space = /\s\w/;
    if (name.length > 6 && space.test(name)) {
        document.getElementById('error-name').style.visibility = 'hidden';
    }else {
        document.getElementById('error-name').style.visibility = 'visible';
    }
}

function writeName(event) {
    document.getElementById('name').addEventListener('keyup', function() {
        let $tag = document.getElementById('name').value;
        document.getElementById('tag').innerHTML = $tag;
    })
}

function validateEmail(event) {
    var email = document.getElementById('email').value;
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regex.test(email)) {
        document.getElementById('error-email').style.visibility = 'hidden';
    }else {
        document.getElementById('error-email').style.visibility = 'visible';
    }
}

function validatePass(event) {
    var pass = document.getElementById('pass').value;
    let alfan = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    if (alfan.test(pass) && pass.length >= 8) {
        document.getElementById('error-pass').style.visibility = 'hidden';
    }else {
        document.getElementById('error-pass').style.visibility = 'visible';
    }

}

function validateConfirmPass(event) {
    var confirmPass = document.getElementById('confirm-pass').value;
    let pass = document.getElementById('pass');
    if (pass.value == confirmPass) {
        document.getElementById('error-confirm-pass').style.visibility = 'hidden';
    }else {
        document.getElementById('error-confirm-pass').style.visibility = 'visible';
    }
}

function validateAge(event) {
    var age = document.getElementById('age').value;
    if (isNaN(age)){
        document.getElementById('error-age').style.visibility = 'visible';
    }else{
        if ((age % 1 == 0) && (age >= 18)){
            document.getElementById('error-age').style.visibility = 'hidden';
        }else{
            document.getElementById('error-age').style.visibility = 'visible';
        }
    }
}

function validatePhone(event) {
    var phone = document.getElementById('phone').value;
    let space = / /;
    if (isNaN(phone)) {
        document.getElementById('error-phone').style.visibility = 'visible';
    }else {
        if (phone.length < 7 || space.test(phone)) {
            document.getElementById('error-phone').style.visibility = 'visible';
        }else{
            document.getElementById('error-phone').style.visibility = 'hidden';
        }
    }
}

function validateAdress(event) {
    var adress = document.getElementById('adress').value;
    let regex = /\w/g;
    let space = /\s\d/g; 
    if (adress.length >= 5 && regex.test(adress) && space.test(adress)) {
        document.getElementById('error-adress').style.visibility = 'hidden';
    }else {
        document.getElementById('error-adress').style.visibility = 'visible';
    }
}

function validateCity(event) {
    var city = document.getElementById('city').value;
    let regex = /[a-zA-Z]/g;
    if (city.length >= 3 && regex.test(city)){
        document.getElementById('error-city').style.visibility = 'hidden';
    }else {
        document.getElementById('error-city').style.visibility = 'visible';
    }
}

function validatePostal(event) {
    var postal = document.getElementById('postal').value;
    let regex = /\d/g;
    if (postal.length >= 3 && regex.test(postal)){
        document.getElementById('error-postal').style.visibility = 'hidden';
    }else {
        document.getElementById('error-postal').style.visibility = 'visible';
    }
}

function validateDni(event) {
    var dni = document.getElementById('dni').value;
    let regex = /\d/g;
    if (dni.length >= 7 && dni.length <= 8 && regex.test(dni)){
        document.getElementById('error-dni').style.visibility = 'hidden';
    }else {
        document.getElementById('error-dni').style.visibility = 'visible';
    }
}

// INPUTS FOCUS FUNCTIOS


function submitDatos(event) {
    var error = [];
    var sub = [];
    let nameError, emailError, passError, ageError, phoneError, cityError, postalError, dniError;
    let _name = document.getElementById('name').value;
    let _email = document.getElementById('email').value;
    let _pass = document.getElementById('pass').value;
    let _age = document.getElementById('age').value;
    let _phone = document.getElementById('phone').value;
    let _adress = document.getElementById('adress').value;
    let _city = document.getElementById('city').value;
    let _postal = document.getElementById('postal').value;
    let _dni = document.getElementById('dni').value;
    
    // NAME ERROR
    let space = / /;
    if (_name.length > 6 && space.test(_name)) {
        document.getElementById('error-name').style.visibility = 'hidden';
        sub.push('Name: '+ _name +'\n');
    }else {
        document.getElementById('error-name').style.visibility = 'visible';
        error.push('Name: more tha 6 letters, at least 1 space between. \n');
    }

    // EMAIL
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regexEmail.test(_email)) {
        document.getElementById('error-email').style.visibility = 'hidden';
        sub.push('Email: '+ _email +'\n');
    }else {
        document.getElementById('error-email').style.visibility = 'visible';
        error.push('Email: valid email format.\n');
    }

    // PASSWORD
    let alfan = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    if (alfan.test(_pass) && _pass.length >= 8) {
        document.getElementById('error-pass').style.visibility = 'hidden';
        sub.push('Pass: '+ _pass +'\n');
    }else {
        document.getElementById('error-pass').style.visibility = 'visible';
        error.push('Pass: at least 8 characters (numbers and letters).\n');
    }

    // AGE
    if (isNaN(_age)){
        document.getElementById('error-age').style.visibility = 'visible';
        error.push('Age: over 18.\n');
    }else{
        if ((_age % 1 == 0) && (_age >= 18)){
            document.getElementById('error-age').style.visibility = 'hidden';
            sub.push('Age: '+ _age +'\n');
        }else{
            document.getElementById('error-age').style.visibility = 'visible';
            error.push('Age: over 18.\n');
        }
    }

    // PHONE
    if (isNaN(_phone)) {
        document.getElementById('error-phone').style.visibility = 'visible';
        error.push('Phone: at least 7 digits.\n');
    }else {
        if (_phone.length < 7 || space.test(_phone)) {
            document.getElementById('error-phone').style.visibility = 'visible';
            error.push('Phone: at least 7 digits.\n');
        }else{
            document.getElementById('error-phone').style.visibility = 'hidden';
            sub.push('Phone: '+ _phone +'\n');
        }
    }

    // ADRESS
    let regexAdress = /\w/g;
    let spaceAdress = /\s\d/g; 
    if (_adress.length >= 5 && regexAdress.test(_adress) && spaceAdress.test(_adress)) {
        document.getElementById('error-adress').style.visibility = 'hidden';
        sub.push('Adress: '+ _adress +'\n');
    }else {
        document.getElementById('error-adress').style.visibility = 'visible';
        error.push('Adress: at least 5 characters (letters numbers and space between them).\n');
    }

    // CITY
    let regexCity = /[a-zA-Z]/g;
    if (_city.length >= 3 && regexCity.test(_city)){
        document.getElementById('error-city').style.visibility = 'hidden';
        sub.push('City: '+ _city +'\n');
    }else {
        document.getElementById('error-city').style.visibility = 'visible';
        error.push('City: at least 3 characters.\n');
    }

    // POSTAL
    let regexPostal = /\d/g;
    if (_postal.length >= 3 && regexPostal.test(_postal)){
        document.getElementById('error-postal').style.visibility = 'hidden';
        sub.push('Postal: '+ _postal +'\n');
    }else {
        document.getElementById('error-postal').style.visibility = 'visible';
        error.push('Postal: at least 3 characters.\n');
    }

    // DNI
    let regexDni = /\d/g;
    if (_dni.length >= 7 && _dni.length <= 8 && regexDni.test(_dni)){
        document.getElementById('error-dni').style.visibility = 'hidden';
        sub.push('DNI: '+ _dni +'\n');
    }else {
        document.getElementById('error-dni').style.visibility = 'visible';
        error.push('DNI: 7 or 8 digits.\n');
    }
    
    // SHOW ALERT ERRORS
    let errorAlert = error.join('');
    if (errorAlert == '') {
        $alert = sub.join('')
        alert($alert);
    }else{
        alert(errorAlert);
    }
}

window.onload = function() {

    // FULL NAME
    var $fullName = document.getElementById('name');
    $fullName.onblur = validateName;
    $fullName.addEventListener('focus', function() {
        document.getElementById('error-name').style.visibility = 'hidden';
    });

    // WRITING NAME
    $fullName.onfocus = writeName;

    // EMAIL
    var $email = document.getElementById('email');
    $email.onblur = validateEmail;
    $email.addEventListener('focus', function() {
        document.getElementById('error-email').style.visibility = 'hidden';
    });

    // PASSWORD
    var $pass = document.getElementById('pass');
    $pass.onblur = validatePass;
    $pass.addEventListener('focus', function() {
        document.getElementById('error-pass').style.visibility = 'hidden';
    });

    //CONFIRM PASS
    var $passConfirm = document.getElementById('confirm-pass');
    $passConfirm.onblur = validateConfirmPass;
    $passConfirm.addEventListener('focus', function() {
        document.getElementById('error-confirm-pass').style.visibility = 'hidden';
    });

    // AGE
    var $age = document.getElementById('age');
    $age.onblur = validateAge; 
    $age.addEventListener('focus', function() {
        document.getElementById('error-age').style.visibility = 'hidden';
    });

    // PHONE
    var $phone = document.getElementById('phone');
    $phone.onblur = validatePhone;
    $phone.addEventListener('focus', function() {
        document.getElementById('error-phone').style.visibility = 'hidden';
    });

    // ADRESS
    var $adress = document.getElementById('adress');
    $adress.onblur = validateAdress;
    $adress.addEventListener('focus', function() {
        document.getElementById('error-adress').style.visibility = 'hidden';
    });

    // CITY
    var $city = document.getElementById('city');
    $city.onblur = validateCity;
    $city.addEventListener('focus', function() {
        document.getElementById('error-city').style.visibility = 'hidden';
    });

    // POSTAL
    var $postal = document.getElementById('postal');
    $postal.onblur = validatePostal;
    $postal.addEventListener('focus', function() {
        document.getElementById('error-postal').style.visibility = 'hidden';
    });

    // DNI
    var $dni = document.getElementById('dni');
    $dni.onblur = validateDni;
    $dni.addEventListener('focus', function() {
        document.getElementById('error-dni').style.visibility = 'hidden';
    });

    // SUBMIT
    var $submit = document.getElementById('submit');
    $submit.onclick = submitDatos;
}
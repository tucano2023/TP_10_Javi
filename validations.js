var nameInput = document.getElementById("name");
nameInput.addEventListener("blur", validateName);
nameInput.addEventListener("keyup", greeetUser);
nameInput.addEventListener("foc", clearError('name'));
nameInput.addEventListener('focus', function (event) {
    clearError('name');
});

var greetTitle = document.getElementById('greet-title');

var emailInput = document.getElementById("email");
emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener('focus', function (event) {
    clearError('email');
});

var passwordInput = document.getElementById("password");
passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener('focus', function (event) {
    clearError('password');
});

var passwordRepeatInput = document.getElementById("password-repeat");
passwordRepeatInput.addEventListener("blur", validatePasswordRepeat);
passwordRepeatInput.addEventListener('focus', function (event) {
    clearError('passwordRepeat');
});

var ageInput = document.getElementById("age");
ageInput.addEventListener("blur", validateAge);
ageInput.addEventListener('focus', function (event) {
    clearError('age');
});

var phoneInput = document.getElementById("phone");
phoneInput.addEventListener("blur", validatePhone);
phoneInput.addEventListener('focus', function (event) {
    clearError('phone');
});

var addressInput = document.getElementById("address");
addressInput.addEventListener("blur", validateAddress);
addressInput.addEventListener('focus', function (event) {
    clearError('address');
});

var cityInput = document.getElementById("city");
cityInput.addEventListener("blur", validateCity);
cityInput.addEventListener('focus', function (event) {
    clearError('city');
});

var postcodeInput = document.getElementById("postcode");
postcodeInput.addEventListener("blur", validatePostcode);
postcodeInput.addEventListener('focus', function (event) {
    clearError('postcode');
});

var idInput = document.getElementById("id");
idInput.addEventListener("blur", validateID);
idInput.addEventListener('focus', function (event) {
    clearError('id');
});

function validateName() {
    var nameValue = nameInput.value;
    var nameError = document.getElementById("nameError");

    var error = "";
    if (nameValue.length < 6) {
        error = "El nombre debe tener, al menos, 6 caracteres";
    } else if (nameValue.length == nameValue.replace(/\s/g, "").length) {
        error = "El nombre debe tener, al menos, un espacio.";
    }
    nameError.innerText = error;
    return error;
}

function validateEmail() {
    var emailValue = emailInput.value;
    var emailError = document.getElementById("emailError");

    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var error = "";
    if (!regex.test(emailValue)) {
        error = "Formato de email no válido";
    }
    emailError.innerText = error;
    return error;
}

function validatePassword() {
    var passwordValue = passwordInput.value;
    var passwordError = document.getElementById("passwordError");

    var regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var error = "";
    if (!regex.test(passwordValue)) {
        error = "Debe tener al menos 8 caracteres, formados por letras y números.";
    }
    passwordError.innerText = error;
    return error;
}

function validatePasswordRepeat() {
    var passwordValue = passwordInput.value;
    var passwordRepeatValue = passwordRepeatInput.value;
    var passwordRepeatError = document.getElementById("passwordRepeatError");

    var error = "";
    if (passwordValue != passwordRepeatValue) {
        error = "Las contraseñas no coinciden";
    }
    passwordRepeatError.innerText = error;
    return error;
}

function validateAge() {
    var ageValue = Number(ageInput.value);
    var ageError = document.getElementById("ageError");

    var error = "";
    if (!Number.isInteger(ageValue) || ageValue < 18) {
        error = "La edad debe ser mayor a 18";
    }
    ageError.innerText = error;
    return error;
}

function validatePhone() {
    var phoneValue = phoneInput.value;
    var phoneError = document.getElementById("phoneError");
    var regex = /^[0-9]{7,}$/;

    var error = "";
    if (!regex.test(phoneValue)) {
        error = "Debe ser número de al menos 7 dígitos, sin espacios, guiones ni paréntesis.";
    }
    phoneError.innerText = error;
    return error;
}

function validateAddress() {
    var addressValue = addressInput.value;
    var addressError = document.getElementById("addressError");
    var regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d\s]{0,}$/;

    var error = "";
    if (addressValue.length < 5 || addressValue.indexOf(" ") === -1 || !regex.test(addressValue)) {
        error = "Debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.";
    }
    addressError.innerText = error;
    return error;
}

function validateCity() {
    var cityValue = cityInput.value;
    var cityError = document.getElementById("cityError");

    var error = "";
    if (cityValue.length < 3) {
        error = "Debe tener al menos 3 caracteres.";
    }
    cityError.innerText = error;
    return error;
}

function validatePostcode() {
    var postcodeValue = postcodeInput.value;
    var postcodeError = document.getElementById("postcodeError");

    var error = "";
    if (postcodeValue.length < 3) {
        error = "Debe tener al menos 3 caracteres.";
    }
    postcodeError.innerText = error;
    return error;
}

function validateID() {
    var idValue = idInput.value;
    var idError = document.getElementById("idError");

    var error = "";
    if (!Number.isInteger(Number(idValue)) || !(idValue.length == 7 || idValue.length == 8)) {
        error = "Debe ser número y tener 7 u 8 caracteres";
    }
    idError.innerText = error;
    return error;
}

function greeetUser() {
    var nameValue = nameInput.value;
    if (nameValue.length) greetTitle.innerText = 'Hola ' + nameValue + '!';
    else greetTitle.innerText = 'Hola!';
}

function clearError(id) {
    document.getElementById(id + 'Error').innerText = "";
}

function submitForm() {
    const errors = [];
    const success = [];

    var errorName = validateName();
    if (errorName) errors.push('Campo nombre: ' + errorName);
    else success.push('Campo nombre: ' + nameInput.value);

    var errorEmail = validateEmail();
    if (errorEmail) errors.push('Campo email: ' + errorEmail);
    else success.push('Campo email: ' + emailInput.value);

    var errorPass = validatePassword();
    if (errorPass) errors.push('Campo contraseña: ' + errorPass);
    else success.push('Campo contraseña: ' + passwordInput.value);

    var errorPassRepeat = validatePasswordRepeat();
    if (errorPassRepeat) errors.push('Campo repetir contraseña: ' + errorPassRepeat);

    var errorAge = validateAge();
    if (errorAge) errors.push('Campo edad: ' + errorAge);
    else success.push('Campo edad: ' + ageInput.value);

    var errorPhone = validatePhone();
    if (errorPhone) errors.push('Campo teléfono: ' + errorPhone);
    else success.push('Campo teléfono: ' + phoneInput.value);

    var errorAddress = validateAddress();
    if (errorAddress) errors.push('Campo dirección: ' + errorAddress);
    else success.push('Campo dirección: ' + addressInput.value);

    var errorCity = validateCity();
    if (errorCity) errors.push('Campo ciudad: ' + errorCity);
    else success.push('Campo ciudad: ' + cityInput.value);

    var errorCP = validatePostcode();
    if (errorCP) errors.push('Campo CP: ' + errorCP);
    else success.push('Campo CP: ' + postcodeInput.value);

    var errorDNI = validateID();
    if (errorDNI) errors.push('Campo DNI: ' + errorDNI);
    else success.push('Campo DNI: ' + idInput.value);

    if (errors.length) {
        alert('El formulario tiene los siguientes errores:\n\n' + errors.join('\n'));
    } else {
        console.log('Successss');
        //alert(`Se han enviado los siguientes datos:\n\n${success.join('\n')}`);
    }

    var form = document.getElementById('name')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
    })
        var name = document.getElementById('name').value

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify({
                title: name
              
            }),
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        })
        .then(function(response) {
                return response.json()
        })
        .then(function(data) {
            console.log(data)
            var nombre = document.getElementById('name')

            //results.innerHTML = `<p>El registro para ${data.title}</p>`

            alert(`${data.title} Se han enviado los siguientes datos:\n\n${success.join('\n')}`);
        })
}


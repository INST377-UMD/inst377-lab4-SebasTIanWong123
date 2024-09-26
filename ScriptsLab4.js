//The Alert Me Function
function alertTheName() {
    const name = document.getElementById('name').value;
    if (name) {
        alert('Hello ' + name + '!!!');
    } else {
        alert('Please Enter Your Name!!!');
    }
    
}

//Change The Color Function
let isGreen = true;
function changeTheColor() {
    document.body.style.backgroundColor = isGreen ? 'lightyellow' : 'lightgreen';
    isGreen  = !isGreen;
}

//Validate The Text Function
function validateTheText() {
    const text = document.getElementById('text').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validation.test(text)) {
        alert('Special Character Are Not Allowed For This!');
    } else {
        alert('This Text is Valid!');
    }
    
}

// Add The Text Function
function addTheText() {
    const heading = document.getElementById('m-heading');
    heading.innerHTML += ' Add Text';
}
const HOST = 'localhost';
const PORT = '3000';
const URL = `http://${HOST}:${PORT}`

document.getElementById("register-form").addEventListener("submit", function(event){
    
    event.preventDefault()
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('last-name').value;
    const edad = document.getElementById('age').value;
    const correo = document.getElementById('email').value;
    const contrasena = document.getElementById('password').value;

    const usuario = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        correo: correo,
        contrasena: contrasena
    }

    fetch(`${URL}/usuarios`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
    })
    .then((response)=>response.json())
    .then((result)=>{
        if(result.mensaje === 'Usuario registrado exitosamente.'){
            alert('¡Tu cuenta se ha registrado exitosamente!');
            window.location.href = "../../login.html"
        }else{
            document.getElementById('error-cuenta').style.display = 'block';
        }
    })
});

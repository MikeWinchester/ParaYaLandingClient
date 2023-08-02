landingPage();

function login(){
    document.getElementById("link-css").href = "..css/login.css"
    document.getElementById("body").innerHTML=`
            <div id="login">
                <div id="login-form">
                    <h1 id="login-title" style="margin-bottom: 50px; font-weight: bolder">Iniciar Sesión</h1>
                    <label><input type="text" placeholder="Usuario" class="button bt-text"></label><br>
                    <label><input type="password" placeholder="Contraseña" class="button bt-text"></label><br>
                    <label><button class="button bt-1">Iniciar Sesión</button></label><br>
                    <h3 style="font-size: 1rem; display: flex; justify-content: center;">o</h3>
                    <div id="option-session">
                        <a class="cont" href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
                            <img id="google-logo" src="../img/google-logo.png" alt="Logo de Google">
                            <h4 class="font-logo">Google</h4>
                        </a>
                        <a class="cont" href="https://youtu.be/ZyhrYis509A" target="_blank">
                            <img id="facebook-logo" src="../img/facebook-logo.png" alt="Logo de Facebook">
                            <h4 class="font-logo">Facebook</h4>
                        </a>
                    </div>
                    <h4 style="margin: 0; font-size: 1rem; display: flex; justify-content: center; margin-bottom: 5px;">¿No tenés cuenta?</h4>
                    <a id="register" href="https://www.youtube.com/watch?v=c65yR7FWJsM">¡Registrate!</a>
                </div>
            </div>
    `
}
function landingPage(){
    document.getElementById("link-css").href = "../css/landing.css";
    document.getElementById("body").innerHTML=`
    
    `
}
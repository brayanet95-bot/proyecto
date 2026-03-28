const usuarios = {Wilmer: "1234",    // clave: valor
                Nicolas: "0987",
                Camilo: "2468",
                Brayan: "1369"
                }

const formlogin = document.getElementById("formlogin")

if(formlogin){
formlogin.addEventListener("submit", function(e){

    e.preventDefault();

    const usuario = document.getElementById("usuario").value

    const contraseña = document.getElementById("contraseña").value

    if(usuarios[usuario] === contraseña){
        sessionStorage.setItem("usuario", usuario); //para que el usuario permaneza en sesion//
        window.location.href="index.html"
    }   else{
        const mensaje = document.getElementById("mensaje")
        mensaje.textContent = "Usuario o contraseña incorrectos"
    }
});
}

const usuarioActivo = sessionStorage.getItem("usuario");
const textoUsuario = document.getElementById("usuarioActivo");

if(usuarioActivo && textoUsuario){
    textoUsuario.textContent = "Hola, "+ usuarioActivo;
}
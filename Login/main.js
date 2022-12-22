const user= "Valanio";
const pasword= "1234";

function inicio() {
    let usuario=document.getElementById('input').value;
let lacontraseña=document.getElementById('micontraseña').value;
(usuario===user && pasword===lacontraseña) ? (alert("Inicio de sesión exitoso, redirigiendolo a la pagina de inicio"), setTimeout(()=>{
    location.href="../index/index.html"},1000))  : (usuario==="" || pasword==="") ? alert("Debe ingresar todos los campos para poder iniciar sesion") : alert("Error de Usuario o contraseña");

}

let contraseña=document.getElementById('micontraseña').addEventListener("mouseenter",contra=>{contra.target.type="text";
})
contraseña =document.getElementById('micontraseña').addEventListener("mouseout",contra=>{contra.target.type="password";
})
let check=document.getElementById("ok").addEventListener("change", eche=>{
    if(ok.checked){
        alert("Usuario recordado")
    }
})

const pedir=document.getElementById('pedir');
const salir=document.getElementById("salir");
const modal=document.querySelector(".modal");
const modal2=document.querySelector(".modal2");
const lista =document.getElementById("lista");
const cancelar=document.getElementById("cancelar");
const aceptar=document.querySelector(".aceptar");
const volver=document.querySelector(".salir_modal2");
const modalProducto=document.querySelector("#modal_producto");

function Pedirr() {
    pedir.addEventListener("click",()=>{
        if(lista.selectedIndex===0){
            alert("NO HA SELECCIONADO NINGÚN PRODUCTO");
        }else{
            modal.style.display="flex";
            modalProducto.textContent =lista.options[lista.selectedIndex].text;
        }
        
    })
}

cancelar.addEventListener("click",()=>{
    modal.style.display="none"

});


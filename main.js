const contenedor = document.getElementById("contenedor")
const circulo = document.querySelector(".circulo")
const body = document.body

contenedor.addEventListener("click",()=>{
  body.classList.toggle("dark-mode-activo")  
})
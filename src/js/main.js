// Import our custom CSS
import '../scss/style.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const tbody = document.querySelector("#miTabla");

// console.log("uno");
// console.log("dos");

// setTimeout(() => {
//     alert("ejemplo")
// }, 10000)

// console.log("tres");
// console.log("cuatro");

//ponemos la palabra"async" antes de la funcòn y pasa de ser sìncrona a ser asìncrona.
//todas las funciones son sìncronas por defecto
//si la funciòn se demora mas de un segundo pasa a un no ser prioridad y sigue con otro proceso
async function consultarDatosDeAPI() {
    const respuesta = await fetch("https://api.escuelajs.co/api/v1/categories")
    const datos = await respuesta.json() // convertirlo para usarlo con metodos, etc
    index(datos)
}

//el await necesita que la funciòn sea asìncrona. El await quiere decirle al js que la respuesta se demorarà un poco.
consultarDatosDeAPI()

//funciòn para agregar datos a la tabla
function index(datos) {
    console.log(datos);

    //iterar sobre los datos y agregar filas a la tabla
    datos.forEach(dato => {
        tbody.innerHTML += `
            <td>${dato.id}</td>
            <td>${dato.name}</td>   
            <td><img src="${dato.image}" class="w-25" alt=""></td>
            <td>${dato.creationAt}</td>
            <td>${dato.updatedAt}</td> 
            td     
        `
    });
}

const btnNew = document.querySelector("#nueva-categorìa")

btnNew.addEventListener("click", function () {
    create()
})

function create() {

    const newCategory = {
        name: "Categorìa Simòn",
        image: "https://t3.ftcdn.net/jpg/03/55/28/80/360_F_355288042_An4jhyVFELBAY05m97yMQYDTDpNKeeJf.jpg"
    }
    fetch("https://api.escuelajs.co/api/v1/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", //esto es un simple aviso que dirà en que formato vamos a enviar la informaciòn(formato JSON)
        },
        body: JSON.stringify(newCategory) //aqui convertimos nuestro còdigo en formato json
    })
}
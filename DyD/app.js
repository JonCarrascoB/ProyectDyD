//(function init() {
//    let option = document.getElementById("actualizar_btn");
//    if (actualizarBtn !== null) {
//        actualizarBtn.addEventListener("click", obtenerDatosCarta);
//    }

//    let nombreCarta = localStorage.getItem("carta");
//    if (nombreCarta !== null) {

//        //document.getElementById("cartas").innerHTML = nombreCarta;

//    } else {

//        obtenerDatosCarta();

//    }

//}());

let option;
(function ini() {
    option = document.getElementById("first_menu").value;
    if (first_menu !== null) {
        first_menu.addEventListener("change", selectPart);
    }
} ());


function selectPart() {
    let xhr = new XMLHttpRequest();
    let url = "http://dnd5eapi.co/api/" + option;
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let dates = JSON.parse(xhr.response).results;
            console.log(dates.name);
            //showDates(dates);
        }
        else if (xhr.readyState === 4 && xhr.status === 400) {
            console.log("Error en el servidor");
        }
    };
    xhr.send();
}

function showDates() {

}



function mostrarDatos(cartas) {

    let nombreCartas = [];

    for (let i = 0; i < cartas.cards.length; i++) {

        nombreCartas.push(cartas.cards[i].name);

    }

    localStorage.setItem("cartas", JSON.stringify(nombreCartas));

    // se pueden usar removeItem y clearItem para borrar elementos guardados



    //let result = "";

    for (let i = 0; i < nombreCartas.length; i++) {

        let texto = document.createTextNode(nombreCartas[i]);

        let parrafo = document.createElement("li");

        parrafo.setAttribute("class", "carta col-sm-3 list-group-item");

        parrafo.setAttribute("onclick", "alert('" + nombreCartas[i] + "')");

        parrafo.appendChild(texto);

        document.getElementById("fila_cartas").appendChild(parrafo);

        // para eliminar, usar elementoHTML.removeChild(elementoHTML)



        //result += "<p class='carta'>" + nombreCartas[i] + "</p>";

    }

    //document.getElementById("cartas").innerHTML = result;

}


$('.target').change(function () {
    let option = $('.target').val();
    if (option === 'skills') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    let listOfSkill = skillObject.results;
                    let skillUrls = [];

                    listOfSkill.forEach(function (skill) {
                        skillUrls.push(skill);
                    });
                    ShowSkills(skillUrls);
                }
            });
    }

    else if (option === 'classes') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes",
                dataType: "text",
                success: function (result) {
                    console.log(JSON.parse(result));
                }
            });
    }
    else if (option === 'equipment') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/equipment",
                dataType: "text",
                success: function (result) {
                    let equipmentObject = JSON.parse(result);
                    let listOfEquipment = equipmentObject.results;
                    let equipmentUrls = [];
                    
                    listOfEquipment.forEach(function (equipment) {
                        equipmentUrls.push(equipment);
                    });
                    ShowItemOfEquipment(equipmentUrls);
                }
            });
    }
    else if (option === 'races') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races",
                dataType: "text",
                success: function (result) {
                    console.log(JSON.parse(result));
                }
            });
    }
    else if (option === 'monsters') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/monsters",
                dataType: "text",
                success: function (result) {
                    console.log(JSON.parse(result));
                }
            });
    }
});

function ShowSkills(skillUrls) {
    for (let j = 0; j < skillUrls.length; j++) {
        $('#answer1').append($("<option</option>")
            .val(skillUrls[j].name)
            .html(skillUrls[j].name)
        );
    }
}
function ShowItemOfEquipment(equipmentUrls) {
    for (let i = 0; i < equipmentUrls.length; i++) {
        $('#answer1').append("<p>" +equipmentUrls[i].name+ "</p>");
    }
}   
    
    
    
//function selectPart() {
//    let xhr = new XMLHttpRequest();
//    let url = "http://dnd5eapi.co/api/" + option;
//    xhr.open("GET", url);
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState === 4 && xhr.status === 200) {
//            let dates = JSON.parse(xhr.response).results;
//            console.log(dates.name);
//            //showDates(dates);
//        }
//        else if (xhr.readyState === 4 && xhr.status === 400) {
//            console.log("Error en el servidor");
//        }
//    };
//    xhr.send();
//}

//function showDates() {

//}



//function mostrarDatos(cartas) {

//    let nombreCartas = [];

//    for (let i = 0; i < cartas.cards.length; i++) {

//        nombreCartas.push(cartas.cards[i].name);

//    }

//    localStorage.setItem("cartas", JSON.stringify(nombreCartas));

//    // se pueden usar removeItem y clearItem para borrar elementos guardados



//    //let result = "";

//    for (let i = 0; i < nombreCartas.length; i++) {

//        let texto = document.createTextNode(nombreCartas[i]);

//        let parrafo = document.createElement("li");

//        parrafo.setAttribute("class", "carta col-sm-3 list-group-item");

//        parrafo.setAttribute("onclick", "alert('" + nombreCartas[i] + "')");

//        parrafo.appendChild(texto);

//        document.getElementById("fila_cartas").appendChild(parrafo);

//        // para eliminar, usar elementoHTML.removeChild(elementoHTML)



//        //result += "<p class='carta'>" + nombreCartas[i] + "</p>";

//    }

//    //document.getElementById("cartas").innerHTML = result;

//}
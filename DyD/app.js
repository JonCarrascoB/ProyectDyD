

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

                    $('.targetSkill').change(function () {
                        let option2 = $('.targetSkill').index();
                        $.get(
                            {
                                url: "http://www.dnd5eapi.co/api/skills/" + option2,
                                dataType: "text",
                                succes: function (secondResult) {
                                    let skillObject2 = JSON.parse(secondResult);
                                    let listOfSkill2 = skillObject2.index;
                                    let skillUrls2 = [];
                                    listOfSkill2.forEach(function (skill2) {
                                        skillUrls2.push(skill2);
                                    });
                                    showSkillDates();
                                }
                            });
                    });
                }
            });
    }

    else if (option === 'classes') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes",
                dataType: "text",
                success: function (result) {
                    let classesObject = JSON.parse(result);
                    let listOfClasses = classesObject.results;
                    let classesUrls = [];

                    listOfClasses.forEach(function (char) {
                        classesUrls.push(char);
                    });
        ShowClasses(classesUrls);
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
                let raceObject = JSON.parse(result);
                let listOfRaces = raceObject.results;
                let racesUrls = [];

                listOfRaces.forEach(function (race) {
                    racesUrls.push(race);
                });
                ShowRaces(racesUrls);
            }
        });
}
else if (option === 'monsters') {
    $.get(
        {
            url: "http://www.dnd5eapi.co/api/monsters",
            dataType: "text",
            success: function (result) {
                let monstersObject = JSON.parse(result);
                let listOfMonsters = monstersObject.results;
                let monstersUrls = [];

                listOfMonsters.forEach(function (monster) {
                    monstersUrls.push(monster);
                });
                ShowMonsters(monstersUrls);
            }
        });
}
});

function ShowSkills(skillUrls) {
    for (let j = 0; j < skillUrls.length; j++) {
        $('#answerSkills1').show("slow");
        $('#answerSkills1').append($("<option></option>")
            .val(skillUrls[j].name)
            .html(skillUrls[j].name)
        );
    }
}
function ShowSkillDates(skillUrls2) {
    for (let k = 0; k < skillUrls2.length; k++) {
        $('#answerSkills2').append($("<h2></h2>")
            .html(skillUrls2[k].name)
        );
        $('answerSkill2').append($("<p></p>")
            .html(skillUrls2[k].desc)
        );
    }
}

function ShowRaces(racesUrls) {
    for (let j = 0; j < racesUrls.length; j++) {
        $('#answerRaces1').show("slow");
        $('#answerRaces1').append($("<option></option>")
            .val(racesUrls[j].name)
            .html(racesUrls[j].name)
        );
    }
}

function ShowClasses(classesUrls) {
    for (let j = 0; j < classesUrls.length; j++) {
        $('#answerClasses1').show("slow");
        $('#answerClasses1').append($("<option></option>")
            .val(classesUrls[j].name)
            .html(classesUrls[j].name)
        );
    }
}

function ShowItemOfEquipment(equipmentUrls) {
    for (let i = 0; i < equipmentUrls.length; i++) {
        $('#answerEquipment').append("<li class='col-md-04 col-sm-01'>" + equipmentUrls[i].name + "</li>");
    }
}

function ShowMonsters(monstersUrls) {
    for (let i = 0; i < monstersUrls.length; i++) {
        $('#answerMonster').append("<li>" + monstersUrls[i].name + "</li>");
    }
}


//let answer = "";
//answer += <select>;
//        answer += <option value="skillUrls[j].name"> +skillUrls[j].name+</option>;
//        answer += </select>;
//    }
//document.getElementById("answer")


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
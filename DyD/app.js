//Aqui creamos la primera busqueda, que para equipament y monster sera la unica, ya que entregaran los datos
// directamente, pero para classes, races y skills llevara a un segundo dropdown.

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
                    localStorage.setItem("skill", JSON.stringify(skillUrls));
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
                    let classesObject = JSON.parse(result);
                    let listOfClasses = classesObject.results;
                    let classesUrls = [];

                    listOfClasses.forEach(function (char) {
                        classesUrls.push(char);
                    });
                    localStorage.setItem("char", JSON.stringify(classesUrls));
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
                    localStorage.setItem("equipment", JSON.stringify(equipmentUrls));
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
                    localStorage.setItem("race", JSON.stringify(racesUrls));
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
                    localStorage.setItem("monster", JSON.stringify(monstersUrls));
                    ShowMonsters(monstersUrls);
                }
            });
    }
});

//A partir de quí se generan las llamadas para los segundos dropdown de busqueda:
// SKILLS:
$('.targetSkills').change(function () {
    let optionSkills = $('.targetSkills').val();
    if (optionSkills === 'Acrobatics') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/1",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill1", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }

            });
    }
    else if (optionSkills === 'Animal Handling') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/2",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill2", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Arcana') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/3",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill3", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Athletics') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/4",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill4", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Deception') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/5",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill5", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'History') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/6",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill6", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Insight') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/7",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill7", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Intimidation') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/8",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill8", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Investigation') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/9",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill9", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Medicine') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/10",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill10", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Nature') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/11",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill11", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Perception') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/12",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill12", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Performance') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/13",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill13", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Persuasion') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/14",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill14", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Religion') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/15",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill15", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Sleight of Hand') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/16",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill16", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Stealth') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/17",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill17", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
    else if (optionSkills === 'Survival') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/18",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
                    localStorage.setItem("skill18", JSON.stringify(skillObject));
                    ShowEachSkill(skillObject);
                }
            });
    }
});

// CLASSES:
$('.targetClasses').change(function () {
    let optionClasses = $('.targetClasses').val();
    if (optionClasses === 'Barbarian') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/1",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class1", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Bard') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/2",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class2", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Cleric') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/3",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class3", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Druid') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/4",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class4", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Fighter') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/5",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class5", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Monk') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/6",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class6", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Paladin') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/7",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class7", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Ranger') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/8",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class8", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Rogue') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/9",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class9", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Sorcerer') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/10",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class10", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Warlock') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/11",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class11", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }
    else if (optionClasses === 'Wizard') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/12",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
                    localStorage.setItem("class12", JSON.stringify(classObject));
                    ShowEachClass(classObject);
                }
            });
    }

});

// RACES:
$('.targetRaces').change(function () {
    let optionRaces = $('.targetRaces').val();
    if (optionRaces === 'Dwarf') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/1",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
                    localStorage.setItem("race1", JSON.stringify(raceObject));
                    ShowEachRace(raceObject);
                }
            });
    }
    else if (optionRaces === 'Elf') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/2",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
                    localStorage.setItem("race2", JSON.stringify(raceObject));
                    ShowEachRace(raceObject);
                }
            });
    }
    else if (optionRaces === 'Halfling') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/3",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
                    localStorage.setItem("race3", JSON.stringify(raceObject));
                    ShowEachRace(raceObject);
                }
            });
    }
    else if (optionRaces === 'Human') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/4",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
                    localStorage.setItem("race4", JSON.stringify(raceObject));
                    ShowEachRace(raceObject);
                }
            });
    }
    else if (optionRaces === 'Dragonborn') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/5",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
                    localStorage.setItem("race5", JSON.stringify(raceObject));
                    ShowEachRace(raceObject);
                }
            });
    }
    else if (optionRaces === 'Gnome') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/6",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
                    localStorage.setItem("race6", JSON.stringify(raceObject));
                    ShowEachRace(raceObject);
                }
            });
    }
    else if (optionRaces === 'Half-Elf') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/7",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
                    localStorage.setItem("race7", JSON.stringify(raceObject));
                    ShowEachRace(raceObject);
                }
            });
    }
    else if (optionRaces === 'Half-orc') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/8",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
                    localStorage.setItem("race8", JSON.stringify(raceObject));
                    ShowEachRace(raceObject);
                }
            });
    }
    else if (optionRaces === 'Tiefling') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/9",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
                    localStorage.setItem("race9", JSON.stringify(raceObject));
                    ShowEachRace(raceObject);
                }
            });
    }
});


// Para Mostrar las elecciones del primer dropdown:

function ShowSkills(skillUrls) {
    for (let i = 0; i < skillUrls.length; i++) {
        $('#answerSkills1').show("slow");
        $('#answerSkills1').append($("<option></option>")
            .val(skillUrls[i].name)
            .html(skillUrls[i].name)
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
    for (let k = 0; k < classesUrls.length; k++) {
        $('#answerClasses1').show("slow");
        $('#answerClasses1').append($("<option></option>")
            .val(classesUrls[k].name)
            .html(classesUrls[k].name)
        );
    }
}

function ShowItemOfEquipment(equipmentUrls) {
    for (let i = 0; i < equipmentUrls.length; i++) {
        $('#answerEquipment').append("<li class='col-md-3 col-sm-2'>" + equipmentUrls[i].name + "</li>");
    }
}

function ShowMonsters(monstersUrls) {
    for (let i = 0; i < monstersUrls.length; i++) {
        $('#answerMonster').append("<li class='col-md-3 col-sm-2'>" + monstersUrls[i].name + "</li>");
    }
}

// Las funciones para monstrar lo que se devuelve de la elección del segundo dropdown
function ShowEachSkill(skillObject) {
    let result = "";
    result += "<h2>" + skillObject.name + "</h2>";
    result += "<p>" + "Description: " + skillObject.desc + "</p>";
    document.getElementById("answerSkills2").innerHTML = result;
}

function ShowEachClass(classObject) {
    let result = "";
    result += "<h2>" + classObject.name + "</h2>";
    result += "<p>" + "Hit point: " + classObject.hit_die + "</p>";
    document.getElementById("answerClasses2").innerHTML = result;
}

function ShowEachRace(raceObject) {
    let result = "";
    result += "<h2>" + raceObject.name + "</h2>";
    result += "<p>" + "Speed: " + raceObject.speed + "</p>";
    result += "<p>" + "Alignment: " + raceObject.alignment + "</p>";
    result += "<p>" + "Age: " + raceObject.age + "</p>";
    result += "<p>" + "Size: " + raceObject.size_description + "</p>";
    result += "<p>" + "Languages: " + raceObject.language_desc + "</p>";
    document.getElementById("answerRaces2").innerHTML = result;
}




//Las bases de Datos en el navegador:
//window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//if (!window.indexedDB) {
//    alert();
//}

//let request = window.indexedDB.open("DyDDatabase", 1),
//    db,
//    tx,
//    store,
//    index;

//request.onupgradeneeded = function (e) {
//    console.log("upgrading");
//    let db = request.result,
//        store = db.createObjectStore("QuestionsStore", {
//            keyPath: "qID"
//        }),
//        index = store.createIndex("questionText", "questionText", { unique: false }); // primero es indice que queremos usar, segundo es clave del elemento anadido, tercero es si es unico o no
//};

//request.onerror = function (e) {
//    console.log("There was an error: " + e.target.errorCode);
//};

//request.onsuccess = function (e) {
//    db = request.result;
//    tx = db.transaction("QuestionsStore", "readwrite");
//    store = tx.objectStore("QuestionsStore");
//    index = store.index("questionText");
//    db.onerror = function (e) {
//        console.log("ERROR" + e.target.errorCode);
//    };
//};

//    //para meter valores a la BD
//    store.put({
//        qID: 1, questionText: "The sky is blue.",
//        correctAnswer: true, studentAnswer: true, result: true
//    });



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

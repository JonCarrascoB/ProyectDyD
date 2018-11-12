// Aqui se va a crear una entrada de usuario y password, que se guardara en local storage y que la pagina
// no se abrira si no se acepta.
(function () {
    let name = localStorage.getItem("nombre");
    if (name !== null) {
        logIn(name);
    }
}());

function logIn(name) {
    let answerOkLogin = document.getElementById("answerOkLogin");
    if (answerOkLogin !== null) {
        $('#answerLogin').show("slow");
        answerOkLogin.innerHTML = "Bienvenido a su D&D page, señor: " + name;
    }
}

$('#clickLogin').click(function () {
    let name = $('#usser').val();
    let pass = $('#password').val();
    if (name !== null && pass !== null) {
        if (pass.length >= 8) {
            if (pass.match(/[A-Z]/)) {
                localStorage.setItem("nombre", name);
                logIn(name);
            }
            else {
                document.getElementById("answerWrongLogin").innerHTML = "La contraseña no tiene ningun caracter";
            }
        }
        else {
            document.getElementById("answerWrongLogin").innerHTML = "La contraseña tiene menos de ocho caracteres";
        }
    }
    else {
        document.getElementById("answerWrongLogin").innerHTML = "No has insertado una contraseña correcta";
    }

});

$('#usser_btn').click(function () {
    let newName = localStorage.getItem("nombre", name);
    document.getElementById("getOkLogin").innerHTML = "Bienvenido a su D&D page, señor: " + newName;
});


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

//A partir de quí se generan las llamadas para los segundos dropdown de busqueda:
// SKILLS:

$('.target2').change(function () {
    let optionSkills = $('.target2').val();
    if (optionSkills === 'Acrobatics') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/skills/1",
                dataType: "text",
                success: function (result) {
                    let skillObject = JSON.parse(result);
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
                    ShowEachSkill(skillObject);
                }
            });
    }
});

// CLASSES:
$('.target2').change(function () {
    let optionClasses = $('.target2').val();
    if (optionClasses === 'Barbarian') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/classes/1",
                dataType: "text",
                success: function (result) {
                    let classObject = JSON.parse(result);
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
                    ShowEachClass(classObject);
                }
            });
    }

});

// RACES:
$('.target2').change(function () {
    let optionRaces = $('.target2').val();
    if (optionRaces === 'Dwarf') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/1",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
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
                    ShowEachRace(raceObject);
                }
            });
    }
    else if (optionRaces === 'Half-Orc') {
        $.get(
            {
                url: "http://www.dnd5eapi.co/api/races/8",
                dataType: "text",
                success: function (result) {
                    let raceObject = JSON.parse(result);
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
                    ShowEachRace(raceObject);
                    Salve();
                }
            });
    }
});


// Para Mostrar las elecciones del primer dropdown:

function ShowSkills(skillUrls) {
    $('#answer1').empty();
    for (let i = 0; i < skillUrls.length; i++) {
        $('#answer1').show("slow");
        $('#answer1').append($("<option></option>")
            .val(skillUrls[i].name)
            .html(skillUrls[i].name)
        );
    }
}

function ShowRaces(racesUrls) {
    $('#answer1').empty();
    for (let j = 0; j < racesUrls.length; j++) {
        $('#answer1').show("slow");
        $('#answer1').append($("<option></option>")
            .val(racesUrls[j].name)
            .html(racesUrls[j].name)
        );
    }
}

function ShowClasses(classesUrls) {
    $('#answer1').empty();
    for (let k = 0; k < classesUrls.length; k++) {
        $('#answer1').show("slow");
        $('#answer1').append($("<option></option>")
            .val(classesUrls[k].name)
            .html(classesUrls[k].name)
        );
    }
}

function ShowItemOfEquipment(equipmentUrls) {
    $('#answer1').hide("slow");
    $('#answer2').empty();
    for (let i = 0; i < equipmentUrls.length; i++) {
        $('#answer2').append("<li class='col-md-3 col-sm-2'>" + equipmentUrls[i].name + "</li>");
    }
}

function ShowMonsters(monstersUrls) {
    $('#answer1').hide("slow");
    $('#answer2').empty();
    for (let i = 0; i < monstersUrls.length; i++) {
        $('#answer2').append("<li class='col-md-3 col-sm-2'>" + monstersUrls[i].name + "</li>");
    }
}

// Las funciones para monstrar lo que se devuelve de la elección del segundo dropdown
function ShowEachSkill(skillObject) {
    let result = "";
    result += "<h2>" + skillObject.name + "</h2>";
    result += "<p>" + "Description: " + skillObject.desc + "</p>";
    document.getElementById("answer2").innerHTML = result;
}

function ShowEachClass(classObject) {
    let result = "";
    result += "<h2>" + classObject.name + "</h2>";
    result += "<p>" + "Hit point: " + classObject.hit_die + "</p>";
    document.getElementById("answer2").innerHTML = result;
}

function ShowEachRace(raceObject) {
    let result = "";
    result += "<h2>" + raceObject.name + "</h2>";
    result += "<p>" + "Speed: " + raceObject.speed + "</p>";
    result += "<p>" + "Alignment: " + raceObject.alignment + "</p>";
    result += "<p>" + "Age: " + raceObject.age + "</p>";
    result += "<p>" + "Size: " + raceObject.size_description + "</p>";
    result += "<p>" + "Languages: " + raceObject.language_desc + "</p>";
    document.getElementById("answer2").innerHTML = result;
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


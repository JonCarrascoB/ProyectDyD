function arranca(data) {

    let xhr = new XMLHttpRequest();
    let url = "https://api.nasa.gov/planetary/apod?api_key=2uaBh52XsqEIyC5HRTv9BWTyV3TYqH8vTQvYPgvV&date=" + data;
    xhr.open("GET", url);
    //xhr.onreadystatechange = function () {
    //    if (xhr.readyState === 4 && xhr.status === 200) {
    //        let responseObject = JSON.parse(xhr.response);
    //        showDate(responseObject.date, responseObject.explanation, responseObject.title, responseObject.url);
    //    }
    //    else if (xhr.readyState === 4 && xhr.status === 400) {
    //        document.getElementById("info").innerHTML = "fecha incorrecta";
    //    }
    //};

    xhr.addEventListener("load", function () {
        let responseObject = JSON.parse(xhr.response);
        showDate(responseObject.date, responseObject.explanation, responseObject.title, responseObject.url);
    });
    xhr.addEventListener("error", function () {
        console.log("error");
    });

    xhr.send();

}

function showDate(date, explanation, title, image_url) {
    let result = "<p>" + date + "</p>";
    result += "<p>" + explanation + "</p>";
    result += "<p>" + title + "</p>";
    result += "<img src='" + image_url + "'/>";
    document.getElementById("info").innerHTML = result;
}

function crearF() {
    //let year = document.getElementById("year").value;
    //let month = document.getElementById("month").value;
    //let day = document.getElementById("day").value;
    let data;
    data = document.getElementById("fecha").value;
    //document.getElementById("date").innerHTML = data;
    arranca(data);
}
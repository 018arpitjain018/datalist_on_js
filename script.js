
var dogs = ["бульдог", "доберман","ротвейлер","чихуа-хуа", "лабрадор", "дог", "dog" ];

var datalist = document.getElementById("datalist");
var autofillResults = document.getElementById("autofill-results");

//elements needed
datalist.addEventListener("input", autofill);
datalist.addEventListener("click", autofill);
document.addEventListener("click", hideResults);

function autofill(){
    var str = datalist.value.toLowerCase();
    var temp = []; //array with dogs match the input

    for (var i = 0, len = dogs.length; i < len; i++){
        if (dogs[i].indexOf(str) == 0){
            temp.push(dogs[i]);
        }
    }

    //string to insert
    var results = "";
    for (var j = 0, length = temp.length; j < length; j++ ){
        results += "<li>" + temp[j] + "</li>";
    }

    if (results.length != 0){
        autofillResults.style.display = "block";
        autofillResults.innerHTML = results;
    } else if (results.length == 0){
        autofillResults.style.display = "none";
    }


}

function hideResults(event) {
    var target = event.target;
    if (target.tagName != "INPUT") {
        if (target.tagName != "LI") {
            autofillResults.style.display = "none";
        }
        else {
            datalist.value = target.innerHTML;
            autofillResults.style.display = "none";
        }
    }
}





let originalStatement = "I love my country Pakistan. <br>i like my city faisalabad.<br>i love my homeland.";
let cities = ["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Sheikhupura","Kashmir"];

// clear input
function clearInput(){
    document.getElementById("input").value = "";
}
// clear output
function clearOutput(){
    document.getElementById("outPut").innerHTML = "";
}

// simple alert
function simpleAlert(){
    alert("This is simple Alert");
}
function printName(){
    let name = document.getElementById("input").value;
    if(!name){
       alert("Enter the name: ");
       return;
    }
    document.getElementById("outPut").innerHTML = "This is entered named: " +name;
    //   document.getElementById("clearOutput").innerHTML = "";
}

//iall cities
function printCities(){
    document.getElementById("outPut").innerHTML ="";
    
    for(i = 0; i<cities.length; i++){
        let num = i + 1;
        document.getElementById("outPut").innerHTML += num + ")" + cities[i] + "<br>";
    }
}

// // add cities
// function addCity(){
//     if(!cities.includes("input")){
//         cities.push("jaranwala");
//     }
//        document.getElementById("outPut").innerHTML ="";
    
//     for(i = 0; i<cities.length; i++){
//         let num = i + 1;
//         document.getElementById("outPut").innerHTML += num + ")" + cities[i] + "<br>";
//     }
// }

// lowercase
function lowerCase(){
    let lowerCaseText = originalStatement.toLowerCase();
    document.getElementById("outPut").innerHTML = lowerCaseText;
}
// Uppercase
function upperCase(){
    let upperCaseText = originalStatement.toUpperCase();
    document.getElementById("outPut").innerHTML = upperCaseText;
}
// captilize
function capiTalize(){
    document.getElementById("outPut").style.textTransform = "capitalize";
    document.getElementById("outPut").innerHTML = originalStatement;
}
// betterformating
function betterFormatting(){
    let inputText = document.getElementById("input").value;
    if(inputText.length < 3){
        alert("Input text first or convert to name!");
    }
    let inputLowerCaseText = inputText.toLowerCase();
    document.getElementById("outPut").style.textTransform = "capitalize";
    document.getElementById("outPut").innerHTML = inputLowerCaseText;
}
// generate table
function generateTable(){
    let num1 = prompt("Enter the table");
    document.getElementById("outPut").innerHTML = "";

    for(i = 1; i <= 10; i++){
        document.getElementById("outPut").innerHTML += + num1 + "*" + i + " = " + (num1 * i) + "<br>"; 
    }
}
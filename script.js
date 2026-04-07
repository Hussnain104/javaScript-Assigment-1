let originalStatement = "I love my country Pakistan. <br>i like my city faisalabad.<br>i love my homeland.";
let cities = ["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Sheikhupura","Kashmir"];


// clearinput
function clearInput(){
    document.getElementById("input").value = "";
}
// clear output
function clearOutput(){
    document.getElementById("outPut").innerHTML = "";
}
// simple alert message
function simpleAlert(){
    alert("This is simple alert messsage");
}
// print name
function printName(){
    let name = document.getElementById("input").value;
    if(!name){
        alert("Enter the Name : ");
        return;
    }
    document.getElementById("outPut").style.textTransform = "capitalize";
    document.getElementById("outPut").innerHTML = name;
}
// print all cities
function printCities(){
    document.getElementById("outPut").innerHTML = "";
    for(i = 0; i<cities.length; i++){
      let num = i + 1;
      document.getElementById("outPut").innerHTML += num + ")" + cities[i] + "<br>";
    }

}
// add to city
function addCity(){
    let city = document.getElementById("input").value;
    if(city.length<3){
        alert("Enter the place or Correct the words?");
        return;
    }
    let startLetter = city.charAt(0).toUpperCase();
    let allLetter = city.slice(1).toLowerCase();
    let fullWords = startLetter + allLetter;

    let foundCity = false;
    for(i = 0; i<cities.length; i++){
        if(cities[0]===fullWords){
            foundCity = true;
            let html = "This city is already availible in your list : " + fullWords;
            document.getElementById("outPut").innerHTML = html;
            return;
        }
        if(!foundCity){
            cities.push(fullWords);
            let html = "This city is add in your list : " + fullWords;
            document.getElementById("outPut").innerHTML = html;
            return;
        }
    }
}
// Generate table
function generateTable(){
    let num1 = prompt("Enter the table : ");
    document.getElementById("outPut").innerHTML = "";
    for(i = 1; i <= 10; i++){
        // num1 = i + 1;
        document.getElementById("outPut").innerHTML += +num1 + "*" + i + "=" + (num1 * i) + "<br>";
    }
}
// convert to lowercase
function lowerCase(){
    let lowerCaseText = originalStatement.toLowerCase();
    document.getElementById("outPut").innerHTML = lowerCaseText;
}
// convert to upper case
function upperCase(){
    let upperCaseText = originalStatement.toUpperCase();
    document.getElementById("outPut").innerHTML = upperCaseText;
}
// convert to capiTazile
function capiTalize(){
     document.getElementById("outPut").style.textTransform = "capitalize";
    document.getElementById("outPut").innerHTML = originalStatement;
}
// better formmating
function betterFormatting(){
    let inputText = document.getElementById("input").value;
    if(inputText.length < 3){
        alert("Enter the Text : ");
        return;
    }
    let inputLowerCaseText = inputText.toLowerCase();
    document.getElementById("outPut").style.textTransform = "capitalize";
    document.getElementById("outPut").innerHTML = inputLowerCaseText;
}
// check to add list 
function checkCity(){
    let city = document.getElementById("input").value;
    if(city.length<3){
        alert("Enter the place or Correct the words?");
        return;
    }
    let startLetter = city.charAt(0).toUpperCase();
    let allLetter = city.slice(1).toLowerCase();
    let fullWords = startLetter + allLetter;

    let foundCity = false;
    for(i = 0; i<cities.length; i++){
        if(cities[0]===fullWords){
            foundCity = true;
            let html = "This city is already availible in your list : " + fullWords;
            document.getElementById("outPut").innerHTML = html;
            return;
        }
        if(!foundCity){
            // cities.push(fullWords);
            let html = "This city is add in your list : " + fullWords;
            document.getElementById("outPut").innerHTML = html;
            return;
        }
    }
}
// find words
function findWords(){
    let newStatement = originalStatement.toLowerCase();
    let words = document.getElementById("input").value;
    if(!words){
        alert("Enter the words : ");
        return;
    }
    words = words.toLowerCase();
    let findWords = newStatement.indexOf(words);
    if(findWords!==-1){
        let html = `your Word " ` + words + ` "is present to index " ` + findWords;
        document.getElementById("outPut").innerHTML = html;
    }
    else{
        let html = `your Word " "` + words + ` "is not present to index "  ` + findWords;
        document.getElementById("outPut").innerHTML = html;
    }
}
// replace words
function replaceWords(){
    let newStatement = originalStatement.toLocaleLowerCase();
    let wordsToReplace = document.getElementById("input").value;
    if(!wordsToReplace){
        alert("Enter the replace words");
        return;
    }

    let wordsReplaceWith = prompt("Enter the words to replce with : ");
    if(!wordsReplaceWith){
        alert("please enter the words to replace with : ");
        return;
    }
    
    wordsToReplace = wordsToReplace.toLowerCase();
    wordsToReplace = new RegExp(wordsToReplace , "g");
    wordsReplaceWith = wordsReplaceWith.toLocaleLowerCase();
    let replaceWords = newStatement.replace(wordsToReplace,wordsReplaceWith);
    document.getElementById("outPut").innerHTML = replaceWords;
}
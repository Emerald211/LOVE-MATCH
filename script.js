function loveMatch() {
    var firstName = document.getElementById("firstname").value;
    var secondName = document.getElementById("secondname").value;
    var box = document.getElementById("box");
    console.log(firstname);
    console.log (secondName);

    if(firstName === ""){
        alert ("fill in match name")
    } else if(secondName ==="") {
        alert("fill in second match name")
    }
     else {
        var number = Math.random();
    number = number * 100
    number = Math.floor(number);
    console.log(number)


    var progress = document.getElementById("progress-bar");
    progress.innerHTML = number + "%";
    progress.style.width = number + "%"

    console.log(progress)

    var result = document.createElement('h5');
   result.style.marginLeft = "0%";
   result.style.fontSize = "1rem"
   result.style.color = "white";
   result.style.textAlign = "center";

   if (number > 0 & number < 30) {
    result.innerHTML = firstName + " and " + secondName + " are not compatible .......Refresh the page";
    result.style.color = "red"

   } else if(number >= 30 & number < 50) {
       result.innerHTML = firstName + " and " + secondName + " is fairly compatible......refresh the page"
       result.style.color = "white";
   } else if (number >= 50 & number < 75) {
       result.innerHTML = firstName + " and " + secondName + " is great together.......refresh the page"
       result.style.color = "purple"
   } else if(number >= 75 & number < 100) {
       result.innerHTML = firstName + " and " + secondName + " is perfect........pls refresh the page";
       result.style.color = "green";
   } else {
       result.innerHTML = "hmmm"
   }
        box.append(result);

   
    }

    
}

// loveMatch();
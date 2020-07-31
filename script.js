// ***Assignment Code***
    //result variable of where random password will be generated

function writePassword() {

    event.preventDefault();

    var characterAmountNum = ""
    var numbers = "0123456789"
    var includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var includeLowercase = "abcdefghijklmnopqrstuvwxyz"
    var special = "!@#$%^&*()_+~`|}{[]:;?><,./-="
    

    //whether to include upper case letters
    var includeUppercaseEl = document.getElementById("includeUppercase")
    //whether to include lower case letters
    var includeLowercaseEl = document.getElementById("includeLowercase")
    //whether to include numbers
    var numbersEl = document.getElementById('numbers')
    //whether to include special charaters
    var specialEl = document.getElementById('special')
    //number of characters requested in the password
    var characterAmountNumEl = document.getElementById("characterAmountNum").value;
    
    var passwordResult = "";
    var passwordSet = "";

    if (includeLowercaseEl.checked) {
        passwordSet += includeLowercase;
    }
    if (includeUppercaseEl.checked) {
        passwordSet += includeUppercase;
    }
    if (numbersEl.checked) {
        passwordSet += numbers;
    }
    if (specialEl.checked) {
        passwordSet += special;
    }
    
    for (var i = 0; i < characterAmountNumEl; i++) {
        passwordResult += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));

    }

    document.getElementById("password").value = passwordResult;
    
    document.getElementById("characterAmtNum").oninput=function() {
        if (document.getElementById("characterAmountNum").value > 7) {
            document.getElementById("characterAmountNum").innerHTML=document.getElementById("characterAmountNum").value;
                
        } else{document.getElementById("characterAmountNum").innerHTML="8"
        }
    }   
}
    


//code archive...    
/*

var passwordResultEl = document.getElementById("password")

    //whether to include upper case letters

    //generate password
var generateBtnEl = document.querySelector("#generate");
    ///clipboard add try
//var clipboardEl = document.getElementById('clipboard')


/*
//***Write password to the #password input***
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    console.log(password,passwordText);

    passwordText.value = password;
}


// ***Add event listener to generate button***
/*
generateBtnEl.addEventListener("click", writePassword);
    var length = parseInt(characterAmountNumEl.value)
    var yesUppercase = includeUppercaseEl.checked; 
    var yesLowercase = includeLowercaseEl.checked;
    var yesNumbers = numbersEl.checked;
    var yesSpecial = specialEl.checked;

    //console.log(yesUppercase,yesLowercase,yesNumbers,yesSpecial);

*/



//mess around...guidance: write functions, then variables, then if/else
//functionality needed for input selections
//generate password functions (4 functions)

/*
function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
    //how can i generate special charaters/symbols???
    var specialChar = '!@#$%^&*=<>/,.';
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}
*/
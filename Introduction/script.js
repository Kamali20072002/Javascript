//this is single line comment
/*
        this is a multi-line comment
        */
console.log("Hello World!"); // This will print "Hello World!" to the console
//alert("Hello World!"); // This will show an alert box with "Hello World!"

//variables
//let can be changed later when value is updated
let amount = 0; //initialization - needs 8 bytes of memory - 64bits

amount = 100; //re-assignment
console.log("the total amount is " + amount); // This will print 100 to the console

const pi = 3.14; //constant - cannot be changed later

var total = 0; //var can be changed later when value is updated- but outdated

document.getElementById("checkingwithouttextbyscript").innerHTML="This text was added by script";//checked without text in HTML


// Functions
function check() {
  document.getElementById("checkviafunction").innerHTML = "<b>This is bold via innerHTML</b>";
}

function check2() {
  document.getElementById("checkviafunction2").innerText = "<b>This is bold via innerText</b>";
}

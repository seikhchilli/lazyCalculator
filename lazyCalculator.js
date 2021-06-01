var m = document.getElementById("input1");
var n = document.getElementById("input2");
var button = document.getElementById("entered");
button.addEventListener("click", function () {
    if (m.value == null || m.value == "") {
        alert("Enter the numbers, Bitch");
    }
        
    var sum = m.value + n.value;


    var s = document.getElementById("output");

    s.innerHTML = sum;

})


var form1 = document.adding
form1.addEventListener("submit", function(event){
    event.preventDefault();
    var addNum1 = form1.add1.value;
    var addNum2 = form1.add2.value;
    var x = +addNum1 + +addNum2;
    document.getElementById("answer1").innerHTML = x;
})

var form2 = document.subtracting
form2.addEventListener("submit", function(event){
    event.preventDefault();
    var subNum1 = form2.sub1.value;
    var subNum2 = form2.sub2.value;
    var x = +subNum1 - +subNum2;
    document.getElementById("answer2").innerHTML = x;
})

var form3 = document.multiplying
form3.addEventListener("submit", function(event){
    event.preventDefault();
    var multNum1 = form3.mult1.value;
    var multNum2 = form3.mult2.value;
    var x = +multNum1 * +multNum2;
    document.getElementById("answer3").innerHTML = x;
})
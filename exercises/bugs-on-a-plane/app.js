
var submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", formAlert)


function formAlert() {
    event.preventDefault();
    var form = document.getElementById("airlineForm")
    var firstName = form.elements.namedItem("first-name").value;
    var lastName = form.elements.namedItem("last-name").value;
    var age = form.elements.namedItem("age").value;
    var gender = form.elements.namedItem("gender").value;
    var location = form.elements.namedItem("travel-location").value;
    // var gQuery = document.querySelector("input[name='diet']").value;
    // var pQuery = document.querySelector("input[name='diet']").value;
    
    function getDiet(){
        var diet = [];
        var query = document.querySelectorAll("input[name='diet']:checked")
        var vegan = document.getElementById("vegan")
        var gluten = document.getElementById("gluten")

        for(var i = 0; i < query.length; i++){
            if (form.elements.namedItem('vegan').checked) {
                diet.push(vegan.value);
            } else if (form.elements.namedItem('gluten').checked) {
                diet.push(gluten.value);
            }
            // } else if (form.elements.namedItem('paleo').checked) {
            //     diet.push(document.getElementById('paleo').value);
            // }
            return diet[i];
            } 
        }
    // console.log(getDiet())
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + getDiet() + "\nAwesome, now if you die, it won't be an accident..");
}



// Original getDiet function
// function getDiet(){
//     var diet = [];
//     var vQuery = document.querySelectorAll("input[name='diet']:checked")
//     for(var i = 0; i < vQuery.length; i++){
//         if (form.elements.namedItem('vegan').checked) {
//             diet.push(document.getElementById("vegan").value);
//         // } else if (form.elements.namedItem('gluten').checked) {
//         //     diet.push(document.getElementById('gluten').value);
//         // } else if (form.elements.namedItem('paleo').checked) {
//         //     diet.push(document.getElementById('paleo').value);
//         // }
//         return diet;
//         } 
//     }
// }
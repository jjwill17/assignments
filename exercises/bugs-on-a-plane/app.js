
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
    
    function getDiet(){
        var diet = [];
        var query = document.querySelectorAll("input[name='diet']:checked")
        var vegan = document.getElementById("vegan")
        var gluten = document.getElementById("gluten")
        var paleo = document.getElementById("paleo")

        for(var i = 0; i < query.length; i++){
            if (form.elements.namedItem('vegan').checked) {
                diet.push(vegan.value);
            } if (form.elements.namedItem('gluten').checked) {
                diet.push(gluten.value);
            } if (form.elements.namedItem('paleo').checked) {
                diet.push(paleo.value);
            }
            return diet;
            } 
        }
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + getDiet() + "\nAwesome, now if you die, it won't be an accident..");
}

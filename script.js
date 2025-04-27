
var namee = document.querySelector(".name")
var age = document.querySelector(".age")
var male = document.getElementById("male")
var female = document.querySelector("#female")
var numb = document.querySelector(".number")
var course = document.querySelector(".course")

var outtable = document.querySelector(".s-body")




function save() {
    if (!namee.value || !age.value || (!male.checked && !female.checked) || !numb.value || !course.value) {
        alert("Please fill in all fields!");
        return;
    }
    
    var gender = female.checked ? "Female" : (male.checked ? "Male" : null)

    var newdetail = document.createElement("tr")
    newdetail.innerHTML = `<td>${namee.value}</td>` +
        `<td>${age.value}</td>` +
        `<td>${gender}</td>` +
        `<td>${numb.value}</td>` +
        `<td>${course.value}</td>` +
        `<td><button onclick='Delete(event)'>Delete</button></td>`
    outtable.append(newdetail)

    namee.value = "";
    age.value = "";
    male.checked = false;
    female.checked = false;
    numb.value = "";
    course.value = "";

    console.log(course.value)

}

function Delete(event){
    let conformation = confirm("Are you sure want to delete this profile ?")

    if (conformation){
        event.target.parentElement.parentElement.remove()
    }
}


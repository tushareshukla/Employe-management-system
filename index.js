/* start */
var addEmployee = document.querySelector("#addEmployee");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-icon");
addEmployee.onclick = function(){
    modal.classList.add("active");
}
closeBtn.addEventListener("click",
() =>{
    modal.classList.remove('active')
})




/* start all global variable */
var registerBtn = document.querySelector("#register-btn");
var id = document.querySelector("#id");
var email = document.querySelector("#email");
var lastName = document.querySelector("#last-name");
var firstName = document.querySelector("#first-name");
var jobtitle = document.querySelector("#job-title");
var officeCode = document.querySelector("#office-code");
var userData = [];











/* end all global variable */
/*start register coding */
registerBtn.onclick = function(){
   registrationData();
}
function registrationData(){
 
 userData.push({
     id: id.value,
     email: email.value,
     lastName: lastName.value,
     firstName: firstName.value,
     jobtitle: jobtitle.value,
     officeCode: officeCode.value
 });
 var userString = JOSN.stringify(userData);
 localStorage.setItem("userData", userString);
}
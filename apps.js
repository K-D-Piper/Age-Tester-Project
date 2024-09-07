/*
//age tester 

//need:
    //todays date
    //users birthdate 
    //todays date - users birthday  = 18+
    //exp. Me. 2024 - 1998 = 26

//fun idea. Back to the Present. 
    //so "Ah!" what year is this?

//above shows the date, without users input. 
    //for the idea the user would have to put in the date.





//new idea. Bouncer simulator. Get in if you're 21 then black out 
    //can still use date from above. Now user needs to input their age 



let whenSubmit = document.getElementById("submit") //connects submit button to JS (now can affect it)

//arrow function below 
whenSubmit.addEventListener("click", () => {
let userDate = document.getElementById("userDate")
let newUserDate = userDate.value
debugger
console.log(newUserDate)
let userBDay = newUserDate.toLocaleDateString();
console.log(userBDay)
//reads: if (9/6/2024 - 10/30/1998 >= 21)
/*
if (today - userDate.value >= 21){
    console.log("hi")
} else if (today - userDate.value < 21) {
    console.log("not yet")
} else {
    console.log("im confused")
}

    return
}) //arrow funciton end. Allows user's birthday to console log when clicked
*/
//TODAY'S DATE
let today = new Date().toLocaleDateString();
console.log(today); //local date


//FORM 
let ageForm = document.getElementById('myForm')

ageForm.addEventListener("click" , (event) => 
{
    event.preventDefault()
}) //stops form from refeshing 

//button testing below

submitInput = document.getElementById("submitInput")

submitInput.addEventListener("click", () => 
{
    let userDate =  document.getElementById("userDate")
    let userAge = userDate.value
    console.log(userAge) //logs to console. Does nothing.

})


submitButton = document.getElementById("submitButton")
console.log(submitButton) //logs nowhere

//arrow function below
/*
let whenSubmit = document.getElementById("submit") //connects submit button to JS (now can affect it)

whenSubmit.addEventListener("click", () => {
    let userDate = document.getElementById("userDate")
    let newUserDate = userDate.value
    debugger
    console.log(newUserDate)
    let userBDay = newUserDate.toLocaleDateString();
    console.log(userBDay)
    //reads: if (9/6/2024 - 10/30/1998 >= 21)
    if (today - userDate.value >= 21){
        console.log("hi")
    } else if (today - userDate.value < 21) {
        console.log("not yet")
    } else {
        console.log("im confused")
    }
        return
    }) //arrow funciton end. Allows user's birthday to console log when clicked
*/

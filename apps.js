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

let today = new Date().toLocaleDateString();
console.log(today);    
//new idea. Bouncer simulator. Get in if you're 21 then black out 
    //can still use date from above. Now user needs to input their age 

let userDate = document.getElementById("userDate")
console.log(userDate)

debugger
//reads: if (9/5/2024 - 10/30/1998 >= 21)
if (today - userDate >= 21){
    console.log("hi")
} else {
    console.log("bye")
}
//this is the group lab from last week.

// I was wondering why line 38-40 wouldn't work to make a button for 
//each incident. 

//Also my staten island button doesnt pull any data at all from the 
//json doc. What could be that problem? I thought it could be the 
//way I was putting Staten Island into the url but I dont know where 
//to find the exactness for the url and the borough Staten Island. I
//have tried it many differnt ways (Staten_Island, STATENISLAND, 
//STATEN_ISLAND etc.).

// Also, I tried adding a limit in the fetch url like the doc suggested 
//$limit=10 at the end of the url but it didn't work for me either. Does 
//limit need to be capitalized or something else small I am missing? 



const brooklynButton = document.querySelector("#BROOKLYN")
const manhattanButton = document.querySelector("#MANHATTAN")
const queensButton = document.querySelector("#QUEENS")
const bronxButton = document.querySelector("#BRONX") 
const statenButton = document.querySelector("#STATEN")

let textInputBar = document.querySelector(".inputText")
let screen = document.querySelector(".screen")



// if button clicked is equal to brooklyn 
//fetch url ${place} = BROOKLYN
//populate fetch data to screen
// if input? 
//populate fetch data to screen with equal number of objects

brooklynButton.addEventListener("click", function(){

    let PLACE = "BROOKLYN";
screen.innerText = ""

fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency_name=NYPD&borough=${PLACE}`)
.then(response => response.json())
.then(json => {
    let bigData = json
    console.log(bigData)
    const populateScreen = () => {
        for(i=0; i<10; i++){
            screen.innerText += "*" + bigData[i].complaint_type
            screen.innerHTML += "<br></br>";
 ///////////               
        
        // document.createElement("button");
        //button.innerText = "resolution";
        // screen.append(button)
         }
    }
    populateScreen();
})

})

/////////////////////////////////////////////////////////////////

manhattanButton.addEventListener("click", function(){

    let PLACE = "MANHATTAN";
screen.innerText=""

fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency_name=NYPD&borough=${PLACE}`)
.then(response => response.json())
.then(json => {
    let bigData = json
    console.log(bigData)
    const populateScreen = () => {
        for(i=0; i<10 ; i++){
            screen.innerText += "*" + bigData[i].complaint_type
            screen.innerHTML += "<br></br>"
         }
    }
    populateScreen();
})

})

//////////////////////////////////////////////////////////////////

queensButton.addEventListener("click", function(){

    let PLACE = "QUEENS";
    screen.innerText=""

fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency_name=NYPD&borough=${PLACE}`)
.then(response => response.json())
.then(json => {
    let bigData = json
    console.log(bigData)
    const populateScreen = () => {
        for(i=0; i<10; i++){
            screen.innerText += "*" + bigData[i].complaint_type
            screen.innerHTML += "<br></br>"
         }
    }
    populateScreen();
})

})

//////////////////////////////////////////////////////////////////

bronxButton.addEventListener("click", function(){

    let PLACE = "BRONX";
    screen.innerText=""

fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency_name=NYPD&borough=${PLACE}`)
.then(response => response.json())
.then(json => {
    let bigData = json
    console.log(bigData)
    const populateScreen = () => {
        for(i=0; i<10; i++){
            screen.innerText += "*" + bigData[i].complaint_type
            screen.innerHTML += "<br></br>"

         }
    }
    populateScreen();
})

})
 
/////////////////////////////////////////////////////////////////////

statenButton.addEventListener("click", function(){

    let PLACE = "STATENISLAND";
screen.innerText = ""

fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency_name=NYPD&borough=${PLACE}`)
.then(response => response.json())
.then(json => {
    let bigData = json
    console.log(bigData)
    const populateScreen = () => {
        for(i=0; i<10; i++){
            screen.innerText += "*" + bigData[i].complaint_type
            screen.innerHTML += "<br></br>"
            screen.createElement("button")
         }
    }
    populateScreen();
})

})

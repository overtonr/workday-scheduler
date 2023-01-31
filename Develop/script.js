var saveButton = document.querySelectorAll(".saveBtn");
console.log(saveButton)
// WHEN I open the planner
// THEN the current date is displayed at the top of the calendar
    // Thurs, Oct 6 2022
    var today = moment();
    $("#current-day").text(today.format("dddd, MMMM Do"));
 
    
var timeSlot = 18;



$( "textarea" ).each(function( index ) {
    console.log( index + ": " + $( this).each);
  });

// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    //past :: grey
    //present :: red
    // future :: green 
//var timeSlot = 
$('.slot').each(function(i, value) {
    var textareaId = parseInt(value.id);
    var currentTime = parseInt(moment().format('HH'))
    console.log(textareaId, currentTime)

    if(textareaId == currentTime){
        $(this).addClass("present");
    } else if(textareaId < currentTime) {
        $(this).addClass("past")
    } else if(textareaId > currentTime) {
        $(this).addClass("future")
    };
  });

  

// console.log(timeSlot);
console.log(moment().format('HH'));
// console.log(typeof(moment().format('H HH')));


// if(timeSlot == moment().format('HH')){
//     $("textarea").addClass("present");
// } else if(timeSlot <moment().format('HH')) {
//     $("textarea").addClass("past")
// } else {
//     $("textarea").addClass("future")
// };

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


//loop through textareaS, for each textarea, get the id value, and compare to current time

//event.target or 'this' key word
//traverse the DOM : to text area and store value of that text area

// document.getElementById("saveBtn").addEventListener("click", saveInput());


function saveInput(){
    console.log(document.getElementById.previousElementSibling);
}

//vanilla js click for multiple items
// for (var i = 0; i < saveButton.length;i++) {
//     saveButton[i].addEventListener("click", function(event) {
//         event.preventDefault();
//         console.log(this)
//       });
// }

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var textValue = $(this).prev().val()
    //save textValue to locastorage
    localStorage.setItem(keyname, textValue)
  });

//loop through each textareaa
//each textarea, display value that you got from local storage

//get textvalue from localstorage
//and idsplay on each text area
localStorage.getItem(keyname)

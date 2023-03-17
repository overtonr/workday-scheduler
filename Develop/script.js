// the current date is displayed at the top of the calendar
// format: Thurs, Oct 6 2022
var today = moment();
$("#current-day").text(today.format("dddd, MMMM Do YYYY"));

//each timeblock class added to indicate whether it is in the past, present, or future
//past :: grey
//present :: red
// future :: green
$(".slot").each(function (i, value) {
  var textareaId = parseInt(value.id);
  var currentTime = parseInt(moment().format("HH"));

  if (textareaId == currentTime) {
    $(this).addClass("present");
  } else if (textareaId < currentTime) {
    $(this).addClass("past");
  } else if (textareaId > currentTime) {
    $(this).addClass("future");
  }
});

//current hour
console.log(moment().format("HH"));

//loop through textareaS, for each textarea, get the id value, and compare to current time

//event.target or 'this' key word
//traverse the DOM : to text area and store value of that text area

// document.getElementById("saveBtn").addEventListener("click", saveInput());

function saveInput() {
  console.log(document.getElementById.previousElementSibling);
}

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // var textValue = $(this).prev().val()
  var textValue = $(this).prev().val().trim();
  console.log(textValue);
  var index = event.target.previousElementSibling.getAttribute("id");
  console.log(index);
    //save textValue to locastorage
 localStorage.setItem(JSON.stringify(index), JSON.stringify(textValue)); // $(this).textContent = textValue;

});

//loop through each textareaa
//each textarea, display value that you got from local storage

//get textvalue from localstorage
//and idsplay on each text area
var savedInp = localStorage.getItem("inputTxt");

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


// document.getElementById("saveBtn").addEventListener("click", saveInput());

//TODO: create an object using JQUERY
// store each object to LS 
// parse in from the block ID, change the text area for that block to the stored texIn
var index = $('<textarea>')[0];
var textInput = $('<textarea>');

// function renderItems(){
//     //set each textarea content to the value stored in the LS for that specific TA id
//     // $("saveBtn").previousElementSibling.value = "save";
// };


// function saveInput() {
//   console.log(document.getElementById.previousElementSibling);
// }

// $(".saveBtn").on("click", function (event) {
//   event.preventDefault();
//   // var textValue = $(this).prev().val()
//   var textValue = $(this).prev().val().trim();
//   console.log(textValue);
//   var index = event.target.previousElementSibling.getAttribute("id");
//   console.log(index);
//     //save textValue to locastorage
//  localStorage.setItem(JSON.stringify(index), JSON.stringify(textValue))
// });

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var task = {
        hour: index,
        textIn: textInput.value,
    };
   localStorage.setItem("task", JSON.stringify(task));
  });
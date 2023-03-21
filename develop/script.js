// the current date is displayed at the top of the calendar
// format: Thurs, Oct 6 2022
var today = moment();
$("#current-day").text(today.format("dddd, MMMM Do YYYY"));

//each timeblock class added to indicate whether it is in the past, present, or future
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

//event listener : saves the input to local storage
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var task = {
    textValue: $(this).prev().val().trim(),
    index: event.target.previousElementSibling.getAttribute("id"),
  };
  localStorage.setItem(task.index, task.textValue);
});

//renders text value to each input block
$("#09").val(localStorage.getItem("09"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));


//clears all inputs and local storage
$("#clearBtn").on("click", function (event){
  $("textarea").val("input");
  localStorage.clear();
});
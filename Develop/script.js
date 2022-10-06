// WHEN I open the planner
// THEN the current date is displayed at the top of the calendar
    // Thurs, Oct 6 2022
    var today = moment();
    // $(document).ready(function () {
        // var today = moment();
        // // today = moment(new Date()),
        // refreshToday = function(){
        //     today = moment(new Date()),
        $("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
    //     };
    //     refreshToday();
    //     setInterval(refreshToday(),1000);
    // });
    
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    // 9am to 5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    //past :: grey
    //present :: red
    // future :: green
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

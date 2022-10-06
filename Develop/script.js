// WHEN I open the planner
// THEN the current date is displayed at the top of the calendar
    // Thurs, Oct 6 2022
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


//loop through textareaS, for each textarea, get the id value, and compare to current time

//event.target or 'this' key word
//traverse the DOM : to text area and store value of that text area
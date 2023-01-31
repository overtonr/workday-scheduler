# Workday Scheduler
- https://overtonr.github.io/challenge-scheduler/

## Description:
This application is an hour-by-hour work day scheduler. Users can see the current date at the top of the page. They can also see a breakdown of their work day by hour. The save button ensures the events they input will be saved.

```c
if(timeSlot == moment().format('HH')){
        $("textarea").addClass("present");
    } else if(timeSlot <moment().format('HH')) {
        $("textarea").addClass("past")
    } else {
        $("textarea").addClass("future")
    };
```

![Screenshot of webpage](./Develop/assets/page-ss.png)

## Usage: 
The current date can be viewed at the top of the screen. There is an hour-by-hour breakdown of the day, in which users can input text such as an event or task. If the time slot is grey, that means the time has passed, red if it is the present hour, and green if it is in the future. Users can also save the input to the local storage so that the input can be saved.

## Technologies Used:
* Github
* HTML
* CSS
* JavaScript
* JQuery
* Moment.js
* Bootstrap.js
* VS Code

## License 
Please refer to the license in the repository.
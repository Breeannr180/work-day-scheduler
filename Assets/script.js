// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Display today's date 
var today = dayjs()
$("#currentDay").text(today.format("dddd, MMMM D YYYY"));


$(function () {
 
  // save button event listener
  $(".saveBtn").on("click", function () {
    const $this = $(this);
    // Get nearby values of the description in JQuery
    const text = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  })
// track times tasks/verbiage is input
  function timeTracker() {
    // number of current hours
    var timeNow = dayjs().hour();
    // loop over time blocks
    $(".time-block").each(function () {
      const $this = $(this);
      const id = $this.attr("id");
      const val = localStorage.getItem(id);

      $this.children("textarea").eq(0).val(val);

      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

      }

    })
  }
   // Get saved inputs from local storage if any at specific hours
   $("#hour8 .description").val(localStorage.getItem("hour8"));
   $("#hour9 .description").val(localStorage.getItem("hour9"));
   $("#hour10 .description").val(localStorage.getItem("hour10"));
   $("#hour11 .description").val(localStorage.getItem("hour11"));
   $("#hour12 .description").val(localStorage.getItem("hour12"));
   $("#hour13 .description").val(localStorage.getItem("hour13"));
   $("#hour14 .description").val(localStorage.getItem("hour14"));
   $("#hour15 .description").val(localStorage.getItem("hour15"));
   $("#hour16 .description").val(localStorage.getItem("hour16"));
   $("#hour17 .description").val(localStorage.getItem("hour17"));

   timeTracker();
});
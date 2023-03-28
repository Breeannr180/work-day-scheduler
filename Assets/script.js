// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Display today's date 
var today = dayjs()

// var time = dayjs().hour()
$("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm A"));

// 


 $(document).ready(function(){
         function getdate(){
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
             if(s<10){
                 s = "0"+s;
             }

            $("h1").text(h+" : "+m+" : "+s);
             setTimeout(function(){getdate()}, 500);
            }

        $("button").click(getdate);
    });

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
// track times that tasks/verbiage is input at
  function timeTracker() {
    // number of current hours
    var timeNow = dayjs().hour();
    // loop over time blocks
    $(".time-block").each(function () {
      const $this = $(this);
      const blockTime = $this.attr("id");
      // const val = localStorage.getItem(id);

      // $this.children("textarea").eq(0).val(val);

      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime == timeNow) {
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
   $("#8 .description").val(localStorage.getItem("8"));
   $("#9 .description").val(localStorage.getItem("9"));
   $("#10 .description").val(localStorage.getItem("10"));
   $("#11 .description").val(localStorage.getItem("11"));
   $("#12 .description").val(localStorage.getItem("12"));
   $("#13 .description").val(localStorage.getItem("13"));
   $("#14 .description").val(localStorage.getItem("14"));
   $("#15 .description").val(localStorage.getItem("15"));
   $("#16 .description").val(localStorage.getItem("16"));
   $("#17 .description").val(localStorage.getItem("17"));

   timeTracker();
});
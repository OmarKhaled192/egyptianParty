// section 1
let c = 0;
function reflect() {
  if (c % 2) {
    $("#home .side-bar").animate({ left: "-25%" }, 1000);
    $("#home .open-bar").animate({ marginLeft: 0 }, 1000);
  } else {
    $("#home .side-bar").animate({ left: 0 }, 1000);
    $("#home .open-bar").animate({ marginLeft: "25%" }, 1000);
  }
  c++;
}

$(function () {
  $("#home .open-bar").on("click", function () {
    reflect();
  });
  $("#home .side-bar .xmark").on("click", function () {
    reflect();
  });
});

// section 2
$(function () {
  let titles = $("#duration .articles article p");
  titles.on("click", function () {
    titles.next().slideUp();
    if ($(this).next().css("display") == "block") {
      $(this).next().slideUp();
    } else {
      $(this).next().slideDown();
    }
  });
});

// section 3
let days, hours, minutes, seconds;
$(function () {
  setInterval(function () {
    days = Number(document.getElementById("days").textContent);
    hours = Number(document.getElementById("hours").textContent);
    minutes = Number(document.getElementById("minutes").textContent);
    seconds = Number(document.getElementById("seconds").textContent);

    [seconds, minutes, hours, days] = setTime(seconds, minutes, hours, days);

    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("days").innerHTML = days;
  }, 1000);
});

function setTime(seconds, minutes, hours, days) {
  if (seconds > 0) seconds--;
  else if (seconds == 0) {
    seconds = 59;
    if (minutes > 0) minutes--;
    else if (minutes == 0) {
      minutes = 59;
      hours--;
      if (hours == 0) {
        days == 29;
        hours = 59;
      }
    } else {
      minutes = 59;
      if (hours > 0) hours--;
      else if (hours == 0) {
        days == 29;
        hours = 59;
      }
    }
  }
  return [seconds, minutes, hours, days];
}

// section 4
$(function () {
  let lenOld = 0, flag = false;
  $("#textMessage").on("keydown", function () {
    lenOld = $("#textMessage").val().length;
    console.log(`len old is ${lenOld}`);
  });

  $("#textMessage").on("input", function () {
    let NumOfChars = Number($(".NumOfChars").html()),
      lenNew = $("#textMessage").val().length;
    console.log(`len new is ${lenNew}`);

    if (lenOld > lenNew) {
      NumOfChars++;
      if (NumOfChars > 100) NumOfChars = 100;
    } else {
      NumOfChars--;
      if (NumOfChars < 0) {
        NumOfChars = 0;
      }
    }

    if (NumOfChars == 0) {
      $(".NumOfChars").html("your available character finished");
    } else {
      $(".NumOfChars").html(NumOfChars);
    }
  });
});

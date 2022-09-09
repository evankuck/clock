console.log("loaded");

     function updateClock() {
          var currentTime = new Date();

          var currentHours = currentTime.getHours();
          var currentMinutes = currentTime.getMinutes();
          var currentSeconds = currentTime.getSeconds();

          currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
          currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

          var amOrPm = (currentHours < 12) ? "AM" : "PM";

          currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
          currentHours = (currentHours === 0) ? 12 : currentHours;

          var time = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + amOrPm;

          $("#clock").html(time);
     }
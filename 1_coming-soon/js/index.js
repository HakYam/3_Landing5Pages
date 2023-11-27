// Set the target date and time
const targetDate = new Date("Dec 31, 2023 12:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

   // Calculate the remaining time
  const distance = targetDate - now;

    var months = Math.floor(distance  / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor(distance  % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance  % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance  % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance  % (1000 * 60) / (1000));

    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
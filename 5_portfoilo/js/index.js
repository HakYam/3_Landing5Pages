// Select the navbar using its id
var navbar = document.getElementById('navbar');

// Add an event listener for the scroll event on the window
window.addEventListener('scroll', function() {
    // Check the current scroll position
    if (window.pageYOffset > 200) {
        // If scrolled more than 200px, add the noTransparent class to the navbar
        navbar.classList.add('noTransparent');
    } else {
        // Otherwise, remove it
        navbar.classList.remove('noTransparent');
    }
});

// Circle progress
$(document).ready(function() {
    $(".circle").circleProgress({
        startAngle: -Math.PI / 2,
        fill: "#0575e6"
    }).on("circle-animation-progress", function(event, progress, stepValue) {
        $(this).find("span").html(Math.round(stepValue * 100) + "%");
    })
})

// portfolio section
document.addEventListener('DOMContentLoaded', function() {
    let navButtons = document.querySelectorAll('.portfolio-nav button');
    let gallery = document.querySelector('.portfolio-gallery');
    let galleryItemContainers = document.querySelectorAll('.portfolio-gallery > div');

    function applyAnimationToItems(items) {
        items.forEach(item => {
            item.style.display = 'block';
            setTimeout(() => item.querySelector('.portfolio-item').classList.add('visible'), 50); // delay to trigger the animation
        });
    }

    navButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Hide all items and remove the 'visible' class
            galleryItemContainers.forEach(item => {
                item.style.display = 'none';
                item.querySelector('.portfolio-item').classList.remove('visible');
            });

            // Determine which items to show and move them to the top
            let itemsToShow;
            if (button.getAttribute('data-filter') === 'all') {
                itemsToShow = galleryItemContainers;
            } else {
                itemsToShow = Array.from(galleryItemContainers).filter(item => {
                    let categories = item.querySelector('.portfolio-item').getAttribute('data-category').split(',');
                    return categories.includes(button.getAttribute('data-filter'));
                });
            }

            // Move the selected items to the top
            itemsToShow.forEach(item => {
                gallery.prepend(item);
            });

            // Display items and apply the animation
            applyAnimationToItems(itemsToShow);
        });
    });

    // Apply animation to all items when the page loads
    applyAnimationToItems(Array.from(galleryItemContainers));
});

//copyright year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
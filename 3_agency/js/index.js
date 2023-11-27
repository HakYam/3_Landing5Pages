function scrollFuntion() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById('navbar').classList.add('noTransparent');
    } else {
        document.getElementById('navbar').classList.remove('noTransparent');
    }
}


window.onscroll = function () {
    scrollFuntion();
}

// counters

const delay = 50;

function calculateIncrement(targetValue, maxIterations) {
    return Math.ceil(targetValue / maxIterations);
}

function countUp(elementId, targetValue, incrementValue) {
    let counterValue = parseInt(document.getElementById(elementId).innerText, 10) || 0;

    function updateCount() {
        if (counterValue < targetValue) {
            counterValue += incrementValue;
            if (counterValue > targetValue) {
                counterValue = targetValue;
            }
            document.getElementById(elementId).innerText = counterValue;
            setTimeout(() => updateCount(), delay);
        } else {
            document.getElementById(elementId).innerText = targetValue;
        }
    }

    updateCount();
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetValues = {
                'website-count': 125,
                'app-count': 30,
                'user-count': 1200,
                'video-count': 45
            };
            const maxTargetValue = Math.max(...Object.values(targetValues));
            const maxIterations = maxTargetValue / 10;

            const targetValue = targetValues[entry.target.id];
            const incrementValue = calculateIncrement(targetValue, maxIterations);

            countUp(entry.target.id, targetValue, incrementValue);
            observer.unobserve(entry.target); // Stop observing after starting the counter
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);

// Start observing the counters
const counterIDs = ['website-count', 'app-count', 'user-count', 'video-count'];
counterIDs.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        observer.observe(element);
    }
});


// form validation
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

// copyright year
const currentYear = new Date().getFullYear();
document.getElementById('fullYear').innerHTML = currentYear;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const steps = document.querySelectorAll('.step');
const progress = document.querySelector('.progress');

let currentActive = 1;

next.addEventListener('click', function () {
    currentActive++
    
    if(currentActive > steps.length) {
        currentActive = steps.length;
    }
    
    updateUI()

});

prev.addEventListener('click', function () {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1;
    }

    updateUI();
})

 function updateUI () {
     steps.forEach(function (step, indx) {
         if(indx < currentActive) {
             step.classList.add('active');
         } else {
             step.classList.remove('active');
         }
     });

     const active = document.querySelectorAll('.active');

     progress.style.width = (active.length -1) / (steps.length -1) * 100 + '%';

     if(currentActive === 1) {
         prev.disabled = true;
     } else if(currentActive === steps.length) {
         next.disabled = true;
     } else {
         prev.disabled = false;
        next.disabled = false;
     }
 }
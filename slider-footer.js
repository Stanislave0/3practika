document.querySelector('.connection-prev').addEventListener('click', function () {
    list_slider = document.querySelectorAll(".connection-slide");
    for (i = 0; i < list_slider.length; i++) {
        
        if (list_slider[0].style.display !== 'none') {
            list_slider[0].style.display = 'none';
            list_slider[list_slider.length-1].style.display = 'block';
            break;
        }
        if (list_slider[i].style.display == 'block') {
            list_slider[i].style.display = 'none';
            list_slider[i-1].style.display = 'block';
            break;
        }
    }
});

// function updatesdots(dooo) {
//     list_dots = document.querySelectorAll('.connection-slider-dot');
//     for (i = 0; i < list_dots.length; i++) {
//         if (dooo == 'next') {
//             if (list_dots[i].classList.contains('active-dot') == true) {
//                 if (i == list_dots.length-1) {
//                 list_dots[i].classList.remove('active-dot');
//                 list_dots[0].classList.add('active-dot');
//                 break;
//                 }
//                 list_dots[i].classList.remove('active-dot');
//                 list_dots[i+1].classList.add('active-dot');
//                 break;
//             }
//         }
//     }
// }





document.querySelector('.connection-next').addEventListener('click', function () {
    list_slider = document.querySelectorAll(".connection-slide");
    
    for (i = 0; i < list_slider.length; i++) {
        if (i == list_slider.length-1) {
            list_slider[i].style.display = 'none';
            list_slider[0].style.display = 'block';
            break;
        }
        if (list_slider[i].style.display !== 'none') {
            list_slider[i].style.display = 'none';
            list_slider[i+1].style.display = 'block';
            break;
        }
    }
    // updatesdots('next');
});
{offset = 0;
sliderLine = document.querySelector('.slider-top-list');
width_slide = document.querySelector('.slider-top');
width_img = sliderLine.querySelector("img").offsetWidth;
console.log(width_img);

function resizeWindow() {
  sliderLine.style.left = 0 + 'px';
}

function nextdot(doo) {
  slider_dots = document.querySelector('.slider-top-dots');
  list_dots = document.querySelectorAll('.slider-top-dot');
  if (doo == 'next') {
    for (i = 0; i < list_dots.length; i++) {
      if (list_dots[i].classList.contains('active-dot-top') == true) {
        if (i == list_dots.length-1) {
          list_dots[i].classList.remove('active-dot-top');
          list_dots[0].classList.add('active-dot-top');
          break;
        }
        list_dots[i].classList.remove('active-dot-top');
        list_dots[i+1].classList.add('active-dot-top');
        break;
      }
    }
  }
  if (doo == 'prev') {
    for (i = 0; i < list_dots.length; i++) {
      console.log(i, list_dots.length-1);
      if (list_dots[i].classList.contains('active-dot-top') == true) {
        if (i == 0) {
          list_dots[i].classList.remove('active-dot-top');
          list_dots[list_dots.length-1].classList.add('active-dot-top');
          break;
        }
        console.log('да',i);
        list_dots[i].classList.remove('active-dot-top');
        list_dots[i-1].classList.add('active-dot-top');
        break;
      }
    }
  }
}
window.addEventListener('resize', (e) => {
  resizeWindow()
});

document.querySelector('.slider-top-next').addEventListener('click', function (){
  sliderLine = document.querySelector('.slider-top-list');
  width_img = sliderLine.querySelector("img").offsetWidth;
  offset = offset + width_img;
  if (offset > width_img*2) {
      offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
  clearInterval(interval);
  nextdot('next');
});

document.querySelector('.slider-top-prev').addEventListener('click', function () {
  width_img = sliderLine.querySelector("img").offsetWidth;
  offset = offset - width_img;
  if (offset < 0) {
      offset = width_img*2;
  }
  sliderLine.style.left = -offset + 'px';
  clearInterval(interval);
  nextdot('prev');
});
function gotonext() {
  sliderLine = document.querySelector('.slider-top-list');
  width_img = sliderLine.querySelector("img").offsetWidth;
  offset = offset + width_img;
  if (offset > width_img*2) {
      offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
  nextdot('next');
}
let interval = setInterval(gotonext, 5000);
}